window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})

let display = document.getElementById('display')

function handleSubmit(e){
    e.preventDefault();

    let form = new FormData(e.target)

    let search = form.get('searchusers')
    let page = form.get('page')
    let per_page = form.get('per_page')

    if(search !== ""){
         fetchUsers( search,page,per_page,printData) 
    }
}


function fetchUsers( query,page,per_page,printData) {
    let xhr = new XMLHttpRequest()
    let url = `https://api.github.com/search/users?query=${query}&page=${page}&per_page=${per_page}}`

    xhr.open('GET',url)
    xhr.send()
    xhr.onload = () => {
        if(xhr.status === 200){
            let res = JSON.parse(xhr.response)
            printData(res)
        }
    }
  }

  function printData () {
      display.innerHTML = ""

      let table = document.createElement('table')
      let thead = document.createElement('thead')
      let theadrow = document.createElement('tr')

      let th1 = document.createElement('th')
      th1.textContent = "UserName"

      let th2 = document.createElement('th')
      th2.textContent = "page"

      let th3 = document.createElement('th')
      th3.textContent = "per_page"

      let tbody = document.createElement('tbody')
      for(let i=0; i<items.length; i++){
          let current = items[i]

          let tbodyrow = document.createElement('tr')

          let td1 = document.createElement('td')
          td1.textContent = current['user']
          let td2 = document.createElement('td')
          td1.textContent = current['page']
          let td3 = document.createElement('td')
          td1.textContent = current['per_page']

          tbodyrow.append(td1,td2,td3)
          tbody.append(tbodyrow)
      }
      theadrow.append(th1,th2,th3)
      thead.append(theadrow)
      table.append(thead)
      table.append(tbody)
      display.append(table)
  }
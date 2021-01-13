window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})
let display = document.getElementById('display')

function handleSubmit() {
    event.preventDefault()

    let form = new FormData(event.target)

    let searchTerm = form.get('searchTerm')
    let sortBased = form.get('sortBased')
    let sortOrder = form.get('sortOrder')


    if(searchTerm !== ""){
        handleData(searchTerm,sortBased,sortOrder,printData)
    }
    else {
       displayErrorMessage()
    }
}

function displayErrorMessage(){
    display.innerHTML = ""
    display.textContent = "search term should not be empty"
}

function handleData (q,sort,order,printData){
    let xhr = new XMLHttpRequest()

    xhr.open('GET',`http://api.github.com/search/repositories?q=${q}&sort=${sort}&order=${order}`)
    xhr.send()
    xhr.onload = function(){
        if(xhr.status === 200){
            let resData = JSON.parse(xhr.response).items
            printData(resData)
        }
    }
}

function printData(){
    display.innerHTML = ""

    let table = document.createElement('table')
    let thead = document.createElement('thead')
    let theadrow = document.createElement('tr')

    let th1 = document.createElement('th')
    th1.textContent = "Display Language"
    let th2 = document.createElement('th')
    th2.textContent = "Repo Link"
    let th3 = document.createElement('th')
    th3.textContent = "Description"

    theadrow.append(th1,th2,th3)
    thead.append(theadrow)

    let tbody = document.createElement('tbody')
    for(let i=0; i<data.length; i++){
        let current = data[i]

        let tbodyRow = document.createElement('tr')

        let td1 = document.createElement('td')
        td1.textContent = current['language']
        let td2 = document.createElement('td')
        td2.innerHTML = `<a href=${current['html_url']}>${current['html_url']}</a>`
        let td3 = document.createElement('td')
        td3.textContent = current['description']

        tbodyRow.append(td1,td2,td3)
        tbody.append(tbodyRow)
    }
        table.append(thead)
        table.append(tbody)
        display.append(table)
}


let display = document.getElementById('display')
let logoutBtn = document.getElementById('button')

let loginData = JSON.parse(localStorage.getItem("loginData")) || []
let currentUser = JSON.parse(localStorage.getItem("currentUser")) || {}

window.addEventListener('load',function(){
    const {username, type} = currentUser

    if(!username || type !== 'user'){
        logout()
    }

    displayData (loginData)

    function displayData(loginData) {
        display.innerHTML = ""

        let table = document.createElement('table')
        let thead = document.createElement('thead')
        let theadrow = document.createElement('tr')

        let th1 = document.createElement('th')
        th1.textContent = "username"
        let th2 = document.createElement('th')
        th2.textContent = "User-Type"
        let th3 = document.createElement('th')
        th3.textContent = "Login-Time"

        theadrow.append(th1,th2,th3)
        thead.append(theadrow)

        let tbody = document.createElement('tbody')
        for(let i=0; i<data.length; i++){
            let current = data[i]

            let tbodyRow = document.createElement('tr')

            let td1 = document.createElement('td')
            td1.textContent = current['username']
            let td2 = document.createElement('td')
            td2.textContent = current['type']
            let td3 = document.createElement('td')
            td3.textContent = current['time']

            tbodyRow.append(td1,td2,td3)
            tbody.append(tbodyRow)
        }

        table.append(thead)
        table.append(tbody)

        display.append(table)

    }
})

logoutBtn.addEventListener('click',logout)

function logout() {
    localStorage.removeItem('currentUser')
    location = "loginform.html"
}

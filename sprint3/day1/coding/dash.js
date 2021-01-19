let usernameDisplay = document.getElementById('username')
let timeDisplay = document.getElementById('time')
let logoutBtn = document.getElementById('button')


let currentUser = JSON.parse(localStorage.getItem("currentUser"))

console.log(currentUser)

window.addEventListener('load',function(){
    const { username , time} = currentUser

    if(!username){
        location = "loginform.html"
    }

    console.log(username,time)

    usernameDisplay.textContent = username;
    timeDisplay.textContent = time;

    logoutBtn.addEventListener('click',logout)

    function logout() {
        localStorage.removeItem('currentUser')
        location = "loginform.html"
    }
})

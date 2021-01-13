window.addEventListener('onload',function(){
    let form = document.querySelector(form)
    form.addEventListener('submit',handleSubmit)
})
let random = document.getElementById('random')
let newbtn = document.getElementById('newbtn')


function handleSubmit (event) {
    event.preventDefault()
    
    let form = new FormData(event.target)
    
    let searchfacts = form.get("searchfacts")

    let categories = form.get("categories")

    console.log(categories,searchfacts)
}

newbtn.addEventListener('click',getNew)

function getNew () {
    let xhr = new XMLHttpRequest()
    xhr.open('GET',`https://api.chucknorris.io/jokes/random`)
    xhr.send()
    xhr.onload = function () {
        if(xhr.status === 200){
            let resdata = JSON.parse(responseData)
            console.log(resdata)
        }
        }
    }
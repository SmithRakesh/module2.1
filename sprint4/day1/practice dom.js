let form = document.querySelector('form')

let out = document.querySelector('.out')
form.addEventListener('submit',handleSubmit)

function handleSubmit(e) {
    e.preventDefault()
    let boxNum = document.getElementById('number').value
    console.log(boxNum)
    createBox(boxNum)
}

function createBox(boxNum) {
    for(let i=0; i<boxNum; i++){
        let box = document.createElement('div')
        box.textContent = "box " + (i+1)
        box.addEventListener('click',clicked)
        out.append(box)
    }
}

function clicked(e) {
   
    e.target.style.color = "red"
}
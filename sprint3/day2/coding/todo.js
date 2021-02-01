window.addEventListener('load',function() {
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})
let cards = document.getElementById('cards')

function handleSubmit (e){
    e.preventDefault()

    let form = new FormData(e.target)

    let todoTask = form.get('todo')

    if(todoTask === ""){
        alert("TODO cannot be empty")
    }else{
        postData(todoTask)
    }
}

function postData(currentTask) {
    let obj = {}
    obj["todo"] = currentTask

    let xhr = new XMLHttpRequest()
    let json = JSON.stringify(obj)
    xhr.open('POST','http://localhost:3000/task')
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = () => {
        if(xhr.readyState === 4){
            document.getElementById('todo').textContent = "";
            loadDetails()
        }
        else{
            console.log("Error while posting data")
        }
    }
    xhr.send(json)
}

function loadDetails (){
    let xhr = new XMLHttpRequest()
    let url = 'http://localhost:3000/task'
    xhr.open('GET',url)
    xhr.onload = () => {
        data = JSON.parse(xhr.responseText)
        if(xhr.status === 200){
            document.getElementById("todo").innerHTML = ""
            printData()
        }
    }

    xhr.send(null)
}

function printData(){
    let output = ""
    for(let i in data) {
        output += `
        <div class="card">
        <input type=checkbox class="checkbox" /><span class="allTodos">${data[i].todo}</span></br>
        <button id="${data[i].id}" class="delete" onClick="deleteData(this)">DELETE </button>
        <button id="${data[i].id}" class="update" onClick="updateData(this)">UPDATE </button>
        </div>
        `;
    }
    cards.innerHTML = output;
}

function deleteData(data) {
    let id = data.id;
    let xhr = new XMLHttpRequest();
    let url = `http://localhost:3000/task/${id}`
    xhr.open("DELETE", url);
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            loadDetails();
        }else {
            console.log("Error while deleting the data")
        }
    };

    xhr.send();
}

// let checkbox = document.getElementById('checkbox')
// checkbox.addEventListener('onchange',function(){
    
// })

function updateData(data) {
    let id = data.id;
    let xhr = new XMLHttpRequest();
    let url = `http://localhost:3000/task/${id}`
    xhr.open("PATCH", url);
    xhr.setRequestHeader("Content-Type", "application/json; charset=utf-8");
    xhr.onload = function () {
        if (xhr.readyState == 4 && xhr.status == "200") {
            loadDetails();
        }else {
            console.log("Error while deleting the data")
        }
    };

    xhr.send();
}

window.addEventListener('load',function(){
    fetch("http://localhost:3000/questions").then(res => res.json()).then(res => printData(res))
})

let questions = document.querySelector(".questions")
function printData(data) {
    let output = "";
    for(let i in data){
         output += `<div class="question">
            <h3>Question :- ${data[i].question}</h3>
            <h4>Option1 :-${data[i].option_1}</h4>
            <h4>Option2 :-${data[i].option_2}</h4>
            <h4>Option3 :-${data[i].option_3}</h4>
            <h4>Option3 :-${data[i].option_4}</h4>
            <button class="answer">Answer</button>
        </div>`
    }
    questions.innerHTML = output
}

let answer = document.querySelector(".answer")
answer.addEventListener('click',questionPage)

function questionPage(e) {
    location = "question.html"
    let page = e.id
    fetch(`http://localhost:3000/questions?id=${page}`).then(res => res.json()).then()
    location = "question.html"
}
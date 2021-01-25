let cards = document.querySelector('.cards')
let url = "http://localhost:3000/appointments"

let new_appointment = document.querySelector('.new-appointment')
new_appointment.addEventListener('click',function() {
    location = "new_appointment.html"
})

window.addEventListener('load',execute)

function execute(){
    fetch(url).then(res => res.json())
    .then(res => {
        let output = ""
        for(let i in res){
            if(res[0] === undefined){
                alert("Create New Appointmnet, there are no current appoinments")
                location = "new_appointment.html"
            }
            else{
            output += `
            <div class="card">
                <h3>Name:- ${res[i].name}<h3>
                <h3 class="reason">Your Appointmnet:- ${res[i].appointment}</h3>
                <h3>Time:- ${res[i].time}</h3>
                <h3>Date:- ${res[i].date}</h3>
            </div>
            `
            }
        }
        cards.innerHTML = output;
    })
}


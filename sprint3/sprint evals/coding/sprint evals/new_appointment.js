window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})
let url ="http://localhost:3000/appointments"

function handleSubmit(e) {
    e.preventDefault()

    let form = new FormData(e.target)

    let name = form.get('name')
    let age = form.get('age')
    let appointment = form.get('appointment')
    let time = form.get('time')
    let date = form.get('date')
    let gender = form.get('gender')

   let appointmentDetails = {
       name,age,appointment,time,date,gender
   }

   fetch(url,{
       method:'POST',
       body:JSON.stringify(appointmentDetails),
       headers: {
        'Content-Type': 'application/json'
      },
   }).then(res => res)

   name = "";
   age = "";
   appointment = "";
   time = "";
   date = "";
   gender = "";
}
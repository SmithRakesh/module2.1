window.addEventListener('load',function () {
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})

function sleep ()

function handleSubmit () {
    event.preventDefault()

    let form = new FormData(event.target)

    let username = form.get('username')
    let mail = form.get('mail')
    let url = form.get('imageurl')
    let time = form.get('time')

    let cards = document.createElement('div')
    cards.setAttribute('class',cards)

    document.body.append(cards)

}
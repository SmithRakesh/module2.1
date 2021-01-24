window.addEventListener('load',function(){
    let form = document.querySelector('form')
    form.addEventListener('submit',handleSubmit)
})

function handleSubmit(e) {
    e.preventDefault()

    let form = new FormData(e.target)

    let username = form.get('username')
    let mail = form.get('mail')
    let number = form.get('number')
    let address = form.get('address')
    let pincode = form.get('pincode')

    let customerDetails = {
        username,
        mail,
        number,
        address,
        pincode
    }
    // let allCustomerDetails = localStorage.getItem("customerDetails",JSON.parse(allCustomerDetails)) || []
    // allCustomerDetails = [...allCustomerDetails,customerDetails]
    
    fetch("http://localhost:3000/customers",{
        method: 'post',
        body: JSON.stringify(customerDetails),
        headers: {
            'Content-Type': 'application/json'
        },
    }).then(res => res)
    // .them(res => localStorage.setItem('customerDetails',))
}
let cart = document.querySelector('.cart').addEventListener('click',function () {
    location = "order.html"
})

document.querySelector('.customer').addEventListener('click',function() {
    location = "product.html"
})
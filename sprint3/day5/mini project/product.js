let cards = document.querySelector('.cards')

window.addEventListener('load',function(){

    fetch('http://localhost:3000/products').then(res => res.json()).then(res => {
        let out = "";
        for(let i in res){
            out += `
                <div class="card">
                    <h4>${res[i].category_name}</h4>
                    <img src="${res[i].image}"/>
                    <h4>${res[i].name}</h4>
                    <p>${res[i].desc}</p>
                    <p><strong>price:-</strong> ${res[i].price}</p>
                    <button class="card-btn"><i class="fas fa-utensils"></i> Try me</button>
                </div>
            `
        }
        cards.innerHTML = out;
    })

})

    let count = document.querySelector('.count')
    
    let cuisine = document.querySelector('.input-box')


let cart = document.querySelector('.cart').addEventListener('click',function () {
    location = "order.html"
})

document.querySelector('.customer').addEventListener('click',function() {
    location = "customer.html"
})
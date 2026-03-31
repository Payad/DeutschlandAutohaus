fetch('/javascripts/products.json').then((response) => response.json())
.then((data) => {
    localStorage.setItem('products', JSON.stringify(data))
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]')
}
})


let products = JSON.parse(localStorage.getItem('products'));
console.log(products)
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart)

const addBtns = document.getElementsByClassName('shop-item-button');
// console.log(addBtns);

for (let i = 0; i < addBtns.length; i++) {
    let button = addBtns[i];

// button.addEventListener('click', (event) => {
//     console.log(event.target)
// });
button.addEventListener('click', setItemToCart);
}

function setItemToCart(event, productId) {
button = event.target
const shopItem = button.parentElement.parentElement;
const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
let product = products.find((product) => {
    console.log(product)
    if (product.name = title) {
    return product.id == productId;
}
    // return product.id == productId;
    // return product
    })

// if (cart.length == 0) {
//     console.log(cart);
//     cart.push(product)
// }
// localStorage.setItem('cart', JSON.stringify(cart))
if (cart.length == 0) {
if (cart !== 'null') {
            cart.push(product)
}
// } else {
//     let res = cart.find((element) => element.id == productId)
//     if (res === undefined) {
//         cart.push(product)
// }
}
    localStorage.setItem('cart', JSON.stringify(cart))
}

// setItemToCart()

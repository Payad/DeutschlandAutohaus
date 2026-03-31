// alert("hello")

// import {
//     addItemButtons
// } from './shop.js'

// import {
//     url
// } from './shop.js'

// console.log(url);

fetch('/javascripts/products.json').then((response) => response.json())
.then((data) => {
    localStorage.setItem('products', JSON.stringify(data))
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]')
}
})

// const addItemButtons = document.getElementsByClassName('shop-item-button');
// console.log(addItemButtons);

document.addEventListener('DOMContentLoaded', function() {


let products = JSON.parse(localStorage.getItem('products'))
console.log(products);

// var cart = localStorage.getItem('cart');
// var cart = JSON.stringify(localStorage.getItem('cart'));
var cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);


//  function addItemToCart() {

// }

// var cart = localStorage.getItem('cart')
// console.log(cart)
// cart.push(products);
// localStorage.setItem('cart', cart);


// const cartItems = document.getElementsByClassName('cart-items')[0].innerHTML = localStorage.getItem('products');
// console.log(cartItems);

///function(id, image, name, quantity)


// function setItemToCart(id, image, name, price, quantity) {
function setItemToCart(productId) {
// const cartItems = document.getElementsByClassName('cart-items')[0];
//         if (products !== null) {
//         cartItems.innerHTML = `
//         <div>${id}</div>
// <div>${image}</div>
// <div>${name}</div>
// <div>${price}</div>
// <div>${quantity}</div>
// `
// }
let product = products.find((product) => {
    console.log(product)
    return product.id == productId;
    })
        if (cart.length == 0) {
            cart = cart || [];
            cart.push(product)
} else {
    let res = cart.find((element) => element.id == productId)
    if (res === undefined) {
        cart.push(product)
}
}
    localStorage.setItem('cart', JSON.stringify(cart))
/////try this
const cartItems = document.getElementsByClassName('cart-items')[0].innerHTML = localStorage.getItem('cart', JSON.stringify(cart));
console.log(cartItems);
addItemsToCart(productId)
// console.log(products)
}

setItemToCart(2)

// console.log(product)

function addItemsToCart(productId){
const cartItems = document.getElementsByClassName('cart-items')[0]
    // let product = products.find((product) => {
    // console.log(product)
    // return product.id == productId;
    // })

    // products.map((results) => {
        let product = products.map((result) => ({
            id: result.id,
            image: result.image,
            name: result.name,
            price: result.price,
            quantity: result.quantity
}))
// })
///button selector
// for (let i = 0; i < product.length) {

// }

console.log(product);
    cartRowContents = product.map((product) => `
                <div class="cart-item cart-column">
             <span class="shop-item-title">${product.id}</span>
                <span class="cart-item-name">${product.name}</span>
                <img  class="blackMug Mugs cart-item-image" src="${product.image}" alt="">
                
            </div>
            <span class="cart-item-quantity">${product.quantity}</span>
            <span class="cart-item-price">${product.price}</span>
            <div class="cart-quantity cart-column">
                <input type="number" class="cart-quantity-input" value="1">
            
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    ).join('');
cartItems.innerHTML = cartRowContents;
// console.log(product.image);
}

});







 var storedImage = localStorage.getItem('image');
// console.log(storedImage)
    if (storedImage) {
      var output = document.getElementById('output');
      output.src = storedImage;
    // console.log(storedImage);
    }

// if (cart !== null) {
//     cartItems.innerHTML = `
//         <div>${id}</div>
// <div>${image}</div>
// <div>${name}</div>
// <div>${quantity}</div>
// `
// }

// function addItemToCart(productId) {
//     let product = products.find((product) => {
//     console.log(product)
//     return product.id == productId;
    
// })

//     if (cart.length == 0) {
//     cart.push(product)
// } else {
//     let res = cart.find(element => element.id == productId)
//     if (res === undefined) {
//         cart.push(product);
// }
// }
//     localStorage.setItem("cart", JSON.stringify(cart));

// }

// addItemToCart(1)
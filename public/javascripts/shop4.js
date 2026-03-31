///fetch products.json file// sets file to local storage on browser memory
fetch('/javascripts/products.json').then((response) => response.json())
.then((data) => {
    localStorage.setItem('products', JSON.stringify(data))
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]')
}
})

///setting up global variables so can access inside functions
let products = JSON.parse(localStorage.getItem('products'));
console.log(products)
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);

const addBtns = document.getElementsByClassName('shop-item-button');

for (let i = 0; i < addBtns.length; i++) {
        let button = addBtns[i];
        button.addEventListener('click', addItem)
}

function addItem(event, productId) {
    // console.log(event.target)
    const button = event.target
    // console.log(button);
    const shopItem = button.parentElement.parentElement;
    // // console.log(event.target.dataset.productSku)
    console.log(shopItem);
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    const prodId = JSON.parse(shopItem.getElementsByClassName('shop-item-id')[0].innerText);

    const cartItems = document.getElementsByClassName('shop-items')[0];
// console.log(cartItems);
const cartItemsId = cartItems.getElementsByClassName('shop-item-id');
console.log(cartItemsId)
const cartItemsTitle = cartItems.getElementsByClassName('shop-item-title');

// const image = shopItem.querySelectorAll('shop-item-image').src;
const image = shopItem.getElementsByClassName('shop-item-image')[0].src;
console.log(image)
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
let product = products.find((product) => {
    product.name = title;
    product.image = image;
    product.price = price
    product.id = prodId;

if (product.id === prodId) {
        return product;
}

})

for (let i = 0; i < cartItemsTitle.length; i++) {
const int = parseInt(cartItemsId[i].innerText);
console.log(int);
 if (int == product.id) {
for (let i = 0; i < cart.length; i++) {
    // console.log('hello');
console.log(cart[i].id);
    if (cart[i].id === int) {
    // console.log('Hello man')
    alert('This item is already in your cart')
    return
}
}
}
}

let productNumbers = localStorage.getItem('countNumbers');
    productNumbers = parseInt(productNumbers);
if (productNumbers) {
        localStorage.setItem('countNumbers', productNumbers + 1);
        document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
} else {
    localStorage.setItem('countNumbers', 1);
    document.getElementsByClassName('countItem')[0].textContent = 1;
}
if (cart.length >= 0) {
    // cart.push(product.name, product.image, product.price)


    console.log(cart)
//note push product as an array of objects
    cart.push({id: product.id, image: product.image, name: product.name, price: product.price, quantity: product.quantity});
    // cart.push(product);
    // console.log(product)
} else {
    let res = cart.find(element => element.id == productId)
    if (res === undefined) {
        cart.push(product);
}
}
localStorage.setItem('cart', JSON.stringify(cart))
// console.log(cart)
}
//add shopping cart notifcation
const shopcartImage = document.getElementsByClassName('shoppingCartImage')[0];
// console.log(shopcartImage);
if (cart.length >= 0) {
const wrapperDiv = document.getElementsByClassName('wrapper')[0];
    // console.log(wrapperDiv)
    const shopcartDiv = document.createElement('div');
    shopcartDiv.classList.add('notification');
    // wrapperDiv.innerHTML = shopcartDiv;

}

//Loading cart numbers on initial refresh
function onLoadCartNumbers() {
    const countItem = document.querySelector('.countItem');
    if (countItem) {
    let productNumbers = localStorage.getItem('countNumbers');
    document.querySelector('.countItem').textContent = productNumbers;
    } else {
        countItem.textContent = 0;
}
}

// const countItem = document.querySelector('.countItem');
// if (cart.length === null) {
//     countItem.textContent = 0;
// } else {
//     let productNumbers = localStorage.getItem('countNumbers');
//     document.querySelector('.countItem').textContent = productNumbers;
// }

//calling/running/invoking function
onLoadCartNumbers();

//localStorage token saved to memory
// function login() {
//         fetch("/api/login")
// .then((res) => {
//     if (res.status == 200) {
//     return res.json()
// } else {
//     throw Error(res.statusText)
// }
// })
// .then(data => {
//     localStorage.lsetItem("token", data.token)
//     logResponse("loginResponse", `localStorage set with token value: ${data.token}`)
// }) 
// .catch(console.error)
// }
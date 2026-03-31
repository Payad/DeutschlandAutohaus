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

// fetch('/javascripts/products.json').then((response) => response.json())
// .then((data) => {
//     localStorage.setItem('products', JSON.stringify(data))
//     if(!localStorage.getItem('cart')) {
//         localStorage.setItem('cart', '[]')
// }
// })


///setting up global variables so can access inside functions
// let products = JSON.parse(localStorage.getItem('products'));
// console.log(products)
// let cart = JSON.parse(localStorage.getItem('cart'));

const addBtns = document.getElementsByClassName('shop-item-button');

for (let i = 0; i < addBtns.length; i++) {
        let button = addBtns[i];

// button.addEventListener('click', addItem)
}

 function addItem(event, productId) {
    // console.log(event.target)
    const button = event.target
    // const shopItem = button.parentElement.parentElement;
    // console.log(event.target.dataset.productSku)
    // console.log(shopItem);
//     const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
// const image = shopItem.getElementsByClassName('shop-item-image')[0].src;
//     const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
// console.log(title, image, price);

let product = products.find((product) => {
//     product.name = title;
//     product.image = image;
//     product.price = price;
return product.id === productId;
})

// if (cart.length == 0) {
// cart.push(product)
// console.log(cart)
// }
if (cart.length >= 0) {
console.log(cart)
    cart.push(product);
} else {
    let res = cart.find(element => element.id == productId)
    if (res === undefined) {
        cart.push(product);
}
}
localStorage.setItem('cart', JSON.stringify(cart))
// // console.log(cart)
}

addItem(2);
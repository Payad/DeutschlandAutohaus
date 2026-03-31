fetch('/javascripts/products.json').then((response) => response.json())
.then((data) => {
    localStorage.setItem('products', JSON.stringify(data));
    if(!localStorage.getItem('cart')) {
        localStorage.setItem('cart', '[]');
}
})


let products = JSON.parse(localStorage.getItem('products'));
console.log(products);
let cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);

const addBtns = document.getElementsByClassName('shop-item-button');

for (let i = 0; i < addBtns.length; i++) {
    button = addBtns[i];
button.addEventListener('click', addItem);
}

// button.addEventListener('click', addItem);

function addItem(event, productId) {

    let button = event.target;
     const shopItem = button.parentElement.parentElement;
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    console.log(title)

    let product = products.find((product) => {
        console.log(product)
        return product.id == productId;
})
//     let product = products.forEach((product) => {
//         if (product.name === title) {
//             // return product;
//             console.log(title)
// }
// })
    if (cart.length == 0) {
        console.log(cart)
        cart.push(product);

}
// localStorage.setItem('cart', JSON.stringify(cart));
//         if (cart.length == 0) {
//         cart.push(product);
// } else {
//     let res = cart.find((element) => element.id == product.id);
//     if (res === undefined) {
//         cart.push(product);
// }
// }
}
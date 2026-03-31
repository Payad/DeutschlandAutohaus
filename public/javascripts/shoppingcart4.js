// ///JSON file///
// let sweatshirt = {
//     'product-name': 'Deutschland premier sweatshirt',
//     'price': '29.99',
//     'image': 'blacksweater.jpg',
//     'color': ['black', 'grey', 'blue']
// }

// ///Javscript file///
// let encodedProduct = JSON.stringify(sweatshirt);
// localStorage.setItem('sweatshirt', encodedProduct);

// let localData = localStorage.getItem('sweatshirt');
// console.log(localData);
// let decodedData = JSON.parse(localData);
// console.log(decodedData);


// fetch('sweatshirt').then((data) => data.json())
// .then((data) => {
//     localStorage.setItem('sweatshirt', JSON.stringify(data));
//     if(!localStorage.getItem('cart')) {
//         localStorage.setItem('cart', '[]');
// }
// })

fetch('/javascripts/products.json').then((data) => data.json())
.then((response) => {
    localStorage.setItem("products", JSON.stringify(response))
if(!localStorage.getItem("cart")){
    localStorage.setItem("cart", "[]")
}
})

// Setting Global Variables so we can access them from inside the functions
let products = JSON.parse(localStorage.getItem("products"));
let cart = JSON.parse(localStorage.getItem("cart"));

//Adding the product in the cart
function addItemToCart(productId) {
    let product = products.find((product) => {
    console.log(product)
    return product.id == productId;
    
})

//selecting html elements from shop.ejs
const shopItems = document.getElementsByClassName('shop-items')[0];
// const cartItems = document.getElementsByClassName('cart-items')[0];
// console.log(cartItems)
const cartRow = document.getElementsByClassName('cart-row');
console.log(cartRow)
console.log(shopItems)


if (cart.length == 0) {
    cart.push(product)
} else {
    let res = cart.find(element => element.id == productId)
    if (res === undefined) {
        cart.push(product);
}
}
    localStorage.setItem("cart", JSON.stringify(cart));

}

addItemToCart(2)
addItemToCart(1)

// Removing a product from a cart
function removeItemFromCart(productId) {
    let temp = cart.filter(item => item.id != productId)
    localStorage.setItem("cart", JSON.stringify(temp))
}

removeItemFromCart(1);

//updating the products quantity
function updateQuantity(productId, quantity){
    for(let product of cart) {
        if(product.id === productId) {
            product.quantity = quantity;
}
}
    localStorage.setItem("cart", JSON.stringify(cart));
}

updateQuantity(2, 8)

// Get he cart's total sum
function getTotal() {
    let temp = cart.map(function(item) {
    return parseFloat(item.price)
});

    let sum = temp.reduce(function(prev, next) {
        return prev + next;
}, 0)
    console.log(sum)
}
getTotal();

// console.log(product)
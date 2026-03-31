// alert("hello")

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

// let cart = localStorage.getItem('cart');
// let cart = JSON.stringify(localStorage.getItem('cart'))

// export const addCartItemButtons = () => {
//     console.log('Hello');
// }

// var cart = localStorage.getItem('cart')
// console.log(cart)
// cart.push(products);
// localStorage.setItem('cart', JSON.stringify(cart));

// function addItemToCart(productId) {
//     let product = products.find(function(product) {
//         return product.id === productId;
// })

//     if(cart.length == 0) {
//         cart.push(product)
// } else {
//         let res = cart.find(element => element.id == productId);
//         if(res === undefined) {
//             cart.push(product);
// }
// }      
//     localStorage.setItem("cart", JSON.stringify(cart))

// }

// export const addItemButtons = document.getElementsByClassName('shop-item-button');
// console.log(addItemButtons)


const addBtns = document.getElementsByClassName('shop-item-button');

for (let i = 0; i < addBtns.length; i++) {
        let button = addBtns[i];
// console.log(button)
//         button.addEventListener('click', (productId) => {
//             let product = products.find((product) => {
//                 console.log(product);
//                 return product.id === productId;
// })
//     if (cart.length == 0) {
//     console.log(cart);
//     cart.push(product);
//     console.log(product);
// } else {
//     let res = cart.find(element => element.id == productId);
//     if (res === undefined) {
//         cart.push(product);
// }
// }
// localStorage.setItem('cart', JSON.stringify(cart))
// })

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
console.log(cartItems);
const cartItemsId = cartItems.getElementsByClassName('shop-item-id');
console.log(cartItemsId)
const cartItemsTitle = cartItems.getElementsByClassName('shop-item-title');

//shop item button
// const itemBtn = document.getElementsByClassName('shop-item-button');
// console.log(itemBtn);

// for (let i = 0; i < itemBtn.length; i++) {
//     const item = itemBtn[i];
// // item.addEventListener('click', countNumbers)
// item.addEventListener('click', () => {
//     countNumbers(products[i]);
// })
// }


// function countNumbers(product) {
//     let productNumbers = localStorage.getItem('countNumbers');
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('countNumbers', productNumbers + 1);
//         document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
// } else {
//     localStorage.setItem('countNumbers', 1);
//     document.getElementsByClassName('countItem')[0].textContent = 1;
// }
// }

// for (let i = 0; i < itemBtn.length; i++) {
//     itemBtn[i].addEventListener('click', () => {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
// } else {
//     localStorage.setItem('cartNumbers', 1);
//     const time = document.getElementsByClassName('countItem')[0].textContent = 1;
//     console.log(time);
// }
// })
// }
// document.getElementsByClassName('countItem').innerHTML = 1;


//     for (let i = 0; i < cartItemsId.length; i++) {
//         if (cartItemsId[i].innerText === prodId) {
//             alert('This item is already in your cart');
//             console.log(prodId);
//             return
// }
// }
//     for (let i = 0; i < cartItemsTitle.length; i++) {
//         // let titles = cartItemsTitle[i];
//     if (cartItemsTitle[i].innerText === title) {
//         alert('Item is already in your cart')
//         return
// }
// }
    // const image = shopItem.getElementsByClassName('shop-item-image')[0].src;
    const image = shopItem.querySelectorAll('shop-item-image').src;
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
// console.log(title, image, price);
// addItemToCart(title, image, price)
// product.name = title;
// console.log(product.name)

let product = products.find((product) => {
    product.name = title;
    product.image = image;
    product.price = price
    product.id = prodId;
    // product.id = id;
// const product1 = [{id: product.id, image: product.image, name: product.name, price: product.price, quantity: product.quantity}]
    // console.log(product.id)

// for (let i = 0; i < cartItemsTitle.length; i++) {
//         if (cartItemsTitle[i].innerText == title) {
//             alert('This item is already in your cart');
//             // console.log(product.id);
//             return
// }
// }



// let items = localStorage.getItem('cart') || '[]';
// items = JSON.parse(items);
// items.push({name: product.name, price: product.price});
// localStorage.setItem('cart', JSON.stringify(items))
// products.forEach((product, i) => {
//     console.log(product, i)
// if (i === product.id - 1) {
//     console.log(product.id)
// }
// })
//     let product = products.forEach((product) => {
//             product.name = title;
//     // product.image = image;
//     // product.price = price
//         if (product.name === title) {
//             console.log(product);
//             return product;
//             // console.log(title)
// }
// })

        // return product.id === productId;
            // if (product.name === title) {
        //    return product
            // }
    if (product.id === prodId) {
        return product;
}
// let items = localStorage.getItem('products') || '[]';
// items = JSON.parse(items)
// items.push({name: product.name})
// localStorage.setItem('products', JSON.stringify(items))
// const p = localStorage.getItem('product');
// console.log(p);
// // localStorage.setItem('product', JSON.stringify(JSON.parse(p).concat(this.product)));

// countNumbers(product)

})

for (let i = 0; i < cartItemsTitle.length; i++) {
const int = parseInt(cartItemsId[i].innerText);
console.log(int)
        // if (cartItemsId[i].innerText == product.id) {
        if (int == product.id) {
        // if (cartItemsTitle[i].innerText == title) {
        // if (product.name) {
            // alert('This item is already in your cart');
    //         console.log(title);
    // console.log(cartItemsId[i].innerText)
for (let i = 0; i < cart.length; i++) {
    // console.log('hello');
console.log(cart[i].id);
    if (cart[i].id === int) {
    // console.log('Hello man')
    alert('This item is already in your cart')
    return
}
}
            // console.log(parseInt(cartItemsId[i].innerText))
            // return
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
    // alert('This item is already in your cart')
    // return
}

// localStorage.setItem('product', JSON.stringify(JSON.parse(p).concat(this.product)));

// console.log(product)
// for (let p of products) {
//     console.log(p);
// }
// for (let i = 0; i < product.length; i++) {
//     let prd = product[i];
//     console.log(prd)
// }
// console.log(prd)
// const currentProduct = localStorage.getItem('products');
// console.log(currentProduct);
// localStorage.setItem('products', JSON.stringify(JSON.parse(currentProduct).concat(product)))
// const currentCart = localStorage.getItem('cart');
// console.log(currentCart)
// localStorage.setItem('cart', JSON.stringify(JSON.parse(currentCart).concat(cart)))
// const item_arr = [];
// item_arr.push(product);
// console.log(item_arr);

// const newArr = [...item_arr];
// const item_array = [];
// item_array.push(product);
// console.log(item_array);
// product += product;
// addItemToCart(product);
if (cart.length >= 0) {
    // cart.push(product.name, product.image, product.price)


    console.log(cart)
//note push product as an array of objects
    cart.push({id: product.id, image: product.image, name: product.name, price: product.price, quantity: product.quantity});
    // cart.push(product);
    console.log(product)
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
console.log(shopcartImage);

if (cart.length >= 0) {
    // shopcartImage.style.display = 'none';
    // shopcartImage.style.border = '2px solid black';
    // shopcartImage.style.borderRadius = '5%';
    // shopcartImage.style.width = '50%';
const wrapperDiv = document.getElementsByClassName('wrapper')[0];
    console.log(wrapperDiv)
    const shopcartDiv = document.createElement('div');
    shopcartDiv.classList.add('notification');
    // wrapperDiv.innerHTML = shopcartDiv;

}

// addItem(2);


// const itemBtn = document.getElementsByClassName('shop-item-button');
// console.log(itemBtn);
// for (let i = 0; i < itemBtn.length; i++) {
//     itemBtn[i].addEventListener('click', () => {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
// } else {
//     localStorage.setItem('cartNumbers', 1);
//     const time = document.getElementsByClassName('countItem')[0].textContent = 1;
//     console.log(time);
// }
//     });
// }

// for (let i = 0; i < itemBtn.length; i++) {
//     const item = itemBtn[i];
// item.addEventListener('click', countNumbers)
// }


// function countNumbers() {
//     let productNumbers = localStorage.getItem('cartNumbers');
//     productNumbers = parseInt(productNumbers);
//     if (productNumbers) {
//         localStorage.setItem('cartNumbers', productNumbers + 1);
//         document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
// } else {
//     localStorage.setItem('cartItems', 1);
//     document.getElementsByClassName('countItem')[0].textContent = 1;
// }
// }

// const itemBtn = document.getElementsByClassName('shop-item-button');
// console.log(itemBtn);

// for (let i = 0; i < itemBtn.length; i++) {
//     const item = itemBtn[i];
// // item.addEventListener('click', countNumbers)
// item.addEventListener('click', () => {
//     countNumbers(products[i]);
// })
// }


// function countNumbers(product) {
//     let productNumbers = localStorage.getItem('countNumbers');
//     productNumbers = parseInt(productNumbers);
//     // const cartItems = document.getElementsByClassName('shop-items')[0];
//     // const cartItemsId = cartItems.getElementsByClassName('shop-item-id');
//     // for (let i = 0; i < cartItemsId.length; i++) {
//     // const int = parseInt(cartItemsId[i].innerText);
//     // if (int == product.id) {
//     // for (let i = 0; i < cart.length; i++) {
//     if (productNumbers) {
//         localStorage.setItem('countNumbers', productNumbers + 1);
//         document.getElementsByClassName('countItem')[0].textContent = productNumbers + 1;
// } else {
//     localStorage.setItem('countNumbers', 1);
//     document.getElementsByClassName('countItem')[0].textContent = 1;
//     // alert('This item is already in your cart')
//     // return
// }
// }
// }
//     }
// }

// for (let i = 0; i < cartItemsTitle.length; i++) {
// const int = parseInt(cartItemsId[i].innerText);
// console.log(int)
//         // if (cartItemsId[i].innerText == product.id) {
//         if (int == product.id) {
//         // if (cartItemsTitle[i].innerText == title) {
//         // if (product.name) {
//             // alert('This item is already in your cart');
//     //         console.log(title);
//     // console.log(cartItemsId[i].innerText)
// for (let i = 0; i < cart.length; i++) {
//     // console.log('hello');
// console.log(cart[i].id);

//     if (cart[i].id === int) {
//     // console.log('Hello man')
//     alert('This item is already in your cart')
//     return
// }
// }
//             // console.log(parseInt(cartItemsId[i].innerText))
//             // return
// }
// }
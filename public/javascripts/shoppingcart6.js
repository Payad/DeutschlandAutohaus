var products = JSON.parse(localStorage.getItem('products'));
console.log(products);
var cart = JSON.parse(localStorage.getItem('cart'));
console.log(cart);
// const currentUser = req.user;
// console.log(currentUser);

const cartItems = document.getElementsByClassName('cart-items')[0];
// console.log(cartItems);

function appendItems() {
    let cartItem = cart.map((result) => ({
        id: result.id,
        name: result.name,
        image: result.image,
        price: result.price,
        quantity: result.quantity
}))
console.log(cartItem);
appendCart(cartItem);
// //trial and error
// for (let i = 0; i < cartItem.length; i++) {
//     console.log(cartItem.id);
// }
}

appendItems();

function appendCart(cartItem) {
    let cartRowContents = cartItem.map((result) => 
    // `       <div class="cart-row">
    //         <div class="cart-item cart-column">
    //          <span class="shop-item-title"></span>
    //             <span class="cart-item-id">${result.id}</span>
    //             <p class="cart-item-name">${result.name}</p>
    //             <img  class="blackMug Mugs cart-item-image" src="${result.image}" alt="">
                
    //         </div>
    //         <span class="cart-item-quantity">Qty${result.quantity}</span>
    //         <span class="cart-item-price">${result.price}</span>
    //         <div class="cart-quantity cart-column">
    //             <input type="number" class="cart-quantity-input" value="1">
    //             <button class="btn btn-danger" type="button">REMOVE</button>
    //         </div>
    //         </div>`
// {/* <img  class="blackMug Mugs cart-item-image" src="" alt=""></img> */}
// {/* <span class="cart-item-quantity">Qty${result.quantity}</span> */}
// <img  class="blackMug Mugs cart-item-image" src="${result.image}" alt="">
//<span class="cart-item-quantity"></span>
//<span class="shop-item-title"></span>
    `       <div class="cart-row">
                <div class="cart-item cart-column">
                    
                        <span class="cart-item-id">${result.id}</span>
                        <img  class="cart-item-image" src="${result.image}" alt="">
                        <p class="cart-item-name">${result.name}</p>
                    
                </div>
                    <div class="item-price">
                    <span class="cart-item-price">${result.price}</span>
                    </div>
                     <div class="cart-quantity cart-column">
                    <input type="number" class="cart-quantity-input" value="1" min="0" max="5" step="1">
                
            
                    <button class="btn btn-danger" type="button">REMOVE</button>
                </div>
                
            </div>`
    ).join('');
cartItems.innerHTML = cartRowContents;
// console.log(cartRowContents);
}

const removeBtn = document.getElementsByClassName('btn-danger');
// console.log(removeBtn);

for(let i = 0; i < removeBtn.length; i++) {
    button = removeBtn[i];

button.addEventListener('click', removeItems)
}

function removeItems(event, productId) {
    buttonClicked = event.target;
    // console.log(buttonClicked);
    // buttonClicked.parentElement.parentElement.remove();
    // buttonClicked.parentElement.parentElement;
//  const cartItem = buttonClicked.getElementsByClassName('cart-row');

const cartItem = buttonClicked.parentElement.parentElement;
// const cartRow = document.getElementsByClassName('cart-row')[0];
console.log(cartItem);
const title = cartItem.getElementsByClassName('cart-item-name')[0];
const Id = JSON.parse(cartItem.getElementsByClassName('cart-item-id')[0].innerText);
console.log(title);
console.log(Id)
// for (let i = 0; i < cartRow.length; i++) {
//     // console.log(cartRow);
// productName = title;
// }
// for (let i = 0; i < title.length; i++) {
//     console.log(title)
// }

    console.log(buttonClicked)

    // if (productName === title) {
    // localStorage.removeItem('cartItem');

let product = products.find((product) => {
    product.name = title;
    product.id = Id;
    console.log(product);
    console.log(cart)
    // return product.id == productId
    return product
})
//  products.forEach((product, idx) => {
//     if (idx) {
//         // idx++;
// // idx += 1;
// console.log(product.id)
// console.log(idx)
// // for (let i of idx) {
// //     i += 1;
// // console.log(i);
// // }
// }
// // for (let c of cart) {
// //     if (c.id === 1) {
// //     c.id += 1;
// //     console.log(c);
// // }
// // }
// // console.log(p.name);    
// // let temp = cart.filter((item) => item.id != p.id);
// //     console.log(temp);
// // console.log(p.id);
// //     console.log(idx)
// product.id = productId
// if (product.id === productId) {
//     let temp = cart.filter((item) => item.id != productId)
//     console.log(temp);
// }
// })
// product.name = title;
if (product.id === Id) {
let temp = cart.filter((item) => item.id != product.id);
    console.log(temp);
localStorage.setItem('cart', JSON.stringify(temp))
// // console.log(title);
// // console.log(productId);
}
    // localStorage.setItem('cart', JSON.stringify(temp))
    // }
    // console.log()
    // console.log(cartItem.name)
//     const itemName = document.getElementsByClassName('cart-item-name')[0];
// console.log(itemName);
    // const title = buttonClicked.parentELement;
    // console.log(title);

    //select product with id might be easier
    // let temp = cart.filter((cart) => cart.id != productId );
    // console.log(temp);
    // localStorage.setItem('cart', JSON.stringify(temp))
updateCartTotal();
// addId(product)
}
// const cartDiv = removeBtn.parentElement;
// console.log(cartDiv);
// appendCart();
// removeItems(2);
// function removeItemFromCart(productId) {
//     let temp = cart.filter(item => item.id != productId)
//     console.log(temp);
//     localStorage.setItem("cart", JSON.stringify(temp))
// }

// removeItemFromCart('Black Mug');

// if (productName === products.name) {

// }

//adding id to cart
// const button = 
// function addId(event, product) {
// // buttonClicked = event.target
// console.log(product);
// // const cartItem = buttonClicked.parentElement;
// // const Id = JSON.parse(cartItem.getElementsByClassName('cart-item-id')[0].innerText);
// // Id.classList.add(product.id);
// // console.log(product.id)
// }
// addId();

//Total update function
function updateCartTotal() {
    // Id.classList.add(id)
    const cartItems1 = document.getElementsByClassName('cart-items')[0];
    console.log(cartItems1)
    const cartRows = cartItems1.getElementsByClassName('cart-row');
    console.log(cartRows);
total = 0;
for (let i = 0; i < cartRows.length; i++) {
    const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        console.log(priceElement);
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(quantityElement);
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value
        total = total + (price * quantity);
}
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
    // const cartTotal = document.getElementsByClassName('cart-total-price')[0].replace('$', '');
}

//input value change
const quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInputs; i++) {
    const input = quantityInputs[i];
    input.addEventListener('change', quantityChange)
}

function quantityChange() {
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
}
updateCartTotal();
}

updateCartTotal();

// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// for (let i = 0; i < quantityInputs; i++) {
//     const input = quantityInputs[i]
//     input.addEventListener('change', quantityChange)
// }

// function quantityChange() {
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
// }
// updateCartTotal();
// }

/* empty cart */
const emptyDiv = document.getElementsByClassName('shopmain')[0];
console.log(emptyDiv);
const spanItem = document.getElementsByClassName('item')[0];
const spanPrice = document.getElementsByClassName('price')[0];
const spanQuantity = document.getElementsByClassName('quantity')[0];
const cartTotal = document.getElementsByClassName('cart-total')[0];
const purchaseBtn = document.getElementsByClassName('btn-purchase')[0];

if (cart.length >= 1) {
    emptyDiv.style.display = 'none';
    spanItem.style.display = 'inline-block';
    spanPrice.style.display = 'inline-block';
    spanQuantity.style.display = 'inline-block';
    // cartTotal.style.display = 'flex';
    purchaseBtn.style.display = 'block';
} else {
    emptyDiv.style.display = 'block';
    spanItem.style.display = 'none';
    spanPrice.style.display = 'none';
    spanQuantity.style.display = 'none';
    cartTotal.style.display = 'none';
    purchaseBtn.style.display = 'none'
}

//remove all items btn 
const removeAll = document.getElementsByClassName('rmvAll')[0];

removeAll.addEventListener('click', () => {
if (cart.length >= 1) {
    localStorage.clear();
}    
console.log(cart);
})


var stripeHandler = StripeCheckout.configure({
    key: stripePublicKey,
    locale: 'en',
    token: function(token) {
        // console.log(token)
        var products = [];
        var cartItemContainer = document.getElementsByClassName('cart-items')[0];
        var cartRows = cartItemContainer.getElementsByClassName('cart-row');
        for (let i = 0; i < cartRows.length; i++) {
            var cartRow = cartRows[i];
            var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
            var quantity = quantityElement.value;
            var priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
            var price = priceElement.innerText.replace('$', '');
            // var id = cartRow.classList.add('id');
            var idElement = cartRow.getElementsByClassName('cart-item-id')[0];
            var id = idElement.innerText;
            products.push({
                    id: id,
                    price: price,
                    quantity: quantity
})
}
        fetch('/purchase', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
},
        body: JSON.stringify({
            stripeTokenId: token.id,
            products: products
})
}).then(function(res) {
        return res.json()
}).then(function(data) {
    alert(data.message)
//     var cartItems = document.getElementsByClassName('cart-items')[0];
// while(cartItems.hasChildNodes()) {
//     cartItems.removeChild(cartItems.firstChild)
// }
// localStorage.clear();
updateCartTotal();
}).catch(function(error) {
    console.error(error)
})
}
})

// const purchaseBtn = document.getElementsByClassName()
purchaseBtn.addEventListener('click', purchaseClicked)

//purchase clicked btn
function purchaseClicked() {
// alert('Thank you for your purchase')
// var cartItems = document.getElementsByClassName('cart-items')[0];
// while(cartItems.hasChildNodes()) {
//     cartItems.removeChild(cartItems.firstChild)
// }
// localStorage.clear();
// updateCartTotal();
var priceElement = document.getElementsByClassName('cart-total-price')[0];
var price = parseFloat(priceElement.innerText.replace('$', '')) * 100;
stripeHandler.open({
    amount: price
})
}


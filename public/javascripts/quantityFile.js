
// if (document.readyState == loading) {
//         document.addEventListener('DOMOntentLoaded', ready)
// } else {
//     ready();
// }

// window.onload('DOMContentLoaded')

// function ready() {


// const inputVal = document.querySelector('.cart-quantity-input');
// console.log(inputVal.value);

// inputVal.value += 1;
// const price = document.querySelector('.price-text');
// console.log(price);

// const priceSpan = document.querySelector('.price-span');
// console.log(priceSpan);
// const quantitySpan = document.querySelector('.quantity-span');
// console.log(quantitySpan);

// const buttonDec = document.querySelector('.decrease');
// console.log(buttonDec);
// const btnDec = document.getElementById('decrement');
// console.log(btnDec);



// function updateCartTotal() {
//     const cartItems1 = document.getElementsByClassName('cart-items')[0];
//     console.log(cartItems1)
// }

//Total update function
function updateCartTotal() {
    // Id.classList.add(id)
    const cartItems1 = document.getElementsByClassName('cart-items')[0];
    console.log(cartItems1)
    const cartRows = cartItems1.getElementsByClassName('cart-row');
    console.log(cartRows);
// total = 0;
// for (let i = 0; i < cartRows.length; i++) {
//     const cartRow = cartRows[i];
//         const priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
//         console.log(priceElement);
//         const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//         console.log(quantityElement);
//         const price = parseFloat(priceElement.innerText.replace('$', ''));
//         const quantity = quantityElement.value
//         total = total + (price * quantity);
// }
//     total = Math.round(total * 100) / 100;
//     // document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
//     // const cartTotal = document.getElementsByClassName('cart-total-price')[0].replace('$', '');
//     document.getElementsByClassName('price-span')[0].innerText = '$' + total;
}

// input value change
// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// for (let i = 0; i < quantityInputs; i++) {
//     const input = quantityInputs[i];
//     input.addEventListener('change', quantityChange)
// }

// function quantityChange() {
//     if (isNaN(input.value) || input.value <= 0) {
//         input.value = 1;
// }
// updateCartTotal();
// }
// updateCartTotal();


const decBtnArr = document.getElementsByClassName('decrease');
const addBtnArr = document.getElementsByClassName('increase');
const input = document.querySelectorAll('.cart-quantity-input');

const allDecBtn = document.querySelectorAll('.decrease');
// if (input) {
//     input.forEach((i) => {
//         if (i.value === 1) {
//             // decBtnArr.setAttribute('disabled', true);
//             // decBtnArr.classList.add('disabled');
            
//         }
//     })
// }
// allDecBtn.forEach((btn, i) => {
//     const inputIndex = input[i];
//     console.log(parseInt(inputIndex.value))
//     console.log(btn);

//     const newValue = parseInt(inputIndex.value);
//     if (newValue.value === 1) {
//         btn.setAttribute('disabled', true);
//         btn.classList.add('disabled');
//     }
//     // if (parseInt(inputIndex.value === 1)) {
//     //     btn.setAttribute('disabled', true);
//     //     btn.classList.add('disabled');
//     // }
// })

// console.log('this is the value of the input', input.value);
// if (input.value === 1) {
//     decBtnArr.setAttribute('disbaled', true);
//     decBtnArr.classList.add('disabled');
// }
console.log(decBtnArr, addBtnArr)
// function updateCartPrice () {
// total = 0
for (let deductBtn of decBtnArr) {
// total = 0;
    deductBtn.onclick = function() {
//     let currentInputBox = deductBtn.nextElementSibling;
//     console.log(currentInputBox.value);
//     let initInputBox = currentInputBox.value;
//     currentInputBox.value = parseInt(currentInputBox.value) - 1;
//     initInputBox -= currentInputBox.value;
//     console.log(initInputBox);
//     console.log(currentInputBox);
//     const priceElement = currentInputBox.previousElementSibling;
//     console.log(priceElement);
//     const price = parseFloat(priceElement.innerText.replace('$', ''));
//     console.log(price);
//     // const quantity = parseInt(currentInputBox.value);
//     const quantity = parseInt(initInputBox);
//     console.log(quantity);

//     const total = price * quantity;
//     console.log(total);
// const totalElement = document.querySelector('.totalPrice');
// console.log(totalElement);
// const totalPrice = parseFloat(totalElement.innerText.replace('$', ''));
// console.log(totalPrice);
// let stripePrice = totalPrice - total;
// // let p = stripePrice
// let Price = Math.round(stripePrice * 100) / 100;
// console.log(Price);
// document.querySelector('.totalPrice').innerText = '$' + Price;

// let quantityElement = document.querySelector('.totalQuantity').innerText;
// console.log(quantityElement);
// quantityElement = parseInt(quantityElement - 1);
// document.querySelector('.totalQuantity').innerText = quantityElement;

//NEW AS OF 5/16/2026
        // const cartRow = document.querySelector('.cart-row');
        const cartRow = deductBtn.closest('.cart-row');
        const inputBox = cartRow.querySelector('.cart-quantity-input');

        inputBox.value = parseInt(inputBox.value) - 1;

        const priceElement = cartRow.querySelector('.cart-item-price');

        const price = parseFloat(priceElement.dataset.price) / 100;

        const totalElement = document.querySelector('.totalPrice');

        let totalPrice = parseFloat(totalElement.innerText.replace("$", ''));
        // let totalPrice = parseFloat(totalElement);

        totalPrice -= price;
        console.log(totalPrice);
        console.log(price);

        totalElement.innerText = "$" + totalPrice.toFixed(2);

        let quantityElement = document.querySelector('.totalQuantity').innerText

        quantityElement = parseInt(quantityElement) - 1;

        document.querySelector('.totalQuantity').innerText = quantityElement;
        document.querySelector('.subtotal-amount').innerText = totalPrice.toFixed(2);
        document.querySelector('.total-amount').innerText = "$" + totalPrice.toFixed(2);



// quantityElement = quantityElement.innerText - 1;

// console.log(stripePrice);
// total = Math.round(total * 100) / 100;
// document.querySelector('.totalPrice').innerText = '$' + stripePrice
// l = Math.round(stripePrice * 100) / 100;
    // document.querySelector('.price-span').innerText = '$' + total;
// total = total + (price * quantity);
// console.log(total);

// total = Math.round(total * 100) / 100;
// document.getElementsByClassName('price-span')[0].innerText = '$' + total;


    // updateCartTotal();
//  const cartItems1 = document.getElementsByClassName('cart-items')[0];
//     console.log(cartItems1)
//     const cartRows = cartItems1.getElementsByClassName('cart-row');
//     console.log(cartRows);
// for (let i = 0; i < cartRows.length; i++) {
//     const cartRow = cartRows[i];
//         const priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
//         console.log(priceElement);
//         const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//         console.log(quantityElement);
//         const price = parseFloat(priceElement.innerText.replace('$', ''));
//         const quantity = quantityElement.value
//         total = total + (price * quantity);
// }
    // const quantityElement = document.querySelector('.quantity-span');
    // const quantity = quantityElement.innerText;
    // console.log(quantity);
    // const priceElement = document.getElementsByClassName('price-span')[0];
    // console.log(priceElement);
    // const price = parseFloat(priceElement.innerText.replace('$', ''));
    // total = total + (price * quantity)

//     const itemPrice = document.getElementsByClassName('cart-item-price')[0];
// console.log(itemPrice);
//     const itemQuantity = document.getElementsByClassName('cart-quantity-input')[0];
//     console.log(itemQuantity);

    // total = Math.round(total * 100) / 100;

    // console.log(currentInputBox)
// const cartItems1 = document.getElementsByClassName('cart-items')[0];
//     console.log(cartItems1)
}
// total = Math.round(total * 100) / 100;
// document.getElementsByClassName('price-span')[0].innerText = '$' + total;
// stripePrice = Math.round(total * 100) / 100;
// document.querySelector('.totalPrice').innerText = '$' + stripePrice;
}
// total = Math.round(total * 100) / 100;
// document.getElementsByClassName('price-span')[0].innerText = '$' + total;
// stripePrice = Math.round(total * 100) / 100;
// document.querySelector('.totalPrice').innerText = '$' + stripePrice;
// }

for (let addBtn of addBtnArr) {
    // let closest = addBtn.closest('.increase');
    addBtn.onclick = function() {
    // let currentInputBox = addBtn.previousElementSibling;
    const cartRow = addBtn.closest('.cart-row');

    const inputBox = cartRow.querySelector('.cart-quantity-input');
    inputBox.value = parseInt(inputBox.value) + 1;
    // let initInputBox = currentInputBox.value;
    // // console.log(initInputBox);
    // currentInputBox.value = parseInt(currentInputBox.value) + 1;
    // initInputBox -= currentInputBox.value;
// initInputBox = initInputBox - currentInputBox.value;
// initInputBox -= currentInputBox.value;
//  let c = currentInputBox.value - initInputBox;
// console.log(c);
// const quantity = parseInt(currentInputBox.value)

//     console.log(initInputBox);
// console.log(currentInputBox.value);

    // const priceElement = currentInputBox.previousElementSibling;
    // const priceElement = currentInputBox;
    // console.log(priceElement);
    // const price = parseFloat(priceElement.innerText.replace('$', ''));
    // console.log(price);
    const priceElement = cartRow.querySelector('.cart-item-price');
    // const price = parseFloat(addBtn.dataset.price);
    const price = parseFloat(priceElement.dataset.price) / 100;
    // const priceElement = document.querySelector('.totalPrice');
    //     let price = priceElement.innerText;
    // const quantity = parseInt(initInputBox);
    // console.log(quantity);
    // const quantity = parseInt(c);
    // const quantity = 1;
    // let quantity = price * 1;

//     const total = parseInt(price * quantity);
// console.log(total);

    const totalElement = document.querySelector('.totalPrice');

    // totalElement.innerText

    let totalPrice = parseFloat(totalElement.innerText.replace('$', ''));
    // console.log(totalPrice);
    // console.log(total);

    totalPrice += price;

    //  let stripePrice = totalPrice + total;
    // console.log(stripePrice);
    // let Price = Math.round(stripePrice * 100) / 100;

    // document.querySelector('.totalPrice').innerText = '$' + Price;
    totalElement.innerText = '$' + totalPrice.toFixed(2);
    // updateCartTotal();

    let quantityElement = document.querySelector('.totalQuantity').innerText;
console.log(quantityElement);
    quantityElement = parseInt(quantityElement) + 1;
    // // quantityElement += 1;
    console.log(quantityElement)
    document.querySelector('.totalQuantity').innerText = quantityElement;
    document.querySelector('.subtotal-amount').innerText = totalPrice.toFixed(2);
    document.querySelector('.total-amount').innerText = "$" + totalPrice.toFixed(2);


    

}
}

function inputCalc(event, value) {
const inputValue = document.querySelectorAll('#quantity');
// const inputValue = document.getElementById('decrement');
// const inputValue = document.querySelector('#quantity');
// const decreaseBtn = document.querySelector('.decrease');
// decreaseBtn.addEventListener('click', function() {
// const inputValue = document.querySelector('#quantity');
// inputValue.value += parseInt(value);

// //     let l = event.currentTarget
// //     let u = parseInt(l.nextElementSibling.value);
// // u += value;
// //     console.log(u);    
// // inputValue.value += value;
// // console.log(inputValue);
// })
// const input = inputValue.previousElementSibling;
// console.log(input)
// inputValue.addEventLIstener('click', function() {

// })
// let inputNum;
// let value;
inputValue.forEach((input) => {
    const l = event.currentTarget;
    if (l.nextElementSibling == input) {
        inputNum = parseInt(l.nextElementSibling.value);
        console.log(inputNum);
//  input.value = inputNum + value;
let inputResult = inputNum + value;
console.log(value);
// input.value = inputResult;
input += value;
console.log(input)
}
console.log(input.value);
// input.value = inputResult;
const number = inputNum + value;
console.log(number); // 4
console.log(input.value) // 1
// let newNum = parseInt(input.value);
// console.log(newNum); // 1
// newNum + inputNum;
input += number;
});
// // inputValue.value = 27;
// console.log(value); // -1
// const l = event.currentTarget;
//  if (l.nextElementSibling == input) {
//         let inputNum = parseInt(l.nextElementSibling.value);
//         console.log(inputNum);
// //  input.value = inputNum + value;
// let inputResult = inputNum + value;
// console.log(value);
// input.value = inputResult;
// };
// input = inputResult;

// inputValue.value = input.value;
// inputValue.value = input;
// inputValue.value += value;
//     for (let i = 0; i < inputValue.length; i++) {
//                 const inputs = inputValue[i];
//                 const l = event.currentTarget;
//                 if (l.nextElementSibling == inputs) {
//                 let inputNum = parseInt(l.nextElementSibling.value);
//                 console.log(inputNum);
//                inputs.value = inputNum += value;
//                 // const result = inputNum;
//                 // inputNum += value;
//                 // inputValue.value = 27;
//                 // let decValue = value;
// //                 if (value == 0) {
// //                     value -= 1;
// //                     inputs.value += value; // 0
// //                     inputs.value = 27;
// // }
//     // console.log(decValue);
//     // inputs.value += value;
//         console.log(inputNum + value);
//                 }
// // inputs.value = inputNum + value;
// }
// console.log('hello');
// console.log(value);
// inputs.value = inputNum + value;
}
function decrease2(value) {

// const inputValue = document.querySelectorAll('#quantity');
        const buttons = document.querySelectorAll('.decrease');

buttons.forEach((btn) => {
    btn.addEventListener('click', inputCalc(event, value));
})

}



function decrease(value) {

// const inputVal = document.querySelector('.cart-quantity-input');
// console.log(inputVal.value);
console.log(value); // - 1
// inputVal.value += 1;
        const inputValue = document.querySelectorAll('#quantity');
        const buttons = document.querySelectorAll('.decrease');
        // const input = document.querySelector('#quantity');
        // console.log(input);
        // console.log(inputValue);
        // inputValue.forEach((i) => {
        // for (let i = 0; i < buttons.length; i++) {
        //     const btn = buttons[i];
            // console.log(btn);
const decValue = parseInt(value);
    console.log(decValue);

            buttons.forEach((btn) => {
            // console.log(value);
            let decValue = parseInt(value);
            console.log(decValue);
            btn.addEventListener('click', function(e, value) {
                // console.log('Hello', btn);
                console.log(value); // undefined
                const l = e.currentTarget;
                // console.log(l);
                let decValue = parseInt(value);
                console.log(decValue)

        for (let i = 0; i < inputValue.length; i++) {
                const inputs = inputValue[i];
                // console.log(inputs);
                if (l.nextElementSibling == inputs) {
                let inputNum = parseInt(l.nextElementSibling.value);
                // console.log(inputNum);
                // inputNum += value;
                // inputValue.value = 27;
                let decValue = value;
//                 if (value == 0) {
//                     value -= 1;
//                     inputs.value += value; // 0
//                     inputs.value = 27;
// }
    console.log(decValue);
    // console.log(value);
                //  inputs.value += decValue;
                // const decValue = parseInt(value--);
                // console.log(decValue);
                // console.log(inputNum += decValue);
                // // let input = inputNum + value;
                // // console.log(input);
                // // inputNum.value = value;
                // console.log(value);
                // console.log('HELLO');
                // inputNum.value -= decValue;
                // const decValue = parseInt(value);
                // const decResult = inputValue + value;
                // console.log(decResult);
    }
                }
            // console.log(inputs);
const inputNum = parseInt(l.nextElementSibling.value);
// if(inputValue == inputNum) {
//      console.log(inputNum);
//             const decValue = parseInt(value);
//             const decResult = inputNum + decValue;
// console.log(decValue);
// console.log(decResult);
// } //if l matches inputNum;
//             // const inputNum = parseInt(l.nextElementSibling.value);
//             console.log(l.nextElementSibling.value);
//             // const newInput = parseInt(inputNum.value);
//             // console.log(newInput);
//             console.log(inputNum + value);
//             // const decValue = parseInt(value);
//             // const decResult = inputNum + decValue;
//             const decResult = inputNum + value;
// console.log(decValue); // -1
// console.log(decResult); // minuses 1
        
            // inputNum.value = decResult;
            // let dec = inputNum - value;
            // inputValue.value = decResult;
            // let decValue = parseInt(value);
            // const decResult = inputNum - decValue;
            // inputValue.value = decResult;
            // console.log(decValue);
            // console.log(inputNum);
            // let n = Number(inputNum.value);
            // n += 1;
            // inputNum.value -= 1;
    // inputNum.value -= 1;
    // value = inputNum -= 1;
    // inputValue.innerText = inputNum;

//             if (inputNum.value <= 0 || isNaN(inputValue.value)) {
// }               inputNum.value = 1;
//             if (l && inputs.classList.contains('cart-quantity-input')) {
//                 console.log("Hey");
// }
//             if (l && inputs) {
//                 console.log('Hello World');
// }
                // }
            })

});
        // }
            for (let i = 0; i < inputValue.length; i++) {
            const inputs = inputValue[i];
//             inputs.addEventListener('click', function(e) {
//                 // const btn = e.currentTarget;
//                 // console.log(btn);
//                 console.log('hello');
//                 console.log(e);
//             // console.log(i)
// })
            // console.log(inputs);
            // console.log(i.value)
            // const btn = inputValue[i]; //or currentTarget
            // console.log(btn);
            
        //         const input = inputValue[i];
        //         const inputResponse = parseInt(input.value) + value;
        // console.log(inputResponse);
        // inputValue.value = inputResponse;
            }
        //     const input = parseInt(inputValue.value) + value;
        // console.log(input);
        // inputValue.value = input;
// })
        // const sumValue = parseInt(inputValue.value) + value;
        // console.log(sumValue);
        // inputValue.value = sumValue;

//     if (inputValue.value <= 0) {
//         inputValue.value = 0;
//         alert("Do you want to remove item from cart?")
// } 
}

// decrease();

//ready function end
// }

// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// let increaseWith = 1;
// function increase2() {
// const quantityInputs = document.getElementsByClassName('cart-quantity-input');
// let increaseWith = 1;
// const buttons = document.querySelectorAll('.increase');
//             buttons.forEach((btn) => {
//                 btn.addEventListener('click', function(e) {
//                     const l = e.currentTarget
//                     console.log(l);
// let inputNum = parseInt(l.previousElementSibling.value);
// const newInput = inputNum + increaseWith;
// // console.log(inputNum);
//                 quantityInputs.value = newInput;
//                 });
//             });
// // value = parseInt(quantityInputs.value);
// // value += increaseWith;
// // quantityInputs.value = value;

// }

function increase2(value) {
    const inputValue = document.getElementById('quantity');
    // inputValue.value += parseInt(value);
    incValue = parseInt(inputValue.value);
    incresult = parseInt(value);
    inc = incresult + incValue;
    inputValue.value = inc
    // // incresult = parseInt(value += 1)
    // // // value = parseInt(inputValue.value) + value;
    // // // value = parseInt(inputValue.value);
    // // // value += value;
    // // inputValue.value = incresult;
    // // console.log(incresult);
    // // console.log(inputValue.value);
    // // console.log(value);
    // // console.log(incValue);
    console.log(inc);
}

function increase(value) {

            // const inputValue = document.querySelectorAll('#quantity');
            const inputValue = document.getElementById('quantity');
            // const quantityInputs = document.getElementsByClassName('cart-quantity-input');
//             for (let i = 0; i < quantityInputs.length; i++) {
//                 const input = quantityInputs[i];
//                 console.log(input);
//                 input.addEventListener('change', quantityChange);
// }

//             function quantityChange() {
// //             if (isNaN(input.value) || input.value <= 0)
//                 // input.value = value + 1;
//                 console.log(input.value + value);
// }
            // let increaseWith = 1;
            const buttons = document.querySelectorAll('.increase');
            buttons.forEach((btn) => {
// btn.addEventListener('click', add);
                btn.addEventListener('click', function(e) {
                    const l = e.currentTarget
                    console.log(l);

                let inputNum = parseInt(l.previousElementSibling.value);
                console.log(inputNum + value);
                // inputNum += increaseWith;
                const newInput = inputNum + value;
                // const newInput = parseInt(inputNum + increaseWith);
                inputValue.value = newInput;

                // const increase = inputNum.value += 1;
                // let quantitychange = parseInt(increase) + value;
                // console.log(quantitychange);
                // quantitychange += 1;

                // console.log(parseInt(inputNum.value += value));
                    // inputNum.value += value;
                // const change = parseInt(inputNum.value) + value;
                // let change = parseInt(inputNum.value) + value++;
                // change++;
                // console.log(change);
//             if (inputNum.value <= 0) {
// }               inputNum.value = 1;
});
 
// function add(e) {
// const l = e.currentTarget
//                     console.log(l);

//                 const inputNum = l.previousElementSibling.previousElementSibling;
//     let change = parseInt(inputNum.value) + value++;
//                 // change++;
//                 console.log(change);
// }
 });

}

//REMOVE ALL ITEMS FROM SHOPPING CART

// const removeAll = document.getElementsByClassName('rmvAll')[0];
// console.log(removeAll);
const removeAll = document.querySelector('.rmvAll');
console.log(removeAll);

// removeAll.addEventListener('click', removeClicked);

// function removeClicked() {


// }

//depecrated Stripe checkout

// var stripeHandler = StripeCheckout.configure({
//     key: stripePublicKey,
//     locale: 'en',
//     token: function(token) {
//         let products = [];
//         const cartItemContainer = document.getElementsByClassName('cart-items')[0];
//         const cartRows = cartItemContainer.getElementsByClassName('cart-row');
//         for (let i = 0; i < cartRows.length; i++) {
//             let cartRow = cartRows[i]
//         const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
//         const quantity = quantityElement.value;
//         const priceElement = document.getElementsByClassName('cart-item-price')[0];
//         const price = priceElement.innerText.replace('$', '');
//         const idElement = cartRow.getElementsByClassName('cart-item-id')[0];
//         const id = idElement.innerText;
//         products.push({
//             id: id,
//             price: price,
//             quantity: quantity,

// })
// }

//     fetch('/purchase', {
//         method: 'POST',
//         headers: {
//             'Content type': 'application/json',
//             'Accept': 'aplication/json'
// },
//         body: JSON.stringify({
//             stripeTokenId: token.id,
//             products: products
// })
// }).then(function(res) {
//     return res.json;
// }).then(function(data) {
//     alert(data.message)
// }).catch(function(error) {
//     console.log(error);
// })

// }
// })

// const purchaseBtn = document.getElementsByClassName('btn-purchase')
// purchaseBtn.addEventListener('click', purchaseClicked)

// //purchase clicked btn
// function purchaseClicked() {
// // alert('Thank you for your purchase')
// // var cartItems = document.getElementsByClassName('cart-items')[0];
// // while(cartItems.hasChildNodes()) {
// //     cartItems.removeChild(cartItems.firstChild)
// // }
// // localStorage.clear();
// // updateCartTotal();
// console.log('hello');
// var priceElement = document.getElementsByClassName('cart-total-price')[0];
// var price = parseFloat(priceElement.innerText.replace('$', '')) * 100;
// stripeHandler.open({
//     amount: price
// })
// }

// var stripe = Stripe('pk_test_TYooMQauvdEDq54NiTphI7jx');
// const User = require('User');
// const User = require('./models/users');
var checkoutButton = document.querySelector('#checkout-button');
console.log(checkoutButton);
// const owner = req.user.id;
// const user = User.findById(owner);
// const cart = user.findOne({user: user})
// const products = cart.products;
if(checkoutButton) {
checkoutButton.addEventListener('click', function () {
//   stripe.redirectToCheckout({
//     lineItems: [{
//       // Define the product and price in the Dashboard first, and use the price
//       // ID in your client-side code. You may also pass a SKU id into the `price`
//       // field
//     //   price: '{PRICE_ID}',
//         price: 'price_1MotwRLkdIwHu7ixYcPLm5uZ',
//         quantity: 1
//     }],
//     // mode: 'subscription',
//     mode: 'payment',
//     successUrl: 'https://www.example.com/success',
//     cancelUrl: 'https://www.example.com/cancel'
//   });
// console.log(cart.products);
// let products = [id, quantity];
// const productArr = products.forEach((product) => ({
//     id: product.id,
//     quantity: product.quantity,
// }));
// console.log(productArr);
fetch('/create-checkout-session', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
},
    body: JSON.stringify({
//         items: [
//             {id: 1, quantity: 3},
//             {id: 2, quantity: 1}
// ]
// const owner =  req.user.id,
// const productArr = products
// for (let i = 0; i < products.length; i++) {

// }
// products.forEach((product) => {

// });
        products: [
            // {id: product.id, quantity: product.quantity},
            {id: 1, quantity: 2},
{id: 2, quantity: 1},

            // items: req.session.prodId
            // items:  req.session.cart
// {name: productName, unit_amount: price}
// {id: 3, quantity: 2},
// {id: 4, quantity: 2},
// {id: 5, quantity: 2},
// {id: 6, quantity: 2},
// {id: 4, quantity: 2},
// {id: 5, quantity: 2},
// {id: 6, quantity: 2},
            // {id: "", quantity: ""}
            // {id: 1},
            // {id: 2}
                // {id: 1, price: 2000, name: 'T-shirt'},
                // {id: 2, price: 3000, name: 'Sweat-shirt'}

     ]       // products: req.session.cart,
})
}).then(res => {
    if (res.ok) return res.json()
    return res.json().then(json => Promise.reject(json))
}).then(({url}) => {
    window.location = url
    // console.log(url);
}).catch(e => {

console.log(e.error)
})
});
}


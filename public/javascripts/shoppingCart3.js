if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready);
} else {
    ready();
}


function ready() {

const removeCartItemButtons = document.getElementsByClassName('btn-danger');
console.log(removeCartItemButtons);
for (let i = 0; i < removeCartItemButtons.length; i++) {
    button = removeCartItemButtons[i];
//     button.addEventListener('click', (event) => {
//     const buttonClicked = event.target;
//     console.log(buttonClicked);
//     buttonClicked.parentElement.parentElement.remove();
//     updateCartTotal()
// })
    button.addEventListener('click', removeCartItems)
}
}

function removeCartItems(event) {
    const buttonClicked = event.target;
    console.log(buttonClicked);
    buttonClicked.parentElement.parentElement.remove();
    updateCartTotal()
}

const quantityInputs = document.getElementsByClassName('cart-quantity-input');
for (let i = 0; i < quantityInputs; i++) {
    const input = quantityInputs[i]
    input.addEventListener('change', quantityChange)
}

function quantityChange() {
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1;
}
updateCartTotal();
}
// quantityInputs.addEventListener('change', quanti )

const addCartItemButtons = document.getElementsByClassName('shop-item-button');
for (let i = 0; i < addCartItemButtons.length; i++) {
    const addtoCart = addCartItemButtons[i];
    addtoCart.addEventListener('click', addItem)
}

function addItem(event) {
    console.log(event.target);
    const button = event.target;
    const shopItem = button.parentElement.parentElement;
    const title = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
console.log(title);
    const price = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    console.log(price)
    const image = shopItem.getElementsByClassName('shop-item-image')[0].src;
    addItemtoCart(title, price, image)
    updateCartTotal();
    // console.log(image);
    // const addRemove = document.getElementsByClassName('btn-danger');
    // const parent = addRemove.parentElement.parentElement
    // console.log(parent);
    // const shopItemContainer = document.getElementsByClassName('shop-items')[0];
    // const shopItem = shopItemContainer.getElementsByClassName('shop-item');
    // // const imageElements = document.getElementsByClassName('cart-item-image');
    // const imageElements = shopItem.getElementsByClassName('cart-item-image');
    // console.log(imageElements)
}

function addItemtoCart(title, price, image) {
    const cartRow = document.createElement('div');
    // cartRow.append()
    cartRow.classList.add('cart-row');
    cartRow.innerText = title;
    const cartItems = document.getElementsByClassName('cart-items')[0];
    // var cartItems = localStorage.getItem('cartItems');

    // cartItems.push(newItem);

    // localStorage.setItem('cartItems', cartItems);
    const cartItemsTitle = cartItems.getElementsByClassName('shop-item-title');
    for (let i = 0; i < cartItemsTitle.length; i++) {
        if (cartItemsTitle[i].innerText === title) {
            alert('This item is already in your cart');
            return
}
}
    console.log(cartRow)
console.log(cartItemsTitle)
    cartRowContents = `
                <div class="cart-item cart-column">
             <span class="shop-item-title">${title}</span>
                
                <img  class="blackMug Mugs cart-item-image" src="${image}" alt="">
                
            </div>
            <span class="cart-item-price">${price}</span>
            <div class="cart-quantity cart-column">
                <input type="number" class="cart-quantity-input" value="1">
            
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>`
    cartRow.innerHTML = cartRowContents;
    cartRow.getElementsByClassName('btn btn-danger')[0].addEventListener('click', removeCartItems);
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChange)
    cartItems.append(cartRow)
}

function updateCartTotal() {
    const cartItemContainer = document.getElementsByClassName('cart-items')[0];
    console.log(cartItemContainer)
    const cartRows = cartItemContainer.getElementsByClassName('cart-row');
    console.log(cartRows)
    let total = 0;
    for (let i = 0; i < cartRows.length; i++) {
        const cartRow = cartRows[i];
        const priceElement = cartRow.getElementsByClassName('cart-item-price')[0];
        console.log(priceElement);
        const quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0];
        console.log(quantityElement);
        const price = parseFloat(priceElement.innerText.replace('$', ''));
        const quantity = quantityElement.value;
        console.log(price * quantity)
        total = total + (price * quantity);
}
        total = Math.round(total * 100) / 100
        document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}


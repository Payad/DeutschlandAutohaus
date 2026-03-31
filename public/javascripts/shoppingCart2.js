const addBtn1 = document.querySelector('.cartBTN1');
addBtn1.addEventListener('click', () => {
 const img = document.createElement('img');
const cart = document.querySelector('.shopmain');
const rmBtn = document.createElement('button');
rmBtn.textContent = 'remove';
rmBtn.classList.add('rmBtn');
rmBtn.style.backgroundColor = '#4d4d4d';
const hr = document.createElement('hr');
const spanQty = document.createElement('span');
spanQty.classList.add('qty');
spanQty.textContent = 'Qty 1';
const flexContainer = document.createElement('div');
flexContainer.classList.add('flex');

    // img.setAttribute('src', array[1].src);
    img.setAttribute('src', '/assets/images/IMG_0444.jpeg');
    img.classList.add('toCart');
    // cart.appendChild(img);
    // cart.appendChild(spanQty);
    // cart.appendChild(rmBtn);
    cart.appendChild(hr);
    cart.appendChild(flexContainer);
    flexContainer.appendChild(img);
    flexContainer.appendChild(rmBtn);
    flexContainer.appendChild(spanQty);

if (cart.getElementsByTagName('img').length > 0) {
    const cartImage = document.querySelector('.shoppingCartImage1');
    // cartImage.parentNode.removeChild(cartImage);
cartImage.style.display = 'none';
    // const cartDes = document.getElementsByTagName('p').length > 0;
    // cartDes.parentNode.removeChild(cartDes);
}
// const cartDes = document.querySelector('p');
if (cart.getElementsByTagName('p').length > 0) {
const cartDes = document.querySelector('p');
    cartDes.parentNode.removeChild(cartDes);
}

const cartContent = document.querySelector('.cartContent');
cartContent.style.marginTop = '0';

})

const addBtn2 = document.querySelector('.cartBTN2');
addBtn2.addEventListener('click', () => {
 const img = document.createElement('img');
const cart = document.querySelector('.shopmain');
    // img.setAttribute('src', array[1].src);
    img.setAttribute('src', '/assets/images/IMG_0442.jpeg');
    img.classList.add('toCart');
    cart.appendChild(img);
})

const cart = document.querySelector('.shopmain');
// if (cart.getElementsByTagName('img').length > 0) {
//     const cartImage = document.querySelector('.shoppingCartImage1');
//     cartImage.parentNode.removeChild(cartImage)
// }

// const removeCartItemButtons = document.getElementsByClassName('btn-danger');
// console.log(removeCartItemButtons);
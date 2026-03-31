// alert('hello');

const shoppingCart = document.querySelector('.shoppingCartImage');
const shopmain = document.querySelector('.shopmain');
shopmain.style.display = 'none';

shoppingCart.addEventListener('click', () => {

if (shopmain.style.display === 'none') {
shopmain.style.display = 'block';
} else {
    shopmain.style.display = 'none';
}
});



function closeCart() {
    const close = document.querySelector('span.close');
    // console.log(close);
    close.addEventListener('click', () => {
    shopmain.style.display = 'none';
});
}

closeCart();

// add to cart button //
// const addBtn = document.getElementsByClassName('cartBTN');
const addBtn = document.querySelectorAll('.cartBTN');
const cart = document.querySelector('.shopmain');
const mug = document.querySelector('.blackMug');
// console.log(addBtn[i]);
// const newBtn = [];
// newBtn.push(addBtn)
// console.log(newBtn)
// console.log(cart);
console.log(mug);
const array = [{src: '/assets/images/IMG_0444.jpeg'}, {src: '/assets/images/IMG_0442.jpeg'}];
console.log(array)
// console.log(array.indexOf({src:'/assets/images/IMG_0444.jpeg'}));

// for (let i = 0; i < array.length; i++) {
// if (addBtn[0]) {
//     addBtn.addEventListener('click', () => {

//     const img = document.createElement('img');
//     img.setAttribute('src', array[0].src);
//     img.classList.add('toCart');
//     cart.appendChild(img);
//     });
// }
//     if(addBtn[1]) {
//     addBtn.addEventListener('click', () => {
//     const img = document.createElement('img');
//     img.setAttribute('src', array[1].src);
//     img.classList.add('toCart');
//     cart.appendChild(img);
//     });
// }
// }

addBtn.forEach((btn) => {

// for (let i = 0; i < array.length; i++) {
// if (addBtn[0]) {
//     btn.addEventListener('click', () => {
//     const img = document.createElement('img');
//     img.setAttribute('src', array[0].src);
//     img.classList.add('toCart');
//     cart.appendChild(img);
//     });
// } 

// if(addBtn[1]) {
//     btn.addEventListener('click', () => {
//     const img = document.createElement('img');
//     img.setAttribute('src', array[1].src);
//     img.classList.add('toCart');
//     cart.appendChild(img);
//     });
// }
// }


btn.addEventListener('click', () => {
    // cart.innerHTML = h3;
    // const elem = elem.src = '/assets/images/IMG_0444.jpeg';
// const images = document.querySelectorAll('img.Mugs');

// const array = [{src: '/assets/images/IMG_0444.jpeg'}, {src: '/assets/images/IMG_0442.jpeg'}];
    // const cart = document.querySelector('.shopmain');
    // const img = document.createElement('img');
    // img.src = '/assets/images/IMG_0444.jpeg';

    for (let i = 0; i < array.length; i++) {
    const img = document.createElement('img');
// const newBtn = [];
// newBtn.push(addBtn)
console.log(addBtn[1])
console.log(array[i])
// if (addBtn[i] === array[i]) {
// if (addBtn[i] === array.indexOf('/assets/images/IMG_0444.jpeg')) {
if (addBtn[1]) {
    img.setAttribute('src', array[1].src);
    img.classList.add('toCart');
    cart.appendChild(img);
//     // addBtn.indexOf('cartBtn');
// // array.indexOf('/assets/images/IMG_0444.jpeg');
//     // console.log(addBtn)
//     // console.log(array)
// }
// }
}
    // img.src = array;
    // img.classList.add('toCart');
    // cart.appendChild(img);
    // cart.innerHTML = img;
    // const elem = elem.src = '/assets/images/IMG_0444.jpeg';
    };
});
});
const images = document.querySelectorAll('img.Mugs');
// const array = [];
// array.push(images);

// images.forEach((img, i) => {

//     if (addBtn) {
//     cart.appendChild(img)
// }
// })
// console.log(images);

///Differrent approach to list images////
// const cart = document.querySelector('.shopmain');
// gamesImage(cart, array);
// function gamesImage(cartDiv, index) {
//   const images = {
//       14: {
//         // src: 'https://picsum.photos/id/237/200/300'
//         src: '/assets/images/IMG_0444.jpeg'
//       },
//       15: {
//         // src: 'https://picsum.photos/seed/picsum/200/300'
//         src: '/assets/images/IMG_0442.jpeg'
//       },
//       16: {
//         src: '/assets/images/IMG_0441.jpeg'
//       }}
//       // There will be more src imgs here. I haven't added them yet.
// //   var pokeImgContainer = document.createElement('div')
// //   pokeImgContainer.classList.add('image')


//   if (images[index]) {
//     var img = document.createElement('img');
//     img.setAttribute("src", images[index].src);
//     cartDiv.appendChild(img);
//     // containerDiv.append(pokeImgContainer);
//   }
// }
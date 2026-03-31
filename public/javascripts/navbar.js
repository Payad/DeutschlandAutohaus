
// alert("hello");
/* Set Active class on clickable link */
function setActive() {
// const navBar = document.querySelector('#navbarNav');
// console.log(navBar)

let current = location.pathname.split('/')[1];
// let current1 = location.pathname.split('deutchlandautohaus/')[1];
if (current === "") return;
const navBar = document.querySelectorAll('.nav-item a');
console.log(navBar)
for (let i = 0; i < navBar.length; i++ ) {
    // const current = location.pathname.split('/')[1];
    // if (current === "") return
    if (navBar[i].getAttribute('href').indexOf(current) !== -1) {
    navBar[i].className += ' active';
} else if (navBar[i].getAttribute('href').indexOf(!current) === -1) {
    navBar[i].classList.remove('active');
}
}

}

setActive();

function setActive1() {
    let current1 = location.pathname.split('deutchlandautohaus/')[1];
    if (current1 === "") return;
    const navBar = document.querySelectorAll('.nav-item a');
for (let i = 0; i < navBar.length; i++) {
if (navBar[i].getAttribute('href').indexOf(current1 !== -1)) {
    navBar[i].className += ' active';
} else if (navBar[i].getAttribute('href').indexOf(!current1) === -1) {
    navBar[i].classList.remove('active');
}
}

}
setActive1();

// function setActive1() {
// // const navBar = document.querySelector('#navbarNav');
// // console.log(navBar)

// let current = location.pathname.split('/deutchlandautohaus')[1];
// if (current === "") return;
// const navBar = document.querySelectorAll('.nav-item a');
// console.log(navBar)
// for (let i = 0; i < navBar.length; i++ ) {
//     // const current = location.pathname.split('/')[1];
//     // if (current === "") return
//     if (navBar[i].getAttribute('href').indexOf(current) !== -1) {
//     navBar[i].className += ' active';
// } else if (navBar[i].getAttribute('href').indexOf(!current) === -1) {
//     navBar[i].classList.remove('active');
// }
// }
// }

// setActive1();
var main = document.querySelector(".main");
main.style.display = 'none';


function togglePanel() {
    const sidePanel = document.querySelector(".slide-left");
    // const main = document.querySelector(".main");
    // console.log(sidePanel);
//     sidePanel.addEventListener('click', () => {
//         // main.style.backgroundColor = 'green'
//         main.style.display = 'none';
    
// })
    // main.style.display = 'none';
// const main = document.querySelector(".main");
// main.style.display = 'none';
        if (main.style.display === 'none') {
            main.style.display = 'block'
        } else {
            main.style.display = 'none'
}

}

function Close() {
    const close = document.querySelector('.side-panel-toggle');
    // const main = document.querySelector(".main");
    close.addEventListener('click', () => {
        main.style.display = 'none';
})
}

Close();

/* MagnifyingGlass functionality */
// const searchBar = docuemnt.querySelector('.MagnifyingGlassImage');
// const xyzw = document.querySelector('.shoppingCartImage1');
// const shopmain = document.querySelector('.shopmain');
// shopmain.style.display = 'none';

// console.log(Cart);

// Cart.addEventListener('click', () => {
//     shopmain.style.display = 'block';
// })


// togglePanel();
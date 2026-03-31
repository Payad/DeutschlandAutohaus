const form = document.getElementById('form');

// function myFunction() {
//     document.getElementById('form').reset();
// }

// myFunction();

const year = document.querySelector('.year');
const make = document.querySelector('.make');
const model = document.querySelector('.model');

// form.addEventListener('submit', function(event) {
//     // event.preventDefault();

// //     const formData = {
// //         year: form.year.value,
// //         // make: form.make.value,
// //         // model: form.model.value,
// //         make: response.data.make,
// // };
//     console.log('Data submitted');

//     form.reset();
//     year.textContent = '';
//     make.textContent = '';
//     model.textContent = '';
// });

const savebtn = document.querySelector('.save');
const strong = document.querySelector('strong');
savebtn.addEventListener('click', (event) => {
    // event.preventDefault();
// document.location.href = 'http://localhost/serviceagreementsignup'
strong.textContent = '';
console.log(strong)
// form.textContent = '';

    // year.textContent = '';
    // make.textContent = '';
    // model.textContent = '';
    // form.reset();
    console.log('Data saved');
})
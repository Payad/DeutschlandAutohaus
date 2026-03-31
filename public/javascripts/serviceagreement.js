// document.addEventListener('DOMContentLoaded', () => {
// if (dropdownModel) {
//     dropdownSubmodel.style.display = 'block';
// } else {
//     dropdownSubmodel.style.display = 'none';
// }
// });

// document.addEventListener('DOMContenetLoaded', async () => {
//     const makeSelect = document.getElementById('make');
//     const modelSelect = document.getElementById('model');
//     const vinInput = document.getElementById('vin');
//     const form = document.getElementById('carForm');

// const LeWindows = require("nodemailer/lib/mime-node/le-windows");

//     async function fetchCars() {
//         const response = await fetch('/api/cars');
//         const cars = await response.json();

//         const makes = [...new Set(cars.map(car => car.make))];
//         makes.forEach(make => {
//         const option = document.createElement('option');
//         option.value = make;
//         option.textContent = make;
//         makeSelect.appendChild(option);
// });

//     makeSelect.addEventListener('change', () => {
//         const selectedMake = makeSelect.value;
//         const filteredModels = [...new Set(cars.filter(car => car.make === selectedMake))];
//     modelSelect.innerHTML = '';
//     filteredModels.forEach(model => {
//         const option = document.createElement('option');
//     option.value = model;
//     option.textContent = model;
//     modelSelect.appendChild(option);
// });
// });

// }


const sign_date = document.querySelector('.sign_date');
const checkbox = document.querySelector('.checkbox');
const first = document.querySelector('.customer_firstname');
const last = document.querySelector('.customer_lastname');
const signature = document.querySelector('.customer_signature');
const submitBtn = document.querySelector('.submit');

// if (checkbox.checked) {
//     console.log('CheckBox is Checked!');
//     sign_date.style.display = 'block';
// }
  first.setAttribute('disabled', true);
    last.setAttribute('disabled', true)
    signature.setAttribute('disabled', true);
    submitBtn.setAttribute('disabled', true);

// checkbox.addEventListener('click', () => {
//     console.log('checkbox is checked');
// if (checkbox.classList.contains('show_sign-date')) {
//     // sign_date.style.display = 'block';
//     checkbox.checked = false;
//     sign_date.classList.toggle('show_sign-date');
//     // sign_date.setAttribute('disabled', true);
//     sign_date.removeAttribute('disabled');
//     first.removeAttribute('disabled');
//     // first.setAttribute('disabled', false);
//     last.setAttribute('disabled', false)
//     signature.setAttribute('disabled', false);
// } 
// // else if (!checkbox.classList.contains('show_sign-date')){
// //     // sign_date.style.display = 'none';
// //     sign_date.classList.toggle('show_sign-date');
// //     // sign_date.setAttribute('disabled', false);
// //     first.setAttribute('disabled', true);
// //     last.setAttribute('disabled', true)
// //     signature.setAttribute('disabled', true);
// // }
// })

checkbox.addEventListener('click', (e) => {
// console.log(e);
e.target = checkbox;
    if (e.target.checked) {
    console.log('Checkbox checked!');
    // first.setAttribute('disabled', true);
    first.removeAttribute('disabled');
    last.removeAttribute('disabled');
    signature.removeAttribute('disabled');
submitBtn.removeAttribute('disabled');
    // last.setAttribute('disabled', true)
    // signature.setAttribute('disabled', true);
    // sign_date.setAttribute('disabled', true);
} 
else if (!e.target.checked) {
    console.log('Checkbox unchecked');
    first.setAttribute('disabled', true);
    last.setAttribute('disabled', true)
    signature.setAttribute('disabled', true);
    sign_date.setAttribute('disabled', true);
    submitBtn.setAttribute('disabled', true);
}
})


// })
// document.addEventListener('DOMContentLoaded', () => {
const makeSelect = document.getElementById('make');
const dropdownModel = document.querySelector('#model');
const dropdownYear = document.querySelector('#year');
const dropdownSubmodel = document.querySelector('#submodel');
const submodelLabel = document.querySelector('#submodelLabel');
const dropdownbodyType = document.querySelector('#bodyType');
const bodytypeLabel = document.querySelector('#bodytypeLabel');
const dropdownEngine = document.querySelector('#engineType');
const enginetypeLabel = document.querySelector('#transmissiontypeLabel');
console.log(dropdownSubmodel)
console.log(makeSelect);
console.log(dropdownModel);


const modelOptions = [
    '1 Series',
    '2 Series',
    '3 Series',
    '3 Series Gran Turismo',
    '4 Series',
    '5 Series',
    '5 Series Gran Turismo',
    '6 Series',
    '7 Series',
    '8 Series',
    'i3',
    'i4',
    'i5',
    'i7',
    'i8',
    'ix',
    'm2',
    'm3',
    'm4',
    'm5',
    'm6',
    'm8',
    'x1',
    'x2',
    'x3',
    'x3 m',
    'x4',
    'x5',
    'x5 eDrive',
    'x5 m',
    'x6',
    'x6 m',
    'x7',
    'xm',
    'z3',
    'z4',
    'z8',

];

const modelOptionsMercedes = [
    'A-class',
    'C-class',
    'CLA',
    'E-class',
    'EQE',
    'EQS',
    'S-class',
    'EQA',
    'EQB',
    'EQE SUV',
    'EQS SUV',
    'G-class',
    'GLA',
    'GLB',
    'GLC',
    'GLE',
    'GLS',
];

const BMW2005Models = [
    '325Ci',
    '325i',
    '325xi',
    '330Ci',
    '330i',
    '330xi',
    '525i',
    '530i',
    '545i',
    '645Ci',
    '745Li',
    '745i',
    '760Li',
    '760i',
    'M3',
    'X3',
    'X5',
    'Z4',

];

const BMW2006Models = [
    '325Ci',
    '325i',
    '325xi',
    '330Ci',
    '330i',
    '330xi',
    '525i',
    '525xi',
    '530i',
    '530xi',
    '550i',
    '650i',
    '750Li',
    '750i',
    '760Li',
    '760i',
    'M3',
    'M5',
    'M6',
    'X3',
    'X5',
    'Z4',

];

const BMW2007Models = [
    '328i',
    '328xi',
    '335i',
    '335xi',
    '525i',
    '525xi',
    '530i',
    '530xi',
    '550i',
    '650i',
    '750i',
    '760Li',
    'Alpina B7',
    'M5',
    'M6',
    'X3',
    'X5',
    'Z4',
];

const BMW2008Models = [
    '128i',
    '135i',
    '328i',
    '328xi',
    '335i',
    '335xi',
    '528i',
    '528xi',
    '535i',
    '535xi',
    '550i',
    '650i',
    '750Li',
    '750i',
    '760Li',
    'Alpina B7',
    'M3',
    'M5',
    'M6',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2009Models = [
    '128i',
    '135i',
    '328i',
    '328i xDrive',
    '335d',
    '335i',
    '335i xDrive',
    '528i',
    '528i xDrive',
    '535i',
    '535i xDrive',
    '550i',
    '650i',
    '750Li',
    '750i',
    'M3',
    'M5',
    'M6',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2010Models = [
    '128i',
    '125i',
    '328i',
    '328i xDrive',
    '335d',
    '335i',
    '335i xDrive',
    '528i',
    '528i xDrive',
    '535i',
    '535i GT',
    '535i xDrive',
    '550i',
    '550i GT',
    '650i',
    '750Li',
    '750Li xDrive',
    '750i',
    '750i xDrive',
    '760Li',
    'M3',
    'M5',
    'M6',
    'X3',
    'X5',
    'X6',
    'Z4',

];

const BMW2011Models = [
    '1 Series M',
    '128i',
    '135i',
    '328i',
    '328i xDrive',
    '335d',
    '335i',
    '335i xDrive',
    '335is',
    '528i',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550i GT xDrive',
    '550i xDrive',
    '740Li',
    '740i',
    '750Li',
    '750i xDrive',
    '760Li',
    'Alpina B7',
    'Alpina B7 xDrive',
    'Alpina B7L',
    'Alpina B7L xDrive',
    'M3',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2012Models = [
    '128i',
    '135i',
    '328i',
    '328i xDrive',
    '335i',
    '335i xDrive',
    '335is',
    '528i',
    '528i xDrive',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550 i xDrive',
    '640i',
    '650i',
    '650i xDrive',
    '740i',
    '750Li',
    '750Li xDrive',
    '750i',
    '750i xDrive',
    '760Li',
    'ActiveHybrid 5',
    'Alpina B7',
    'Alpina B7 xDrive',
    'Alpina B7L',
    'Alpina B7L xDrive',
    'M3',
    'M6',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2013Models = [
    '128i',
    '135i',
    '135is',
    '320i',
    '320i xDrive',
    '328i',
    '328i xDrive',
    '335i',
    '335i xDrive',
    '335is',
    '528i',
    '528i xDrive',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550i GT',
    '550i GT xDrive',
    '550i xDrive',
    '640i',
    '640i Gran Coupe',
    '650i',
    '650i Gran Coupe',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740Li',
    '740Li xDrive',
    '740i',
    '750Li',
    '750Li xDrive',
    '750i',
    '750i xDrive',
    '760Li',
    'ActiveHybrid 3',
    'ActiveHybrid 5',
    'ActiveHybrid 7',
    'Alpina B7',
    'Alpina B7 xDrive',
    'Alpina B7L',
    'Alpina B7L xDrive',
    'M3',
    'M5',
    'M6',
    'X1',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2014Models = [
    '228i',
    '320i',
    '320i xDrive',
    '328d',
    '328d xDrive',
    '328i',
    '328i GT xDrive',
    '328i xDrive',
    '335i',
    '335i GT xDrive',
    '335i xDrive',
    '428i',
    '428i xDrive',
    '435i',
    '435i xDrive',
    '538i',
    '528i xDrive',
    '535d',
    '535d xDrive',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550i GT',
    '550i GT xDrive',
    '550i xDrive',
    '640i',
    '640i Gran Coupe',
    '640i xDrive',
    '640i xDrive Gran Coupe',
    '650i',
    '650i Gran Coupe',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740Li',
    '740Li xDrive',
    '740i',
    '750Li',
    '750Li xDrive',
    '750i',
    '760Li',
    'ActiveHybrid 3',
    'ActiveHybgrid 5',
    'ActiveHybrid 7',
    'Alpina B7',
    'Alpina B7 xDrive',
    'M235i',
    'M5',
    'M6',
    'M6 Gran Coupe',
    'X1',
    'X3',
    'X5',
    'X6',
    'Z4',
];

const BMW2015Models = [
    '228i',
    '228i xDrive',
    '320i',
    '320i xDrive',
    '328d',
    '328d xDrive',
    '328i',
    '328i GT xDrive',
    '328i xDrive',
    '335i',
    '335i GT xDrive',
    '335i xDrive',
    '428i',
    '428i Gran Coupe',
    '428i xDrive',
    '428i xDrive Gran Coupe',
    '435i',
    '435i Gran Coupe',
    '435i xDrive',
    '435i xDrive Gran Coupe',
    '528i',
    '528i xDrive',
    '535d',
    '535d xDrive',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550i GT',
    '550i GT xDrive',
    '550i xDrive',
    '640i',
    '640i Gran Coupe',
    '640i xDrive',
    '640i xDrive Gran Coupe',
    '650i',
    '650i Gran Coupe',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740Ld',
    '740Li',
    '740Li xDrive',
    '740i',
    '750Li',
    '750i',
    '750i xDrive',
    '760Li',
    'ActiveHybrid 3',
    'ActiveHybrid 5',
    'ActiveHybrid 7',
    'Alpina B6 xDrive Gran Coupe',
    'Alpina B7',
    'Alpina B7 xDrive',
    'Alpina B7L xDrive',
    'M235i',
    'M235i xDrive',
    'M3',
    'M4',
    'M5',
    'M6 Gran Coupe',
    'X1',
    'X3',
    'X4',
    'X5',
    'X6',
    'Z4',
];

const BMW2016Models = [
    '228i',
    '228i xDrive',
    '320i',
    '320i xDrive',
    '328d',
    '328d xDrive',
    '328i',
    '328i GT xDrive',
    '328i xDrive',
    '330e',
    '335i GT xDrive',
    '340i',
    '340i xDrive',
    '428i',
    '428i Gran Coupe',
    '428i xDrive',
    '428i xDrive Gran Coupe',
    '435i',
    '435i Gran Coupe',
    '435i xDrive',
    '435i xDrive Gran Coupe',
    '528i',
    '528i xDrive',
    '535d',
    '535d xDrive',
    '535i',
    '535i GT',
    '535i GT xDrive',
    '535i xDrive',
    '550i',
    '550i GT xDrive',
    '550i xDrive',
    '640i',
    '640i Gran Coupe',
    '640i xDrive',
    '640 xDrive Gran Coupe',
    '650i',
    '650i Gran Coupe',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740i',
    '750i',
    '750i xDrive',
    'ActiveHybrid 5',
    'Alpina B6 xDrive Gran Coupe',
    'M2',
    'M235i',
    'M235i xDrive',
    'M3',
    'M4',
    'M5',
    'M6',
    'M6 Gran Coupe',
    'X1',
    'X3',
    'X4',
    'X5',
    'X6',
    'Z4',
    'i3',
    'i8',
];

const BMW2017Models = [
    '230i',
    '230i xDrive',
    '320i',
    '320i xDrive',
    '328d',
    '328d xDrive',
    '330e',
    '330i',
    '330i xDrive',
    '340i',
    '340i GT xDrive',
    '340i xDrive',
    '430i',
    '430i Gran Coupe',
    '430i xDrive',
    '430i xDrive Gran Coupe',
    '440i',
    '440i Gran Coupe',
    '440i xDrive',
    '440i xDrive Gran Coupe',
    '530i',
    '530i xDrive',
    '535i GT',
    '535i GT xDrive',
    '540i',
    '540i xDrive',
    '550i GT xDrive',
    '640i',
    '640i Gran Coupe',
    '640i xDrive',
    '640i xDrive Gran Coupe',
    '650i',
    '650i Gran Coupe',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740e xDrive',
    '740i',
    '740i xDrive',
    '750i',
    '750i xDrive',
    'Alpina B6 xDrive Gran Coupe',
    'Alpina B7',
    'M2',
    'M240i',
    'M240i xDrive',
    'M3',
    'M4',
    'M6',
    'M6 Gran Coupe',
    'M760i xDrive',
    'X1',
    'X3',
    'X4',
    'X5',
    'X6',
    'i3',
    'i8',
];

const BMW2018Models = [
    '230i',
    '230i xDrive',
    '320i',
    '320i xDrive',
    '328d',
    '328d xDrive',
    '330e',
    '330i',
    '330i GT xDrive',
    '330i xDrive',
    '340i',
    '340i GT xDrive',
    '340i GT xDrive',
    '430i',
    '430i xDrive',
    '430i xDrive Gran Coupe',
    '440i',
    '440i Gran Coupe',
    '440i xDrive',
    '440i xDrive Gran Coupe',
    '530e',
    '530i',
    '530i xDrive',
    '540d xDrive',
    '540i',
    '540i xDrive',
    '640i',
    '640i Gran Coupe',
    '640i xDrive',
    '640i xDrive Gran Coupe',
    '640i xDrive Gran Turismo',
    '650i',
    '650i xDrive',
    '650i xDrive Gran Coupe',
    '740e xDrive',
    '740i',
    '740i xDrive',
    '750i',
    '750i xDrive',
    'Alpina B6 xDrive Gran Coupe',
    'Alpina B7',
    'M2',
    'M240i',
    'M240i xDrive',
    'M3',
    'M4',
    'M5',
    'M550i xDrive',
    'M6',
    'M6 Gran Coupe',
    'M760i xDrive',
    'X1',
    'X2',
    'X3',
    'X4',
    'X5',
    'X6',
    'i3',
    'i3s',
];

const BMW2019Models = [
    '230i',
    '230i xDrive',
    '330i',
    '330i GT xXDrive',
    '330i xDrive',
    '340i GT xDrive',
    '430i',
    '430i Gran Coupe',
    '430i xDrive',
    '430i xDrive Gran Coupe',
    '440i',
    '440i Gran Coupe',
    '440i xDrive',
    '440i xDrive Gran Coupe',
    '530e',
    '530e xDrive',
    '530i',
    '530i xDrive',
    '540i',
    '540i xDrive', 
    '640i Gran Coupe',
    '640i xDrive Gran Coupe',
    '640i xDrive Gran Turismo',
    '650i Gran Coupe',
    '650i xDrive Gran Coupe',
    '740e xDrive',  
    '740i',
    '740i xDrive',
    '750i',
    '750i xDrive',
    'Alpina B6 xDrive Gran Coupe',
    'Alpina B7',
    'M2',
    'M240i',
    'M240i xDrive',
    'M4',
    'M5',
    'M550i xDrive',
    'M6 Gran Coupe',
    'M760i xDrive',
    'M850i xDrive',
    'X1',
    'X2',
    'X3',
    'X4',
    'X5',
    'X6',
    'X7',
    'Z4',
    'i3',
    'i3s',
    'i8',
];

const BMW2020Models = [
    '228i',
    '230i',
    '230i xDrive',
    '330i',
    '330i xDrive',
    '430i',
    '430i Gran Coupe',
    '430i xDrive',
    '430i xDrive Gran Coupe',
    '440i',
    '440i Gran Coupe',
    '440i xDrive',
    '440i xDrive Gran Coupe',
    '530e',
    '530e xDrive',
    '530i',
    '530i xDrive',
    '540i',
    '540i xDrive',
    '740i',
    '740i xDrive',
    '745e xDrive',
    '750i xDrive',
    '840i',
    '840i Gran Coupe',
    '840i xDrive',
    '840i xDrive Gran Coupe',
    'Alpina B7',
    'M2',
    'M235i xDrive Gran Coupe',
    'M240i',
    'M240i xDrive',
    'M340i',
    'M340i xDrive',
    'M4',
    'M5',
    'M550i xDrive',
    'M760i xDrive',
    'M8',
    'M8 Gran Coupe',
    'M850i xDrive',
    'M850i xDrive Gran Coupe',
    'X1',
    'X2',
    'X3',
    'X4',
    'X5', 
    'X6',
    'X7',
    'Z4',
    'i3',
    'i3s',
    'i8',
];

const BMW2021Models = [
    '228i xDrive Gran Coupe',
    '230i',
    '230i xDrive',
    '330e',
    '330e xDrive',
    '330i',
    '330i xDrive',
    '430i',
    '430i xDrive',
    '530e',
    '530e xDrive',
    '530i',
    '530i xDrive',
    '540i',
    '540i xDrive',
    '740i',
    '740i xDrive',
    '745e xDrive',
    '750i xDrive',
    '840i',
    '840i Gran Coupe',
    '840i xDrive',
    '840i xDrive Gran Coupe',
    'Alpina B7',
    'Alpina XB7',
    'M2',   
    'M235i xDrive Gran Coupe',
    'M240i',
    'M3',
    'M340i',
    'M340i xDrive',
    'M4',
    'M440i xDrive', 
    'M5',
    'M550i xDrive', 
    'M760i xDrive',
    'M8',
    'M8 Gran Coupe',
    'M850i xDrive',
    'M850i xDrive Gran Coupe',
    'X1',
    'X2',
    'X3',
    'X4',
    'X5',
    'X5',
    'X7',
    'Z4',
    'i3',
    'i3s',
];

const BMW2022Models = [
    '330e',
    '330e xDrive',
    '430i Gran Coupe',
    '430i xDrive Gran Coupe',
    'Alpina XB7',
    'M440i xDrive',
    'M8 Gran Coupe',
    'M850i xDrive Gran Coupe',
    'X3',
    'X4',

];

// const BMW2023Models = [
//     ''
// ];

// for (let i = 0; i < modelOptions.length; i++) {
//     let opt = modelOptions[i];
//     let el = document.createElement('option');
//     el.value = opt;
//     el.textContent = opt;
//     makeSelect.appendChild(el);
// }

const yearOptions = [
    '2025',
    '2024',
    '2023',
    '2022',
    '2021',
    '2020',
    '2019',
    '2018',
    '2017',
    '2016',
    '2015',
    '2014',
    '2013',
    '2012',
    '2011',
    '2010',
    '2009',
    '2008',
    '2007',
    '2006',
];

const makes = [
    "select make",
    "BMW",
    "Mercedes",
    "Porche",
];

const submodel = [
    'Sub model',
    'Base',
];
const X3Submodel = [
    'Sub model',
    '2.5i',
    '3.0i'
];


function updateDropdown(value) {
    dropdownModel.innerHTML = '<option value=""> Select an option </option>';
    // makeSelect.innerHTML = '<select><option value="">select make</option> <option value="">BMW</option> <option value="">Mercedes-Benz</option> <option value="">Porche</option></select><option value="">Select an option</option>'
    //  dropdownModel.innerHTML = '<option value="">select model</option>';
    // makeSelect.innerHTML = '<option value="">select make</option>'
    console.log(dropdownYear.textContent)
    // yearOptions.innerHTML = '<option value=""> Select an option </option>';
// dropdownModel.innerHTML = '<option>`${modelOptions}`</option>';
// dropdownModel.innerHTML = `${modelOptions}`

// year select that changes make response
// if (yearSelect.value) {
//     makeSelect.value = "";
//     makeSelect.textContent = "";
//     const el = document.createElement('option');
//     el.value = "Select-make";
//     el.textContent = "select make"
//     makeSelect.appendChild(el);
// const el2 = document.createElement('option');
//     el2.value = "BMW";
//     el2.textContent = "BMW"
//     makeSelect.appendChild(el2);
// const el3 = document.createElement('option');
//     el3.value = "Mercedes";
//     el3.textContent = "Mercedes"
//     makeSelect.appendChild(el3);
// const el4 = document.createElement('option');
//     el4.value = "Porche";
//     el4.textContent = "Porche"
//     makeSelect.appendChild(el4);
// }

//Code for trying to set make dropdown to default
// makeSelect.value = '';
// makeSelect.textContent = '';
// for(let i = 0; i < makes.length; i++) {
//     const opt = makes[i];
//     const el = document.createElement('option');
//     el.value = opt;
//     el.textContent = opt;
//     makeSelect.appendChild(el);
// }


//     const filteredOptions = modelOptions.filter(option => 
//         option.toLowerCase().includes(value.toLowerCase())
        
// );
// console.log(filteredOptions);

//     filteredOptions.forEach(option => {
//         const optionElement = document.createElement('option');
//         optionElement.value = option;
//         optionElement.textContent = option;
//         dropdownModel.appendChild(optionElement);
// });

// if (value === 'Mercedes') {
//     for (let i = 0; i < modelOptionsMercedes.length; i++) {
//         let opt = modelOptionsMercedes[i];
//         let el = document.createElement('option');
//         el.value = opt;
//         el.textContent = opt;
//         dropdownModel.appendChild(el);
// }
// } else {
//     dropdownModel.innerHTML = 'none';
// }


// if (value === 'BMW' && yearOptions === '2015') {
//     console.log('Hello')
// }



// if (value === 'BMW') {
// for (let i = 0; i < modelOptions.length; i++) {
//     let opt = modelOptions[i];
//     let el = document.createElement('option');
//     el.value = opt;
//     el.textContent = opt;
//     dropdownModel.appendChild(el);
// }
// } 
// else if(value === 'Mercedes') {
//     dropdownModel.innerHTML = 'none';
//     for (let i = 0; i < modelOptionsMercedes.length; i++) {
//     let opt = modelOptionsMercedes[i];
//     let el = document.createElement('option');
//     el.value = opt;
//     el.textContent = opt;
//     dropdownModel.appendChild(el);
//     console.log(opt);
//     console.log(modelOptionsMercedes);
// }
// } 
// else {
//     dropdownModel.innerHTML = 'none';
// }

if (value === 'BMW') {
/* dropdown year functionality */
// for (let i = 0; i < yearOptions.length; i++) {
//         const year = yearOptions[i];
//         // if (value === 'BMW' && modelOptions === '1 Series') {
//         let el = document.creatreEement('option');
//         el.value = year;
//         el.textContent = year
//         // modelOptions.value = '2018' 
//         dropdownYear.appendChild(el);
// }
    console.log('hello BMW');
    console.log(dropdownModel.textContent);
//ending conditional bracket
// }

// if (yearSelect.value === '2005' && value === 'BMW') {
//     console.log('2005 value: BMW');
// }
// if (value === '1 Series') {
//     let el = document.createElement('option');
//     el.value = value;
//     el.textContent = value;
//     dropdownYear.appendChild(el);
// }
    //was value === '2005'
if (yearSelect.value === '2005') {
    for (let i = 0; i < BMW2005Models.length; i++) {
    const opt = BMW2005Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}

    console.log('Hello 2005')
} else if (yearSelect.value === '2006') {
    for (let i = 0; i < BMW2006Models.length; i++) {
    const opt = BMW2006Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2007') {
    for (let i = 0; i < BMW2007Models.length; i++) {
    const opt = BMW2007Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}

} else if (yearSelect.value === '2008') {
    for (let i = 0; i < BMW2008Models.length; i++) {
    const opt = BMW2008Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2009') {
    for (let i = 0; i < BMW2009Models.length; i++) {
    const opt = BMW2009Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2010') {
    for (let i = 0; i < BMW2010Models.length; i++) {
    const opt = BMW2010Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}

} else if (yearSelect.value === '2011') {
    for (let i = 0; i < BMW2011Models.length; i++) {
    const opt = BMW2011Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2012') {
    for (let i = 0; i < BMW2012Models.length; i++) {
    const opt = BMW2012Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
}else if (yearSelect.value === '2013') {
    for (let i = 0; i < BMW2013Models.length; i++) {
    const opt = BMW2013Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2014') {
    for (let i = 0; i < BMW2014Models.length; i++) {
    const opt = BMW2014Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2015') {
    for (let i = 0; i < BMW2015Models.length; i++) {
    const opt = BMW2015Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2016') {
    for (let i = 0; i < BMW2016Models.length; i++) {
    const opt = BMW2016Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2017') {
    for (let i = 0; i < BMW2017Models.length; i++) {
    const opt = BMW2017Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2018') {
    for (let i = 0; i < BMW2018Models.length; i++) {
    const opt = BMW2018Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2019') {
    for (let i = 0; i < BMW2019Models.length; i++) {
    const opt = BMW2019Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2020') {
    for (let i = 0; i < BMW2020Models.length; i++) {
    const opt = BMW2020Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2021') {
    for (let i = 0; i < BMW2021Models.length; i++) {
    const opt = BMW2021Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
} else if (yearSelect.value === '2022') {
    for (let i = 0; i < BMW2022Models.length; i++) {
    const opt = BMW2022Models[i];
    let el = document.createElement('option');
    el.value = opt;
    el.textContent = opt;
    dropdownModel.appendChild(el);
}
}
}

}
/* make and model grey out */
window.addEventListener('DOMContentLoaded', () => {
const make = document.querySelector('#make');
const model = document.querySelector('#model');

// make.disabled = true;
// model.disabled = true;
});

/* model drop down select modal*/
dropdownModel.addEventListener('change', (event) => {
    const value = event.target.value;
//     if(value === '325Ci') {
//     console.log('Hello 325Ci');
// }
// switch (value) {
//     case '325Ci':
//         console.log('Hello 325Ci')
// }

// if (dropdownModel) {
//     console.log('Hello submodel')
//     dropdownSubmodel.style.display = 'block',
// } else {
//     dropdownSubmodel.style.display = 'none'
// }

// document.addEventListener('DOMContentLoaded', () => {
// if (dropdownModel) {
//     dropdownSubmodel.style.display = 'block';
// } else {
//     dropdownSubmodel.style.display = 'none';
// }
// });

dropdownSubmodel.classList.remove('hidden');
submodelLabel.classList.remove('hidden');
dropdownbodyType.classList.remove('hidden');
bodytypeLabel.classList.remove('hidden');
// updateDropdown(value);
// dropdownSubmodel.textContent = ' ';

// dropdownSubmodel.value = 'Hello';
// dropdownSubmodel.textContent = 'Hello';
// dropdownbodyType.value = 'Hello';
// dropdownbodyType.textContent = 'Hello';
// if (dropdownModel.value !== value) {
//     dropdownSubmodel.value = 'Submodel';
// }
// let el = document.createElement('option');
//         el.value = ' ';
//         el.textContent = ' ';
//         dropdownSubmodel.appendChild(el);

//for bmw 2005 x3 submodel dropdown
// for (let i = 0; i < X3Submodel.length; i++) {
if (yearSelect.value === '2017' && value === 'Alpina B7') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el1 = document.createElement('option');
            el1.value = 'Sub model';
            el1.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el = document.createElement('option');
            el.value = 'xDrive';
            el.textContent = 'xDrive';
            dropdownSubmodel.appendChild(el);

             dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'Base') {
            let el1 = document.createElement('option');
            el1.value = 'Body';
            el1.textContent = 'Body';
            dropdownbodyType.appendChild(el);

            let el = document.createElement('option');
            el.value = '4-dr Sedan';
            el.textContent = '4-dr Sedan';
            dropdownbodyType.appendChild(el);

            dropdownbodyType.addEventListener('change', () => {
            let el2 = document.createElement('option');
            el2.value = '4.4L V8 N63M30 Siemens MS DI 600HP';
            el2.textContent = '4.4L V8 N63M30 Siemens MS DI 600HP';
            dropdownbodyType.appendChild(el2);
})
}
             });
}



if (yearSelect.value === '2016' && value === 'M4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el1 = document.createElement('option');
            el1.value = 'Sub model';
            el1.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el = document.createElement('option');
            el.value = 'Base';
            el.textContent = 'Base';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'GTS';
            el2.textContent = 'GTS';
            dropdownSubmodel.appendChild(el2);

            dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'Base') {
            let el1 = document.createElement('option');
            el1.value = 'Body';
            el1.textContent = 'Body';
            dropdownbodyType.appendChild(el);

            let el = document.createElement('option');
            el.value = '2-dr Coupe';
            el.textContent = '2-dr Coupe';
            dropdownbodyType.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownbodyType.addEventListener('change', () => {
            let el2 = document.createElement('option');
            el2.value = '3.0L L6 S55B30 Bosch DI 425HP';
            el2.textContent = '3.0L L6 S55B30 Bosch DI 425HP';
            dropdownbodyType.appendChild(el2);
})
}
            if (dropdownSubmodel.value === 'GTS') {
            let el = document.createElement('option');
            el.value = '2-dr Coupe';
            el.textContent = '2-dr Coupe';
            dropdownbodyType.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = '3.0L L6 S55B30 Bosch DI 493HP';
            el2.textContent = '3.0L L6 S55B30 Bosch DI 493HP';
            dropdownbodyType.appendChild(el2);
}
});
}



if (value === 'X1') {
      dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el1 = document.createElement('option');
            el1.value = 'Sub model';
            el1.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            // console.log(el);
            // console.log(dropdownbodyType);

            let el = document.createElement('option');
            el.value = 'sDrive28i';
            el.textContent = 'sDrive28i';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive28i';
            el2.textContent = 'xDrive28i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive35i';
            el3.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el3);

            dropdownSubmodel.addEventListener('change', () => {
if(dropdownSubmodel.value === 'sDrive28i' || dropdownSubmodel.value === 'xDrive28i') {
        // dropdownEngine.classList.remove('hidden');
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
       
        let el = document.createElement('option');
        el.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el);
} else if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el = document.createElement('option');
        el.value = '3.0L L6 M55B30A Bosch DI 300HP';
        el.textContent = '3.0L L6 M55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el);
}
});
if (yearSelect.value === '2014' && value === 'X1') {
    dropdownSubmodel.addEventListener('change', () => {
if(dropdownSubmodel.value === 'sDrive28i' || dropdownSubmodel.value === 'xDrive28i') {
        // dropdownEngine.classList.remove('hidden');
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
       
        let el = document.createElement('option');
        el.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el);
} else if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el = document.createElement('option');
        el.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el);
}
});
}
    if (yearSelect.value === '2016' && value === 'X1') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'xDrive28i';
        el2.textContent = 'xDrive28i';
        dropdownSubmodel.appendChild(el2);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el = document.createElement('option');
        el.value = '2.0L L4 B46A20B MEVD 17.2.3 DI 228HP';
        el.textContent = '2.0L L4 B46A20B MEVD 17.2.3 DI 228HP';
        dropdownEngine.appendChild(el);
}
     if (yearSelect.value === '2017' && value === 'X1') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'xDrive28i';
        el2.textContent = 'xDrive28i';
        dropdownSubmodel.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = 'sDrive28i';
        el3.textContent = 'sDrive28i';
        dropdownSubmodel.appendChild(el3);

        dropdownSubmodel.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el = document.createElement('option');
        el.value = '2.0L L4 B46A20B MEVD 17.2.3 DI 228HP';
        el.textContent = '2.0L L4 B46A20B MEVD 17.2.3 DI 228HP';
        dropdownEngine.appendChild(el);
        });
}
}

    if (value === 'X3') {
        // console.log('Hello X3');
        // dropdownSubmodel.value = '';
        // dropdownSubmodel.textContent = '';
        //  for (let i = 0; i < X3Submodel.length; i++) {
            dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = '2.5i';
            el2.textContent = '2.5i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = '3.0i';
            el3.textContent = '3.0i';
            dropdownSubmodel.appendChild(el3);
dropdownSubmodel.addEventListener('change', () => {
if(dropdownSubmodel.value === '2.5i') {
        // dropdownEngine.classList.remove('hidden');
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);
        console.log(el4);
        console.log(dropdownbodyType);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el);
} else if (dropdownSubmodel.value === '3.0i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        dropdownEngine.appendChild(el);
}



});



// dropdownbodyType.addEventListener('change', () => {
// if (dropdownSubmodel.value === '2.5i') {
//     // console.log('4-dr Sedan');
//         dropdownEngine.classList.remove('hidden');
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el3 = document.createElement('option');
//         el3.value = 'Engine';
//         el3.textContent = 'Engine';
//         dropdownEngine.appendChild(el3);

//         // let el4 = document.createElement('option');
//         // el4.value = 'not sure';
//         // el4.textContent = 'not sure';
//         // dropdownEngine.appendChild(el4);

//         let el5 = document.createElement('option');
//         el5.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el5.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el5);

//         // let el6 = document.createElement('option');
//         // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
//         // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
//         // dropdownEngine.appendChild(el6);
// } else if (dropdownSubmodel === '3.0i') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el3 = document.createElement('option');
//         el3.value = 'Engine';
//         el3.textContent = 'Engine';
//         dropdownEngine.appendChild(el3);

//         // let el4 = document.createElement('option');
//         // el4.value = 'not sure';
//         // el4.textContent = 'not sure';
//         // dropdownEngine.appendChild(el4);

//         let el5 = document.createElement('option');
//         el5.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
//         el5.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
//         dropdownEngine.appendChild(el5);
// } 
// // else if (dropdownbodyType.value === '2-dr Convertible') {
// //         dropdownEngine.value = '';
// //         dropdownEngine.textContent = '';
// //         let el = document.createElement('option');
// //         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
// //         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
// //         dropdownEngine.appendChild(el);
// // }
// })



// }
// if(dropdownSubmodel.value === '2.5i') {
//     // let el3 = document.createElement('option');
//     //     el3.value = '4-dr Sport Utility';
//     //     el3.textContent = '4-dr Sport Utility';
//     //     // dropdownbodyType.appendChild(el3);
//     //     console.log(el3);

// }
// let el3 = document.createElement('option');
//         el3.value = '4-dr Sport Utility';
//         el3.textContent = '4-dr Sport Utility';
//         dropdownbodyType.appendChild(el3);
} else {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

             let el2 = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el2.value = 'Base';
            el2.textContent = 'Base';
            dropdownSubmodel.appendChild(el2);
            console.log(el);
}
if (yearSelect.value === '2006' && value === 'X3') {
    console.log('Hello X3 for 2006');
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el = document.createElement('option');
    el.value = 'Sub model';
    el.textContent = 'Sub model';
    dropdownSubmodel.appendChild(el);

    let el1 = document.createElement('option');
    el1.value = '3.0i';
    el1.textContent = '3.0i';
    dropdownSubmodel.appendChild(el1);

    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === '3.0i') {
    dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);
    }
    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
    el4.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
    dropdownEngine.appendChild(el4);
    });
   
} else if (yearSelect.value === '2007' && value === 'X3' || yearSelect.value === '2008' && value === 'X3') {
        dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el = document.createElement('option');
    el.value = 'Sub model';
    el.textContent = 'Sub model';
    dropdownSubmodel.appendChild(el);

    let el1 = document.createElement('option');
    el1.value = '3.0si';
    el1.textContent = '3.0si';
    dropdownSubmodel.appendChild(el1);

    // dropdownbodyType.value = '';
    // dropdownbodyType.textContent = '';
    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === '3.0si') {
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);

    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
    el4.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
    dropdownEngine.appendChild(el4);
    } 
 });

} else if (yearSelect.value === '2009' && value === 'X3' || yearSelect.value === '2010' && value === 'X3') {
      dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el = document.createElement('option');
    el.value = 'Sub model';
    el.textContent = 'Sub model';
    dropdownSubmodel.appendChild(el);

    let el1 = document.createElement('option');
    el1.value = 'xDrive30i';
    el1.textContent = 'xDrive30i';
    dropdownSubmodel.appendChild(el1);

    // dropdownbodyType.value = '';
    // dropdownbodyType.textContent = '';
    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive30i') {
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);

    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
    el4.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
    dropdownEngine.appendChild(el4);
    };
    });
} else if (yearSelect.value === '2011' && value === 'X3') {
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el = document.createElement('option');
    el.value = 'Sub model';
    el.textContent = 'Sub model';
    dropdownSubmodel.appendChild(el);

    let el1 = document.createElement('option');
    el1.value = 'xDrive28i';
    el1.textContent = 'xDrive28i';
    dropdownSubmodel.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = 'xDrive35i';
    el2.textContent = 'xDrive35i';
    dropdownSubmodel.appendChild(el2);

    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive28i') {
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);

    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N52B30A Siemens MS 70 MFI 240HP';
    el4.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 240HP';
    dropdownEngine.appendChild(el4);

    } else if (dropdownSubmodel.value === 'xDrive35i') {
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);

    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
    el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
    dropdownEngine.appendChild(el4);
} else if (yearSelect.value === '2013' && value === 'X3') { 
        dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el = document.createElement('option');
    el.value = 'Sub model';
    el.textContent = 'Sub model';
    dropdownSubmodel.appendChild(el);

    let el1 = document.createElement('option');
    el1.value = 'xDrive28i';
    el1.textContent = 'xDrive28i';
    dropdownSubmodel.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = 'xDrive35i';
    el2.textContent = 'xDrive35i';
    dropdownSubmodel.appendChild(el2);

    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive28i') {
    let el3 = document.createElement('option');
    el3.value = '4-dr Sport Utility';
    el3.textContent = '4-dr Sport Utility';
    dropdownbodyType.appendChild(el3);

    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
    el4.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
    dropdownEngine.appendChild(el4);
    } else if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
    el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
    dropdownEngine.appendChild(el4);
    }
    });
}
    if (yearSelect.value === '2014' && value === 'X3') {
    if (dropdownSubmodel.value === 'xDrive28i') {
    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
    el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
    dropdownEngine.appendChild(el4);
      } else if (dropdownSubmodel.value === 'xDrive35i') {
        // dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
    el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
    dropdownEngine.appendChild(el4);
    }
}
    if (yearSelect.value === '2015' && value === 'X3') {
    let el1 = document.createElement('option');
    el1.value = 'sDrive28i';
    el1.textContent = 'sDrive28i';
    dropdownSubmodel.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = 'xDrive28d';
    el2.textContent = 'xDrive28d';
    dropdownSubmodel.appendChild(el2);

     if (dropdownSubmodel.value === 'sDrive28i') {
    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
    el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
    dropdownEngine.appendChild(el4);
}
     if (dropdownSubmodel.value === 'xDrive28d') {
    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N47D20 CRDI DI 180HP';
    el4.textContent = '2.0L L4 N47D20 CRDI DI 180HP';
    dropdownEngine.appendChild(el4);
}
    }
    if (yearSelect.value === '2016' && value === 'X3') {
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';
    let el1 = document.createElement('option');
    el1.value = 'sDrive28i';
    el1.textContent = 'sDrive28i';
    dropdownSubmodel.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = 'xDrive28d';
    el2.textContent = 'xDrive28d';
    dropdownSubmodel.appendChild(el2);

    let el3 = document.createElement('option');
    el3.value = 'xDrive28i';
    el3.textContent = 'xDrive28i';
    dropdownSubmodel.appendChild(el3);

    let el4 = document.createElement('option');
    el4.value = 'xDriv35i';
    el4.textContent = 'xDrive35i';
    dropdownSubmodel.appendChild(el4);

    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'sDrive28i' || dropdownSubmodel.value === 'xDrive28i') {
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
    el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
    dropdownEngine.appendChild(el4);
} else if (dropdownSubmodel.value === 'xDrive28d') {
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    el4.value = '2.0L L4 N47D20 CRDI DI 180HP';
    el4.textContent = '2.0L L4 N47D20 CRDI DI 180HP';
    dropdownEngine.appendChild(el4);
} else if (dropdownSubmodel.value === 'xDrive35i') {
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
    el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
    dropdownEngine.appendChild(el4);
}
})
}
    });
}

if (value === 'X4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = 'xDrive28i';
            el2.textContent = 'xDrive28i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive35i';
            el3.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el3);

            dropdownSubmodel.addEventListener('change', () => {
             if (dropdownSubmodel.value === 'xDrive28i') {
    dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
    el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
    dropdownEngine.appendChild(el4);
}  else if (dropdownSubmodel.value === 'xDrive35i') {
        // dropdownEngine.classList.remove('hidden');
    dropdownEngine.value = '';
    dropdownEngine.textContent = '';
    let el4 = document.createElement('option');
    el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
    el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
    dropdownEngine.appendChild(el4);
    }
            });

    if (yearSelect.value === '2016' && value === 'X4') {
            let el2 = document.createElement('option');
            el2.value = 'M40i';
            el2.textContent = 'M40i';
            dropdownSubmodel.appendChild(el2);

            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el4 = document.createElement('option');
            el4.value = '3.0L L6 N55B30A Bosch DI 355HP';
            el4.textContent = '3.0L L6 N55B30A Bosch DI 355HP';
            dropdownEngine.appendChild(el4);
}

    if (yearSelect.value === '2017' && value === 'X4') {
            
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el1 = document.createElement('option');
            el1.value = 'xDrive28i';
            el1.textContent = 'xDrive28i';
            dropdownSubmodel.appendChild(el1);

            let el2 = document.createElement('option');
            el2.value = 'M40i';
            el2.textContent = 'M40i';
            dropdownSubmodel.appendChild(el2);

            dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'xDrive28i') {
             dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el4 = document.createElement('option');
            el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
            el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
            dropdownEngine.appendChild(el4);

} else if (dropdownSubmodel.value === 'M40i') {
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el4 = document.createElement('option');
            el4.value = '3.0L L6 N55B30A Bosch DI 355HP';
            el4.textContent = '3.0L L6 N55B30A Bosch DI 355HP';
            dropdownEngine.appendChild(el4);
}
            });
}

}







if (value === 'X5') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = '4.4i';
            el2.textContent = '4.4i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = '4.8is';
            el3.textContent = '4.8is';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = '3.0i';
            el4.textContent = '3.0i';
            dropdownSubmodel.appendChild(el4);

        dropdownSubmodel.addEventListener('change', () => {
if(dropdownSubmodel.value === '4.4i' || dropdownSubmodel.value === '4.8is' || dropdownSubmodel.value === '3.0i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);
        console.log(el4);
        console.log(dropdownbodyType);

if (dropdownSubmodel.value === '4.4i') {
         dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '4.4L V8 N62 Bosch ME-9.2 MFI 315HP';
        el.textContent = '4.4L V8 N62 Bosch ME-9.2 MFI 315HP';
        dropdownEngine.appendChild(el);


} else if (dropdownSubmodel.value === '4.8is') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '4.8L V8 N62B48 Bosch ME-9.2 MFI 355HP';
        el.textContent = '4.8L V8 N62B48 Bosch ME-9.2 MFI 355HP';
        dropdownEngine.appendChild(el);

} else if (dropdownSubmodel.value === '3.0i') {
         dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '3.0L L6 M54 Siemens MS 43 MFI 225HP';
        el.textContent = '3.0L L6 M54 Siemens MS 43 MFI 225HP';
        dropdownEngine.appendChild(el);    
}


} 
// else {
//      dropdownSubmodel.value = '';
//         dropdownSubmodel.textContent = '';
//             // let x3sub = X3Submodel[i];
//             let el = document.createElement('option');
//             // el.value = x3sub;
//             // el.textContent = x3sub;
//             el.value = 'Sub model';
//             el.textContent = 'Sub model';
//             dropdownSubmodel.appendChild(el);
//             console.log(el);
// }
});
    if (yearSelect.value === '2007' && value === 'X5') {

        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = '3.0si';
            el2.textContent = '3.0si';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = '4.8i';
            el3.textContent = '4.8i';
            dropdownSubmodel.appendChild(el3);
dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === '3.0si' || dropdownSubmodel.value === '4.8i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el5.textContent = '3.0L L6 M54 Siemens MS 43 MFI 225HP';
        dropdownEngine.appendChild(el5);
    }
});

} else if (yearSelect.value === '2008' && value === 'X5') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = '3.0si';
            el2.textContent = '3.0si';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = '4.8i';
            el3.textContent = '4.8i';
            dropdownSubmodel.appendChild(el3);
dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === '3.0si') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el5.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el5);
    } else if (dropdownSubmodel.value === '4.8i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        dropdownEngine.appendChild(el5);
}
});
} else if (yearSelect.value === '2009' && value === 'X5') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive30i';
            el2.textContent = 'xDrive30i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive48i';
            el3.textContent = 'xDrive48i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'xDrive35d';
            el4.textContent = 'xDrive35d';
            dropdownSubmodel.appendChild(el4);
dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive30i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el5.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el5);
    } else if (dropdownSubmodel.value === 'xDrive48i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        dropdownEngine.appendChild(el5);
} else if (dropdownSubmodel.value === 'xDrive35d') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M57T2D30 CDI';
        el5.textContent = '3.0L L6 M57T2D30 CDI';
        dropdownEngine.appendChild(el5);
}
});
} else if (yearSelect.value === '2010' && value === 'X5') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive30i';
            el2.textContent = 'xDrive30i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive48i';
            el3.textContent = 'xDrive48i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'xDrive35d';
            el4.textContent = 'xDrive35d';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'M';
            el5.textContent = 'M';
            dropdownSubmodel.appendChild(el5);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive 30i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el5.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el5);
    } else if (dropdownSubmodel.value === 'xDrive 48i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        dropdownEngine.appendChild(el5);
} else if (dropdownSubmodel.value === 'xDrive 35d') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M57T2D30 CDI';
        el5.textContent = '3.0L L6 M57T2D30 CDI';
        dropdownEngine.appendChild(el5);
} else if (dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});
} else if (yearSelect.value === '2011' && value === 'X5') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive35d';
            el3.textContent = 'xDrive35d';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'xDrive50i';
            el4.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'M';
            el5.textContent = 'M';
            dropdownSubmodel.appendChild(el5);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'xDrive35d') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M57T2D30 CDI';
        el5.textContent = '3.0L L6 M57T2D30 CDI';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'xDrive50i' || dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

} 

});

} else if (yearSelect.value === '2012' && value === 'X5') {
        dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});

} else if (yearSelect.value === '2013' && value === 'X5') {
    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'xDrive35d') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M57T2D30 CDI';
        el5.textContent = '3.0L L6 M57T2D30 CDI';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});
} else if (yearSelect.value === '2014' && value === 'X5') {
        dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive35d';
            el3.textContent = 'xDrive35d';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'xDrive50i';
            el4.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'sDrive35i';
            el5.textContent = 'sDrive35i';
            dropdownSubmodel.appendChild(el5);

             dropdownSubmodel.addEventListener('change', () => {
             if (dropdownSubmodel.value === 'xDrive35d') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N57D30T CRDI DI 255HP';
        el5.textContent = '3.0L L6 N57D30T CRDI DI 255HP';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Bosch DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Bosch DI 445HP';
        dropdownEngine.appendChild(el5);
}  else if (dropdownSubmodel.value === 'sDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
}  
});
} else if (yearSelect.value === '2015' && value === 'X5') {
            let el5 = document.createElement('option');
            el5.value = 'M';
            el5.textContent = 'M';
            dropdownSubmodel.appendChild(el5);

            dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'M') {
            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el5 = document.createElement('option');
            el5.value = '4.4L V8 S63R Siemens MS MFI 567HP';
            el5.textContent = '4.4L V8 S63R Siemens MS MFI 567HP';
            dropdownEngine.appendChild(el5);
}
})
} else if (yearSelect.value === '2016' && value === 'X5') {
        //      dropdownSubmodel.value = '';
        // dropdownSubmodel.textContent = '';
        //     let el = document.createElement('option');
        //     el.value = 'Sub model';
        //     el.textContent = 'Sub model';
        //     dropdownSubmodel.appendChild(el);

        //     let el2 = document.createElement('option');
        //     el2.value = 'xDrive35i';
        //     el2.textContent = 'xDrive35i';
        //     dropdownSubmodel.appendChild(el2);

        //     let el3 = document.createElement('option');
        //     el3.value = 'xDrive35d';
        //     el3.textContent = 'xDrive35d';
        //     dropdownSubmodel.appendChild(el3);

        //     let el4 = document.createElement('option');
        //     el4.value = 'xDrive50i';
        //     el4.textContent = 'xDrive50i';
        //     dropdownSubmodel.appendChild(el4);

        //     let el5 = document.createElement('option');
        //     el5.value = 'M';
        //     el5.textContent = 'M';
        //     dropdownSubmodel.appendChild(el5);

        //     let el6 = document.createElement('option');
        //     el6.value = 'sDrive35i';
        //     el6.textContent = 'sDrive35i';
        //     dropdownSubmodel.appendChild(el6);

            let el7 = document.createElement('option');
            el7.value = 'xDrive40e';
            el7.textContent = 'xDrive40e';
            dropdownSubmodel.appendChild(el7);

            dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'xDrive40e') {
            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el5 = document.createElement('option');
            el5.value = '2.0L L4 N20B20A Bosch DI 308HP';
            el5.textContent = '2.0L L4 N20B20A Bosch DI 308HP';
            dropdownEngine.appendChild(el5);
}
});
}
}



if (value === 'X6') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            // console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive50i';
            el3.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el3);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);
    } else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});
    if (yearSelect.value === '2010' && value === 'X6') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive50i';
            el3.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'M';
            el4.textContent = 'M';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'ActiveHybrid';
            el5.textContent = 'ActiveHybrid';
            dropdownSubmodel.appendChild(el5);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);
    } else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
} else if (dropdownSubmodel.value === 'M' || dropdownSubmodel.value === 'ActiveHybrid') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});
}
    if (yearSelect.value === '2011' && value === 'X6') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive50i';
            el3.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'M';
            el4.textContent = 'M';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'ActiveHybrid';
            el5.textContent = 'ActiveHybrid';
            dropdownSubmodel.appendChild(el5);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'M' || dropdownSubmodel.value === 'ActiveHybrid') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
}
});

};
if (yearSelect.value === '2012' && value === 'X6') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);

            let el2 = document.createElement('option');
            el2.value = 'xDrive35i';
            el2.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'xDrive50i';
            el3.textContent = 'xDrive50i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'M';
            el4.textContent = 'M';
            dropdownSubmodel.appendChild(el4);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'xDrive50i' || dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

} 

});
}
 if (yearSelect.value === '2013' && value === 'X6') {
    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'xDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

    } else if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

} else if (dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44A Siemens MS MFI 555HP';
        el5.textContent = '4.4L V8 S63B44A Siemens MS MFI 555HP';
        dropdownEngine.appendChild(el5);
}

});
}
    if (yearSelect.value === '2015' && value === 'X6') {
    if (dropdownSubmodel.value === 'xDrive50i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Bosch DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Bosch DI 445HP';
        dropdownEngine.appendChild(el5);
}
    if (dropdownSubmodel.value === 'sDrive35i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
}
    if (dropdownSubmodel.value === 'M') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4-dr Sport Utility';
        el4.textContent = '4-dr Sport Utility';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63R Siemens MS MFI 567HP';
        el5.textContent = '4.4L V8 S63R Siemens MS MFI 567HP';
        dropdownEngine.appendChild(el5);
}
}
    if (yearSelect.value === '2016' && value === 'X6') {
     dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'xDrive35i';
            el.textContent = 'xDrive35i';
            dropdownSubmodel.appendChild(el);
            console.log(el);

             dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
}
}

if (value === 'Z4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = '2.5i';
            el2.textContent = '2.5i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = '3.0i';
            el3.textContent = '3.0i';
            dropdownSubmodel.appendChild(el3);

             dropdownSubmodel.addEventListener('change', () => {
if(dropdownSubmodel.value === '2.5i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        // let el = document.createElement('option');
        // el.value = 'Body';
        // el.textContent = 'Body';
        // dropdownbodyType.appendChild(el);
        
        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);
        console.log(el4);
        console.log(dropdownbodyType);

         dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP ';
        dropdownEngine.appendChild(el);

        

} else if (dropdownSubmodel.value === '3.0i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        
        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);
        console.log(el4);
        console.log(dropdownbodyType);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el = document.createElement('option');
        el.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP ';
        dropdownEngine.appendChild(el);
}

});

if (yearSelect.value === '2006' && value === 'Z4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            // let x3sub = X3Submodel[i];
            let el = document.createElement('option');
            // el.value = x3sub;
            // el.textContent = x3sub;
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);
            console.log(el);
            // console.log(x3sub);
            console.log(dropdownbodyType);

            let el2 = document.createElement('option');
            el2.value = 'M Roadster';
            el2.textContent = 'M Roadster';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'Roadster 3.0i';
            el3.textContent = 'Roadster 3.0i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'Roadster 3.0si';
            el4.textContent = 'Roadster 3.0si';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'M Coupe';
            el5.textContent = 'M Coupe';
            dropdownSubmodel.appendChild(el5);

            let el6 = document.createElement('option');
            el6.value = 'Coupe 3.0si';
            el6.textContent = 'Coupe 3.0si';
            dropdownSubmodel.appendChild(el6);
}
    dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'M Roadster' || dropdownSubmodel.value === 'M Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.2L L6 S54 BMW MS MFI 315HP';
            el3.textContent = '3.2L L6 S54 BMW MS MFI 315HP';
            dropdownEngine.appendChild(el3);
} else if (dropdownSubmodel.value === 'Roadster 3.0i' || dropdownSubmodel.value === 'Roadster 3.0si' || dropdownSubmodel.value === 'Coupe 3.0si') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            el3.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            dropdownEngine.appendChild(el3);
}
    });
if (yearSelect.value === '2007' && value === 'Z4' || yearSelect.value === '2008' && value === 'Z4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'Coupe 3.0si';
            el2.textContent = 'Coupe 3.0si';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'M Coupe';
            el3.textContent = 'M Coupe';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'M Roadster';
            el4.textContent = 'M Roadster';
            dropdownSubmodel.appendChild(el4);

            let el5 = document.createElement('option');
            el5.value = 'Roadster 3.0i';
            el5.textContent = 'Roadster 3.0i';
            dropdownSubmodel.appendChild(el5);

            let el6 = document.createElement('option');
            el6.value = 'Roadster 3.0si';
            el6.textContent = 'Roadster 3.0si';
            dropdownSubmodel.appendChild(el6);

            dropdownSubmodel.addEventListener('change', () => {
            if (dropdownSubmodel.value === 'Coupe 3.0si') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Coupe';
            el2.textContent = '2-dr Coupe';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.2L L6 N52 Siemens MS 70 MFI 215HP';
            el3.textContent = '3.2L L6 N52 Siemens MS 70 MFI 215HP';
            dropdownEngine.appendChild(el3);
} else if (dropdownSubmodel.value === 'M Coupe') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Coupe';
            el2.textContent = '2-dr Coupe';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.2L L6 S54 BMW MS MFI 315HP';
            el3.textContent = '3.2L L6 S54 BMW MS MFI 315HP';
            dropdownEngine.appendChild(el3);
}
else if (dropdownSubmodel.value === 'M Roadster') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.2L L6 S54 BMW MS MFI 315HP';
            el3.textContent = '3.2L L6 S54 BMW MS MFI 315HP';
            dropdownEngine.appendChild(el3);
} else if (dropdownSubmodel.value === 'Roadster 3.0i' || dropdownSubmodel.value === 'Roadster 3.0si') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            el3.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            dropdownEngine.appendChild(el3);
}
});
}
if (yearSelect.value === '2009' && value === 'Z4' || yearSelect.value === '2010' && value === 'Z4') {
    dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'sDrive30i';
            el2.textContent = 'sDrive 30i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'sDrive35i';
            el3.textContent = 'sDrive35i';
            dropdownSubmodel.appendChild(el3);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'sDrive30i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
            el3.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
            dropdownEngine.appendChild(el3);
    } else if (dropdownSubmodel.value === 'sDrive35i') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            dropdownEngine.appendChild(el3);
}
    });



} else if (yearSelect.value === '2011' && value === 'Z4') {
             dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'sDrive30i';
            el2.textContent = 'sDrive30i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'sDrive35i';
            el3.textContent = 'sDrive35i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'sDrive35is';
            el4.textContent = 'sDrive35is';
            dropdownSubmodel.appendChild(el4);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'sDrive30i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
            el3.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
            dropdownEngine.appendChild(el3);

    } else if (dropdownSubmodel.value === 'sDrive35i') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            dropdownEngine.appendChild(el3);

} else if (dropdownSubmodel.value === 'sDrive35is') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 355HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 355HP';
            dropdownEngine.appendChild(el3);
};
    });

            

} else if (yearSelect.value === '2012' && value === 'Z4') {
              dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';
            let el = document.createElement('option');
            el.value = 'Sub model';
            el.textContent = 'Sub model';
            dropdownSubmodel.appendChild(el);

            let el2 = document.createElement('option');
            el2.value = 'sDrive28i';
            el2.textContent = 'sDrive28i';
            dropdownSubmodel.appendChild(el2);

            let el3 = document.createElement('option');
            el3.value = 'sDrive35i';
            el3.textContent = 'sDrive35i';
            dropdownSubmodel.appendChild(el3);

            let el4 = document.createElement('option');
            el4.value = 'sDrive35is';
            el4.textContent = 'sDrive35is';
            dropdownSubmodel.appendChild(el4);

            dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'sDrive28i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
            el3.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
            dropdownEngine.appendChild(el3);

    } else if (dropdownSubmodel.value === 'sDrive35i') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            dropdownEngine.appendChild(el3);

} else if (dropdownSubmodel.value === 'sDrive35is') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 355HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 355HP';
            dropdownEngine.appendChild(el3);
};
    });

} else if (yearSelect.value === '2013' && value === 'Z4') {
         dropdownSubmodel.addEventListener('change', () => {
    if (dropdownSubmodel.value === 'sDrive28i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
            el3.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
            dropdownEngine.appendChild(el3);

    } else if (dropdownSubmodel.value === 'sDrive35i') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
            dropdownEngine.appendChild(el3);

} else if (dropdownSubmodel.value === 'sDrive35is') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '2-dr Convertible';
            el2.textContent = '2-dr Convertible';
            dropdownbodyType.appendChild(el2);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 335HP';
            el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 335HP';
            dropdownEngine.appendChild(el3);
};
    });

} else if (yearSelect.value === '2016' && value === 'Z4') {
            if (dropdownSubmodel.value === 'sDrive28i') {
            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el3 = document.createElement('option');
            el3.value = '2.0L L4 N20B20A Bosch DI 240HP';
            el3.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
            dropdownEngine.appendChild(el3);
            } 
}

// else if (yearSelect.value === '2010' && value === 'Z4') {
//         dropdownSubmodel.value = '';
//         dropdownSubmodel.textContent = '';
//             let el = document.createElement('option');
//             el.value = 'Sub model';
//             el.textContent = 'Sub model';
//             dropdownSubmodel.appendChild(el);

//             let el2 = document.createElement('option');
//             el2.value = 'sDrive 30i';
//             el2.textContent = 'sDrive 30i';
//             dropdownSubmodel.appendChild(el2);

//             let el3 = document.createElement('option');
//             el3.value = 'sDrive 35i';
//             el3.textContent = 'sDrive 35i';
//             dropdownSubmodel.appendChild(el3);
// }
}

//I3///////////////////I3///////////////////I3//
if (value === 'i3') {
         dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';

        let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'Base';
        el2.textContent = 'Base';
        dropdownSubmodel.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = 'Range Extender';
        el3.textContent = 'Range Extender';
        dropdownSubmodel.appendChild(el3);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'Base') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '-L -- 170HP';
        el5.textContent = '-L -- 170HP';
        dropdownEngine.appendChild(el5);
        
        
} else if (dropdownSubmodel.value === 'Range Extender') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '0.6L L2 W20K06A SFI DI 170HP';
        el5.textContent = '0.6L L2 W20K06A SFI DI 170HP';
        dropdownEngine.appendChild(el5);
};
});

}

//i8/////////////////i8/////////////////i8//
if (value === 'i8') {
         dropdownSubmodel.value = '';
        dropdownSubmodel.textContent = '';

        let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'Base';
        el2.textContent = 'Base';
        dropdownSubmodel.appendChild(el2);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'Base') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '1.5L L3 B38T MEVD 17.2.3 DI 357HP';
        el5.textContent = '1.5L L3 B38T MEVD 17.2.3 DI 357HP';
        dropdownEngine.appendChild(el5);
        }
        });
}

if (yearSelect.value === '2017' && value === '330e') {
      dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'iPerformance';
        el2.textContent = 'iPerformance';
        dropdownSubmodel.appendChild(el2);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'iPerformance') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 247HP';
        el5.textContent = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 247HP';
        dropdownEngine.appendChild(el5);
        }
        });
}

// dropdownModel.addEventListener('change', () => {
if (yearSelect.value === '2011' && value === '750Li') {
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'Base';
        el2.textContent = 'Base';
        dropdownSubmodel.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = 'ActiveHybrid';
        el3.textContent = 'ActiveHybrid';
        dropdownSubmodel.appendChild(el3);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'Base') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        
        
} else if (dropdownSubmodel.value === 'ActiveHybrid') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 455HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 455HP';
        dropdownEngine.appendChild(el5);
};
});
}
if (yearSelect.value === '2011' && value === '750i') {
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'Base';
        el2.textContent = 'Base';
        dropdownSubmodel.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = 'ActiveHybrid';
        el3.textContent = 'ActiveHybrid';
        dropdownSubmodel.appendChild(el3);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'Base') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        
        
} else if (dropdownSubmodel.value === 'ActiveHybrid') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 455HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 455HP';
        dropdownEngine.appendChild(el5);
};
});
};
/////740e xDrive/////
if (yearSelect.value === '2017' && value === '740e xDrive') {
     dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';

    let el1 = document.createElement('option');
        el1.value = 'Sub model';
        el1.textContent = 'Sub model';
        dropdownSubmodel.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = 'iPerformance';
        el2.textContent = 'iPerformance';
        dropdownSubmodel.appendChild(el2);

        // let el3 = document.createElement('option');
        // el3.value = 'ActiveHybrid';
        // el3.textContent = 'ActiveHybrid';
        // dropdownSubmodel.appendChild(el3);

        dropdownSubmodel.addEventListener('change', () => {
        if (dropdownSubmodel.value === 'iPerformance') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 322HP';
        el5.textContent = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 322HP';
        dropdownEngine.appendChild(el5);
        }
        });
}
// });



if (dropdownSubmodel.value === 'Base') {
    console.log('Submodel: Base');
    // dropdownSubmodel.textContent = 'Submodel';
    dropdownSubmodel.value = '';
    dropdownSubmodel.textContent = '';
    let el = document.createElement('option');
        el.value = 'Sub-model';
        el.textContent = 'Submodel';
        dropdownSubmodel.appendChild(el);
    let el2 = document.createElement('option');
        el2.value = 'Base';
        el2.textContent = 'Base';
        dropdownSubmodel.appendChild(el2);
    // const submodelOption = document.querySelector('#submodel');
    // dropdownSubmodel.appendChild(submodelOption);
}
    dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
    let el3 = document.createElement('option');
        el3.value = 'Select an option';
        el3.textContent = 'Select an option';
        dropdownbodyType.appendChild(el3);
    

})
// if (value === 'BMW' && )
dropdownbodyType.addEventListener('change', (event) => {
    const value = event.target.value;
    dropdownEngine.classList.remove('hidden');
    // updateDropdown(value)
//     if (dropdownSubmodel.textContent === 'Sub model') {
//         dropdownbodyType.textContent = 'Body';
// }
});

// dropdownEngine.addEventListener('change', () => {
//     dropdownTransmission
// });
dropdownSubmodel.addEventListener('change', (event) => {
    const value = event.target.value;    
// if (dropdownModel.value === '325Ci' && value === 'Base') { if statement beginning line
    // console.log('Hello Base');
    // console.log(dropdownModel.value);
if (value === 'Base') {
    switch (dropdownModel.value) {
    case '1 Series M':
        if (dropdownModel.value === '1 Series M') {
        let el = document.createElement('option');
        el.value = '2-dr Coupe';
        el.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el);

        let el2 = document.createElement('option');
        el2.value = '3.0L L6 N54B30A Siemens MS 70 DI 335HP';
        el2.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 335HP';
        dropdownEngine.appendChild(el2);
};
    break;
    case '128i':
        if (dropdownModel.value === '128i') {
        // let el = document.createElement('option');
        // el.value = '2-dr Coupe';
        // el.textContent = '2-dr Coupe';
        // dropdownbodyType.appendChild(el);

        let el = document.createElement('option');
        el.value = '2-dr Coupe';
        el.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el);

        let el2 = document.createElement('option');
        el2.value = '2-dr Convertible';
        el2.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el2);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el5.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el6);
        };
});
};
    break;
    case '135i':
        if (dropdownModel.value === '135i') {
        let el = document.createElement('option');
        el.value = 'Body';
        el.textContent = 'Body';
        dropdownbodyType.appendChild(el);

        let el1 = document.createElement('option');
        el1.value = '2-dr Coupe';
        el1.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = '2-dr Convertible';
    el2.textContent = '2-dr Convertible';
    dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el3.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el3);

    if (yearSelect.value === '2011' && dropdownModel.value === '135i') {
        dropdownbodyType.value ='';
        dropdownbodyType.textContent = '';
        let el = document.createElement('option');
        el.value = 'Body';
        el.textContent = 'Body';
        dropdownbodyType.appendChild(el);

        let el1 = document.createElement('option');
        el1.value = '2-dr Coupe';
        el1.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = '2-dr Convertible';
    el2.textContent = '2-dr Convertible';
    dropdownbodyType.appendChild(el2);

    dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el3);
    });
};
};
    break;
    case '135is':
        if (dropdownModel.value === '135is') {
             dropdownbodyType.value ='';
        dropdownbodyType.textContent = '';
        let el = document.createElement('option');
        el.value = 'Body';
        el.textContent = 'Body';
        dropdownbodyType.appendChild(el);

        let el1 = document.createElement('option');
        el1.value = '2-dr Coupe';
        el1.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el1);

    let el2 = document.createElement('option');
    el2.value = '2-dr Convertible';
    el2.textContent = '2-dr Convertible';
    dropdownbodyType.appendChild(el2);

      dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el3);
};
    break;
    case '228i':
        if (dropdownModel.value === '228i') {
        let el1 = document.createElement('option');
        el1.value = '2-dr Coupe';
        el1.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el1);

         dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);

        if (yearSelect.value === '2015' && dropdownModel.value === '228i') {
         let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

         let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change',  () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = 'Engine';
        el4.textContent = 'Engine';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = 'Not sure';
        el5.textContent = 'Not sure';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);

        let el7 = document.createElement('option');
        el7.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el7.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el7);
        });
}
}
    break;
    case '228i xDrive':
        if (dropdownModel.value === '228i xDrive') {
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

         let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

       
        dropdownbodyType.addEventListener('change',  () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = 'Engine';
        el4.textContent = 'Engine';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = 'Not sure';
        el5.textContent = 'Not sure';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);

        let el7 = document.createElement('option');
        el7.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el7.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el7);
        });
    }
    break;
    case '230i':
        if (dropdownModel.value === '230i') {
         let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

         let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el3.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el3);
})
}
    break;
    case '230i xDrive':
        if (dropdownModel.value === '230i xDrive') {
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

         let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el3.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el3);
})
}
    break;
    case '320i':
        if (dropdownModel.value === '320i') {
         let el1 = document.createElement('option');
        el1.value = '4-dr Sedan';
        el1.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el1);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 N20B20A Siemens MS 70 MFI 180HP';
        el3.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 180HP';
        dropdownEngine.appendChild(el3);

        if (yearSelect.value === '2014' && dropdownModel.value === '320i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 N20B20A Bosch DI 180HP';
        el3.textContent = '2.0L L4 N20B20A Bosch DI 180HP';
        dropdownEngine.appendChild(el3);
}
};
    break;
    case '320i xDrive':
        if (dropdownModel.value === '320i xDrive') {
         let el1 = document.createElement('option');
        el1.value = '4-dr Sedan';
        el1.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el1);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 N20B20A Siemens MS 70 MFI 180HP';
        el3.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 180HP';
        dropdownEngine.appendChild(el3);

        if (yearSelect.value === '2014' && dropdownModel.value === '320i xDrive') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 N20B20A Bosch DI 180HP';
        el3.textContent = '2.0L L4 N20B20A Bosch DI 180HP';
        dropdownEngine.appendChild(el3);
}
};
    break;
    case '325Ci':
       
        if (dropdownModel.value === '325Ci') {
        let el = document.createElement('option');
        el.value = '2-dr Coupe';
        el.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el);
    
    let el2 = document.createElement('option');
    el2.value = '2-dr Convertible';
    el2.textContent = '2-dr Convertible';
    dropdownbodyType.appendChild(el2);

dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' ) {
    console.log('2-dr Coupe');
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'not sure';
        el4.textContent = 'not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el5.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el = document.createElement('option');
        el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el);
}
})
        } else {
    // dropdownbodyType.removeChild(el);
    // dropdownbodyType.removeChild(el2);
    // el.value = 'none';
    // el.textContent = 'none';
    let el3 = document.createElement('option');
    el3.value = 'Sub model';
    el3.textContent = 'Sub model'
    dropdownSubmodel.appendChild(el3);
    dropdownbodyType.value = 'Body';
    dropdownbodyType.textContent = 'Body';
}
// if (dropdownModel.value !== value) {
//     // dropdownSubmodel.textContent = ' ';
//     console.log(dropdownSubmodel);
// }
// console.log(dropdownModel.value);
    break;
    case '325i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '325i') {
        // dropdownbodyType.value = '';
        // dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        let el4 = document.createElement('option');
        el4.value = '4-dr Wagon';
        el4.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el4);

        // console.log(yearSelect.value);

        if (yearSelect.value = '2006') {
            dropdownbodyType.value = '';
            dropdownbodyType.textContent = '';

            let el3 = document.createElement('option');
            el3.value = '4-dr Sedan';
            el3.textContent = '4-dr Sedan';
            dropdownbodyType.appendChild(el3);

            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el = document.createElement('option');
            el.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            el.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            dropdownEngine.appendChild(el);

}

    dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    console.log('4-dr Sedan');
        // dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'not sure';
        el4.textContent = 'not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el5.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el6);
} 

})


    } else {
        dropdownbodyType.removeChild(el3)
}

    break;
    case '325xi':
       
        if (dropdownModel.value === '325xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
       
        let el4 = document.createElement('option');
        el4.value = '4-dr Wagon';
        el4.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el4);


        dropdownbodyType.addEventListener('change', () => {
if (yearSelect.value === '2005' && value === '325xi' && dropdownbodyType.value === '4-dr Sedan' || yearSelect.value === '2005' && value === '325xi' && dropdownbodyType.value === '4-dr Wagon' ) {
    console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'not sure';
        el4.textContent = 'not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el5.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el6);
} 
// else 
if (yearSelect.value === '2006' && value === '325xi' && dropdownbodyType.value === '4-dr Sedan' || yearSelect.value === '2006' && value === '325xi' || yearSelect.value === '2006' && dropdownbodyType.value === '4-dr Wagon') {
    

            // console.log('Hello 2006 body');
            dropdownEngine.classList.remove('hidden');
            dropdownEngine.value = '';
            dropdownEngine.textContent = '';
            let el2 = document.createElement('option');
            el2.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            el2.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
            dropdownEngine.appendChild(el2);
} 
})

    } else {
        dropdownbodyType.removeChild(el3)
}    
    break;
    case '328d':
        if (dropdownModel.value === '328d') {
        let el1 = document.createElement('option');
        el1.value = '4-dr Sedan';
        el1.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el1);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el3 = document.createElement('option');
        el3.value = '2.0L L4 N47D20 CRDI DI 180HP';
        el3.textContent = '2.0L L4 N47D20 CRDI DI 180HP';
        dropdownEngine.appendChild(el3);

}
    break;
    case '328d xDrive':
        if (dropdownModel.value === '328d xDrive') {
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Wagon';
        el3.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el4 = document.createElement('option');
        el4.value = '2.0L L4 N47D20 CRDI DI 180HP';
        el4.textContent = '2.0L L4 N47D20 CRDI DI 180HP';
        dropdownEngine.appendChild(el4);
        });
}
    break;
    case '328i':
        if (dropdownModel.value === '328i') {
        
        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible' || dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});
if (yearSelect.value === '2009' && dropdownModel.value === '328i' || yearSelect.value === '2010' && dropdownModel.value === '328i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '4-dr Wagon') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
};
});
}
if (yearSelect.value === '2011' && dropdownSubmodel.value === '328i') {
    dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '4-dr Wagon') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
};
});        
}
if (yearSelect.value === '2012' && dropdownModel.value === '328i') {
    dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
         dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el5.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);

} else if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '4-dr Wagon') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
};
});
}
if (yearSelect.value === '2013' && dropdownModel.value === '328i') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el5.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
        }
        });
} 
    if (yearSelect.value === '2014' && dropdownModel.value === '328i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
}
};
    break;
    case '328i GT xDrive':
        if (dropdownModel.value === '328i GT xDrive') {
        let el2 = document.createElement('option');
        el2.value = '4-dr Hatchback';
        el2.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el2);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        
        if (yearSelect.value === '2015' && dropdownModel.value === '328i GT xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = '4-dr Hatchback';
        el2.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el2);

        dropdownbodyType.addEventListener('change', () => {
         dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
        });
}
}
    break;
    case '328i xDrive':
        if (dropdownModel.value === '328i xDrive') {
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});
if (yearSelect.value === '2011' && dropdownModel.value === '328i xDrive') {
    if (dropdownModel.value === '328i xDrive') {
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '4-dr Wagon') {
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});

}
}
    if (yearSelect.value === '2012' && dropdownModel.value === '328i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = 'Body';
        el3.textContent = 'Body';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '2-dr Coupe') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el6);
} else if (dropdownbodyType.value === '4-dr Wagon') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
})

};
if (yearSelect.value === '2013' && dropdownModel.value === '328i xDrive') {
     dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = 'Body';
        el3.textContent = 'Body';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '4-dr Sedan';
        el4.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Coupe';
        el5.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
         dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el5.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
        } else if (dropdownbodyType.value === '2-dr Coupe') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el6);
}
        });
}
    if (yearSelect.value === '2014' && dropdownModel.value === '328i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = 'Body';
        el3.textContent = 'Body';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '4-dr Sedan';
        el4.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

         let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
});
}
        }
    break;
    case '328xi':
        if (dropdownModel.value === '328xi') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Sedan';
        el3.textContent = '2-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Wagon';
        el5.textContent = '2-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe' ) {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        el6.textContent = '3.0L L6 N51B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

}
    break;
    case '330Ci':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '330Ci') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible' ) {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el5.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '330e':
        if (dropdownModel.value === '330e') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 247HP';
        el5.textContent = '2.0L L4 B48A20M0 MEVD 17.2.3 DI 247HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '330i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '330i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el5.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        dropdownEngine.appendChild(el5);
} 
        if (yearSelect.value === '2006' && value === '330i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
});

        if (yearSelect.value === '2017' && dropdownModel.value === '330i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B46B20O0MEVD 17.2.3 DI 248HP';
        el5.textContent = '2.0L L4 B46B20O0MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el5);
}

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '330i GT xDrive':
        if (dropdownModel.value === '330i GT xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el5.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '330i xDrive':
        if (dropdownModel.value === '330i xDrive') {
         let el3 = document.createElement('option');
        el3.value = 'Body';
        el3.textContent = 'Body';
        dropdownbodyType.appendChild(el3);

         let el4 = document.createElement('option');
        el4.value = '4-dr Sedan';
        el4.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el4);

         let el5 = document.createElement('option');
        el5.value = '4-dr Wagon';
        el5.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el7 = document.createElement('option');
        el7.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el7.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el7);
})
}
    break;
    case '330xi':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '330xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon' ) {
    console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el5.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
if (yearSelect.value === '2006' && value === '330xi') {
    dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '335d':
        if (dropdownModel.value === '335d') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M57T2D30 CDI';
        el5.textContent = '3.0L L6 M57T2D30 CDI';
        dropdownEngine.appendChild(el5);
        };
});
};
    break;
    case '335i':
        if (dropdownModel.value === '335i') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Convertible';
        el5.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Convertible' || dropdownbodyType.value === '2-dr Coupe') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);

} 

});
if (yearSelect.value === '2011' && dropdownModel.value === '335i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';        

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Convertible';
        el5.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Convertible' || dropdownbodyType.value === '2-dr Coupe') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
} 
});
}
if (yearSelect.value === '2014' && dropdownModel.value === '335i') {
    dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

}

}
    break;
    case '335i GT xDrive':
        if (dropdownModel.value === '335i GT xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);  

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '335i xDrive':
        if (dropdownModel.value === '335i xDrive') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);        

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);
} 

});
if (yearSelect.value === '2011' && dropdownModel.value === '335i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';        

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);        

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        // let el3 = document.createElement('option');
        // el3.value = 'Engine';
        // el3.textContent = 'Engine';
        // dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});

}
    if (yearSelect.value === '2012' && dropdownModel.value === '335i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
} else if (yearSelect.value === '2013' && dropdownModel.value === '335i xDrive') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el3);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);


        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
        });
} else if (yearSelect.value === '2014' && dropdownModel.value === '335i xDrive') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

         let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
         });
}
};
    break;
    case '335is':
        if (dropdownModel.value === '335is') {
        //  dropdownbodyType.value = '';
        // dropdownbodyType.textContent = '';        

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);        

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        // let el3 = document.createElement('option');
        // el3.value = 'Engine';
        // el3.textContent = 'Engine';
        // dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});
};
    break;
    case '335xi':
        if (dropdownModel.value === '335xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
});
if (yearSelect.value === '2008' && value === '335xi') {
    dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
    let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

    let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '340i':
        if (dropdownModel.value === '340i') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el5.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '340i GT xDrive':
        if (dropdownModel.value === '340i') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el5.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '340i xDrive':
        if (dropdownModel.value === '340i xDrive') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el5.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '428i':
        if (dropdownModel.value === '428i') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

    dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
});
}
    break;
    case '428i Gran Coupe':
        if (dropdownModel.value === '428i Gran Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Hatchback';
        el2.textContent = 'Hatchback';
        dropdownbodyType.appendChild(el2);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
}
    break;
    case '428i xDrive Gran Coupe':
        if (dropdownModel.value === '428i xDrive Gran Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Hatchback';
        el2.textContent = 'Hatchback';
        dropdownbodyType.appendChild(el2);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
}
    break;
    case '428i xDrive':
         if (dropdownModel.value === '428i xDrive') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

    dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = 'Not sure';
        el4.textContent = 'Not sure';
        dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el5.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el5);

        let el6 = document.createElement('option');
        el6.value = '2.0L L4 N26B20A Bosch DI 240HP';
        el6.textContent = '2.0L L4 N26B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el6);
});
}
    break;
    case '430i':
        if (dropdownModel.value === '430i') {
         dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        el6.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        dropdownEngine.appendChild(el6);
});
}
    break;
    case '430i Gran Coupe':
         if (dropdownModel.value === '430i Gran Coupe') {
         dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);


        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        el6.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        dropdownEngine.appendChild(el6);
});
}
    break;
    case '430i xDrive':
         if (dropdownModel.value === '430i xDrive') {
         dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        el6.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        dropdownEngine.appendChild(el6);
});
}
    break;
    case '430i xDrive Gran Coupe':
        if (dropdownModel.value === '430i xDrive Gran Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);


        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        el6.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 248HP';
        dropdownEngine.appendChild(el6);
});
        }
    break;
    case '435i':
         if (dropdownModel.value === '435i') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el6.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el6);
});

}
    break;
    case '435i Gran Coupe':
          if (dropdownModel.value === '435i Gran Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Hatchback';
        el2.textContent = 'Hatchback';
        dropdownbodyType.appendChild(el2);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el6.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el6);
        });
    }
    break;
    case '435i xDrive':
        if (dropdownModel.value === '435i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3)

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el6.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el6);
});
        if (yearSelect.value === '2015' && dropdownModel.value === '435i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3)

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4)

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el6.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el6);
});
}
}
    break;
    case '435i xDrive Gran Coupe':
        if (dropdownModel.value === '435i xDrive Gran Coupe') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Hatchback';
        el2.textContent = 'Hatchback';
        dropdownbodyType.appendChild(el2);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el6.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el6);
        });
    }
    break;
    case '440i':
         if (dropdownModel.value === '440i') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el6.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el6);
});

}
    break;
     case '440i Gran Coupe':
         if (dropdownModel.value === '440i Gran Coupe') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el6.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el6);
});

}
    break;
     case '440i xDrive':
         if (dropdownModel.value === '440i xDrive') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el6.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el6);
});

}
    break;
    case '440i xDrive Gran Coupe':
         if (dropdownModel.value === '440i xDrive Gran Coupe') {
        dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el6 = document.createElement('option');
        el6.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el6.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el6);
});

}
    break;
    case '525i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '525i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2.5L L6 M54 Siemens MS MFI 184HP';
        el5.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
if (yearSelect.value === '2006' && value === '525i' || yearSelect.value === '2007' && value === '525i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '525xi':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '525xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '528i':
        if (dropdownModel.value === '528i') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N53B30A Siemens MS 70 MFI 230HP';
        el4.textContent = '3.0L L6 N53B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2009' && dropdownModel.value === '528i' || yearSelect.value === '2010' && dropdownModel.value === '528i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el4.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el4);
    }
        })
        }
        if (yearSelect.value === '2011' && dropdownModel.value === '528i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        // dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N52B30A Siemens MS 70 MFI 240HP';
        el4.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el4);
};
        // });
}
        if (yearSelect.value === '2012' && dropdownModel.value === '528i') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        // dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el4.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el4);
};
}
    if (yearSelect.value === '2014' && dropdownModel.value === '528i') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el4);
}
}
    
    break;
    case '528i xDrive':
        if (dropdownModel.value === '528i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        el4.textContent = '3.0L L6 N52B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2012' && dropdownModel.value === '528i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        el4.textContent = '2.0L L4 N20B20A Siemens MS 70 MFI 240HP';
        dropdownEngine.appendChild(el4);
}
        if (yearSelect.value === '2014' && dropdownModel.value === '528i xDrive') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '2.0L L4 N20B20A Bosch DI 240HP';
        el4.textContent = '2.0L L4 N20B20A Bosch DI 240HP';
        dropdownEngine.appendChild(el4);
}
};
    break;
    case '528xi':
        if (dropdownModel.value === '528xi') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N53B30A Siemens MS 70 MFI 230HP';
        el4.textContent = '3.0L L6 N53B30A Siemens MS 70 MFI 230HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '530e': 
        if (dropdownModel.value === '530e') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2.0L L4 B48A20BM0 MEVD 17.2.3 DI 248HP';
        el4.textContent = '2.0L L4 B48A20BM0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el4);
}
    break;
     case '530e xDrive': 
        if (dropdownModel.value === '530e xDrive') {
        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2.0L L4 B48A20BM0 MEVD 17.2.3 DI 248HP';
        el4.textContent = '2.0L L4 B48A20BM0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '530i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '530i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        el5.textContent = '3.0L L6 M54 Siemens MS 45 MFI 225HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
if (yearSelect.value === '2006' && value === '530i' || yearSelect.value === '2007' && value === '530i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);
}
    if (yearSelect.value === '2017' && dropdownModel.value === '530i') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el5.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el5);
}
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '530i xDrive':
         if (dropdownModel.value === '530i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        el5.textContent = '2.0L L4 B46B20O0 MEVD 17.2.3 DI 248HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '530xi':
        if (dropdownModel.value === '530xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '4-dr Wagon';
        el4.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon' ) {
    console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        // let el3 = document.createElement('option');
        // el3.value = 'Engine';
        // el3.textContent = 'Engine';
        // dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        el5.textContent = '3.0L L6 N52 Siemens MS 70 MFI 215HP';
        dropdownEngine.appendChild(el5);

}
        })
    }
    break;
    case '535d':
        if (dropdownModel.value === '535d') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N57D30T CRDI DI 255HP';
        el4.textContent = '3.0L L6 N57D30T CRDI DI 255HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '535d xDrive':
        if (dropdownModel.value === '535d xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N57D30T CRDI DI 255HP';
        el4.textContent = '3.0L L6 N57D30T CRDI DI 255HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '535i':
        if (dropdownModel.value === '535i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el4.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2011' && dropdownModel.value === '535i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el4);

};
}
    break;
    case '535i GT':
        if (dropdownModel.value === '535i GT') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '535i GT xDrive':
        if (dropdownModel.value === '535i GT xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el4);
}

    break;
    case '535i xDrive':
        if (dropdownModel.value === '535i xDrive') {
        // let el2 = document.createElement('option');
        // el2.value = '4-dr Sedan';
        // el2.textContent = '4-dr Sedan';
        // dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '4-dr Wagon';
        el4.textContent = '4-dr Wagon';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon' ) {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);
};
        });
        if (yearSelect.value === '2011' && dropdownModel.value === '535i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 300HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 300HP';
        dropdownEngine.appendChild(el5);
};
        }
    break;
    case '535xi':
        if (dropdownModel.value === '535xi') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el4.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '540i':
        if (dropdownModel.value === '540i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el4.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el4);
}
    break;
     case '540i xDrive':
        if (dropdownModel.value === '540i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el4.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case '545i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '545i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '4-dr Wagon' ) {
    console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        el5.textContent = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '550i':
        if (dropdownModel.value === '550i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2011' && dropdownModel.value === '550i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
};
        if (yearSelect.value === '2014' && dropdownModel.value === '550i') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS MFI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS MFI 445HP';
        dropdownEngine.appendChild(el5);
}
        if (yearSelect.value === '2015' && dropdownModel.value === '550i') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '550i GT':
        if (dropdownModel.value === '550i GT') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2014' && dropdownModel.value === '550i GT') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '550i GT xDrive':
        if (dropdownModel.value === '550i GT xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

         if (yearSelect.value === '2014' && dropdownModel.value === '550i GT xDrive') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Hatchback';
        el3.textContent = '4-dr Hatchback';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '550i xDrive':
        if (dropdownModel.value === '550i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);

         if (yearSelect.value === '2014' && dropdownModel.value === '550i GT') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '640i':
        if (dropdownModel.value === '640i') {
         let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

         let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);

         let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el3);
})

}
    break;
    case '640i Gran Coupe':
        if (dropdownModel.value === '640i Gran Coupe') {
         let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        //  dropdownbodyType.addEventListener('change', () => {
        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el3);
// });
        }
    break;
    case '640i xDrive Gran Coupe':
        if (dropdownModel.value === '640i xDrive Gran Coupe') {
        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        //  dropdownbodyType.addEventListener('change', () => {
        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el3);
}
    break;
    case '640i xDrive':
        if (dropdownModel.value === '640i xDrive') {
         let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el3.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el3);
}
    break;
    case '645Ci':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '645Ci') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible' ) {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        el5.textContent = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '650i':
        if (dropdownModel.value === '650i') {
         let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 350HP';
        dropdownEngine.appendChild(el5);
        });
        if (yearSelect.value === '2012' && dropdownModel.value === '650i') {
         let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        });
}
if (yearSelect.value === '2013' && dropdownModel.value === '650i') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS MFI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS MFI 450HP';
        dropdownEngine.appendChild(el5);
        });
}
if (yearSelect.value === '2014' && dropdownModel.value === '650i') {
     dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        });
}

}
    break;
    case '650i Gran Coupe':
        if (dropdownModel.value === '650i Gran Coupe') {
         let el4 = document.createElement('option');
        el4.value = '4-dr Sedan';
        el4.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el4);

        // dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 450HP';
        dropdownEngine.appendChild(el5);
        // });

        if (yearSelect.value === '2014' && dropdownModel.value === '650i Gran Coupe') {
         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS MFI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS MFI 450HP';
        dropdownEngine.appendChild(el5);
        });
        }
        if (yearSelect.value === '2015' && dropdownModel.value === '650i Gran Coupe') {
         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        });
}
}
    break;
    case '650i xDrive':
        if (dropdownModel.value === '650i xDrive') {
          let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        })
        if (yearSelect.value === '2013' && dropdownModel.value === '650i xDrive') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        })
}
        if (yearSelect.value === '2014' && dropdownModel.value === '650i xDrive' ) {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        })
}
}
    break;
    case '650i xDrive Gran Coupe':
        if (dropdownModel.value === '650i xDrive Gran Coupe') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 450HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2014' && dropdownModel.value === '650i xDrive Gran Coupe' ) {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        })
}
}
    break;
    case '740e xDrive':
        if (dropdownModel.value === '740e xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 450HP';
        dropdownEngine.appendChild(el5);
    }
    break;
    case '740Ld xDrive':
        if (dropdownModel.value === '740Ld xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 450HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 450HP';
        dropdownEngine.appendChild(el5);
    }
    break;
    case '740Li':
        if (dropdownModel.value === '740Li') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2013' && dropdownModel.value === '740Li') {
         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el5);
        })
        }
};
    break;
    case '740Li xDrive':
        if (dropdownModel.value === '740Li xDrive') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el5);
}
    break;
    case '740i':
        if (dropdownModel.value === '740i') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        el5.textContent = '3.0L L6 N54B30A Siemens MS 70 DI 300HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2013' && dropdownModel.value === '740i') {
         dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 N55B30A Bosch DI 315HP';
        el5.textContent = '3.0L L6 N55B30A Bosch DI 315HP';
        dropdownEngine.appendChild(el5);
        })
        }
        if (yearSelect.value === '2016' && dropdownModel.value === '740i') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el5.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el5);
        })
        }
};
    break;
    case '740i xDrive':
        if (dropdownModel.value === '740i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        //  dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 B58B30M0 Bosch DI 320HP';
        el5.textContent = '3.0L L6 B58B30M0 Bosch DI 320HP';
        dropdownEngine.appendChild(el5);
        // })
        }
    break;
    case '745Li':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '745Li') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        el5.textContent = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '745i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '745i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        el5.textContent = '4.4L V8 N62 Bosch HFM Motronic MFI 325HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '750Li':
        if (dropdownModel.value === '750Li') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = '2-dr Convertible';
        // el4.textContent = '2-dr Convertible';
        // dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48B Bosch ME-9.2 MFI 355HP';
        el5.textContent = '4.8L V8 N62B48B Bosch ME-9.2 MFI 355HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2009' && dropdownModel.value === '750Li' || yearSelect.value === '2010' && dropdownModel.value === '750Li') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el4 = document.createElement('option');
        el4.value = 'Body';
        el4.textContent = 'Body';
        dropdownbodyType.appendChild(el4);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        };
        });
};
    if (yearSelect.value === '2013' && dropdownModel.value === '750Li') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 444HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 444HP';
        dropdownEngine.appendChild(el5);
}
if (yearSelect.value === '2014' && dropdownModel.value === '750Li') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
};


    break;
    case '750Li xDrive':
        if (dropdownModel.value === '750Li xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el4 = document.createElement('option');
        el4.value = 'Body';
        el4.textContent = 'Body';
        dropdownbodyType.appendChild(el4);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        }        
});
        if (yearSelect.value === '2014' && dropdownModel.value === '750Li xDrive') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        
});
}
};
    break;
    case '750i':
        if (dropdownModel.value === '750i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '4.8L V8 N62B48 Bosch ME-9.2 MFI 355HP';
        el5.textContent = '4.8L V8 N62B48 Bosch ME-9.2 MFI 355HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2009' && dropdownModel.value === '750i' || yearSelect.value === '2010' && dropdownModel.value === '750i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el4 = document.createElement('option');
        el4.value = 'Body';
        el4.textContent = 'Body';
        dropdownbodyType.appendChild(el4);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        };
        });
};
        if (yearSelect.value === '2014' && dropdownModel.value === '750i') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
        });
}
        if (yearSelect.value === '2016' && dropdownModel.value === '750i') {
        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Bosch DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Bosch DI 445HP';
        dropdownEngine.appendChild(el5);
        });
}
};
    break;
    case '750i xDrive':
        if (dropdownModel.value === '750i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el4 = document.createElement('option');
        el4.value = 'Body';
        el4.textContent = 'Body';
        dropdownbodyType.appendChild(el4);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        el5.textContent = '4.4L V8 N63B44A Siemens MS MFI 400HP';
        dropdownEngine.appendChild(el5);
        }
        });
    if (yearSelect.value === '2013' && dropdownModel.value === '750i xDrive') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 444HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 444HP';
        dropdownEngine.appendChild(el5);
}

    if (yearSelect.value === '2013' && dropdownModel.value === '750i xDrive') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Siemens MS DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Siemens MS DI 445HP';
        dropdownEngine.appendChild(el5);
}
    if (yearSelect.value === '2016' && dropdownModel.value === '750i xDrive') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 N63B44B Bosch DI 445HP';
        el5.textContent = '4.4L V8 N63B44B Bosch DI 445HP';
        dropdownEngine.appendChild(el5);
}
}
    break;
    case '760Li':
       
        if (dropdownModel.value === '760Li') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
    
        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan' ) {
   
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';

        let el5 = document.createElement('option');
        el5.value = '6.0L V12 N73 Bosch HFM Motronic MFI 438HP';
        el5.textContent = '6.0L V12 N73 Bosch HFM Motronic MFI 438HP';
        dropdownEngine.appendChild(el5);

} 

});
    if (yearSelect.value === '2010' && dropdownModel.value === '760Li') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '6.0L V12 N74B60A DI MFI 438HP';
        el5.textContent = '6.0L V12 N74B60A DI MFI 438HP';
        dropdownEngine.appendChild(el5);
};
    if (yearSelect.value === '2013' && dropdownModel.value === '760Li') {
    dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '6.0L V12 N74B60A DI MFI 535HP';
        el5.textContent = '6.0L V12 N74B60A DI MFI 535HP';
        dropdownEngine.appendChild(el5);
    }

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case '760i':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === '760i') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (dropdownbodyType.value === '4-dr Sedan') {
    // console.log('4-dr Sedan');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el3 = document.createElement('option');
        el3.value = 'Engine';
        el3.textContent = 'Engine';
        dropdownEngine.appendChild(el3);

        // let el4 = document.createElement('option');
        // el4.value = 'not sure';
        // el4.textContent = 'not sure';
        // dropdownEngine.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '6.0L V12 N62 Bosch HFM Motronic MFI 438HP';
        el5.textContent = '6.0L V12 N62 Bosch HFM Motronic MFI 438HP';
        dropdownEngine.appendChild(el5);

        // let el6 = document.createElement('option');
        // el6.value = '2.5L L6 M56 Siemens MS MFI 184HP';
        // el6.textContent = '2.5L L6 M56 Siemens MS MFI 184HP';
        // dropdownEngine.appendChild(el6);
} 
// else if (dropdownbodyType.value === '2-dr Convertible') {
//         dropdownEngine.value = '';
//         dropdownEngine.textContent = '';
//         let el = document.createElement('option');
//         el.value = '2.5L L6 M54 Siemens MS MFI 184HP';
//         el.textContent = '2.5L L6 M54 Siemens MS MFI 184HP';
//         dropdownEngine.appendChild(el);
// }
if (yearSelect.value === '2006' && value === '760i') {
    let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '6.0L V12 N73 Bosch HFM Motronic MFI 438HP';
        el5.textContent = '6.0L V12 N73 Bosch HFM Motronic MFI 438HP';
        dropdownEngine.appendChild(el5);
}
})

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case 'ActiveHybrid 3':
        if (dropdownModel.value === 'ActiveHybrid 3') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 335HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 335HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case 'ActiveHybrid 5':
        if (dropdownModel.value === 'ActiveHybrid 5') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 335HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 335HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case 'ActiveHybrid 7':
        if (dropdownModel.value === 'ActiveHybrid 7') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 349HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 349HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case 'Alpina B6 xDrive Gran Coupe':
        if (dropdownModel.value === 'Alpina B6 xDrive Gran Coupe') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 540HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 540HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2016' && dropdownModel.value === 'Alpina B6 xDrive Gran Coupe') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 600HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 600HP';
        dropdownEngine.appendChild(el4);

}
}
    break;
    case 'Alpina B7':
        if (dropdownModel.value === 'Alpina B7') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N62B44 Bosch ME-9.2.1 MFI 500HP';
        el4.textContent = '4.4L V8 N62B44 Bosch ME-9.2.1 MFI 500HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2011' && dropdownModel.value === 'Alpina B7') {
         let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        el4.textContent = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        dropdownEngine.appendChild(el4);
};

        if (yearSelect.value === '2013' && dropdownModel.value === 'Alpina B7') {
        dropdownbodyType.value = '';
        dropdownModel.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 543HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 543HP';
        dropdownEngine.appendChild(el4);
};
}
    break;
    case 'Alpina B7 xDrive':
        if (dropdownModel.value === 'Alpina B7 xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        el4.textContent = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        dropdownEngine.appendChild(el4);

         if (yearSelect.value === '2013' && dropdownModel.value === 'Alpina B7 xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 543HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 543HP';
        dropdownEngine.appendChild(el4);
};
};
    break;
    case 'Alpina B7L':
        if (dropdownModel.value === 'Alpina B7L') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        el4.textContent = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2013' && dropdownModel.value === 'Alpina B7L') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 543HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 543HP';
        dropdownEngine.appendChild(el4);
};
};
    break;
    case 'Alpina B7L xDrive':
        if (dropdownModel.value === 'Alpina B7L xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        el4.textContent = '4.4L V8 N63M10A Siemens MS MFI 500HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2013' && dropdownModel.value === 'Alpina B7L xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 543HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 543HP';
        dropdownEngine.appendChild(el4);
};

};
    break;
    case 'M2':
        if (dropdownModel.value === 'M2') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 365HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 365HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case 'M235i':
        if (dropdownModel.value === 'M235i') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 N63M20A Siemens MS DI 543HP';
        el4.textContent = '4.4L V8 N63M20A Siemens MS DI 543HP';
        dropdownEngine.appendChild(el4);

        if (yearSelect.value === '2016' && dropdownModel.value === 'M235i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 322HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 322HP';
        dropdownEngine.appendChild(el4);
}
}
    break;
    case 'M235i xDrive':
        if (dropdownModel.value === 'M235i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '3.0L L6 N55B30A Bosch DI 322HP';
        el4.textContent = '3.0L L6 N55B30A Bosch DI 322HP';
        dropdownEngine.appendChild(el4);
}
    break;
    case 'M240i':
         if (dropdownModel.value === 'M240i') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

         let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);  

         let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el4 = document.createElement('option');
        el4.value = '3.0L L6 B58M30O0 Bosch DI 335HP';
        el4.textContent = '3.0L L6 B58M30O0 Bosch DI 335HP';
        dropdownEngine.appendChild(el4);
        });
         }
    break;
    case 'M240i xDrive':
         if (dropdownModel.value === 'M240i xDrive') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

         let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);  

         let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el4 = document.createElement('option');
        el4.value = '3.0L L6 B58M30O0 Bosch DI 335HP';
        el4.textContent = '3.0L L6 B58M30O0 Bosch DI 335HP';
        dropdownEngine.appendChild(el4);
        });
         }
    break;
    case 'M3':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);
        if (dropdownModel.value === 'M3') {
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
if (yearSelect.value === '2006' && dropdownbodyType.value === '2-dr Coupe' || yearSelect.value === '2006' && dropdownbodyType.value === '2-dr Convertible' ) {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.2L L6 S54 BMW MS MFI 315HP';
        el5.textContent = '3.2L L6 S54 BMW MS MFI 315HP';
        dropdownEngine.appendChild(el5);

} 

});
if (yearSelect.value === '2008' && dropdownModel.value === 'M3') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el1 = document.createElement('option');
        el1.value = 'Body';
        el1.textContent = 'Body';
        dropdownbodyType.appendChild(el1);

        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        if (yearSelect.value === '2008' && dropdownbodyType.value === '4-dr Sedan' || yearSelect.value === '2008' && dropdownbodyType.value === '2-dr Coupe' || yearSelect.value === '2008' && dropdownbodyType.value === '2-dr convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        el5.textContent = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        dropdownEngine.appendChild(el5);
        }
    });
}
if (yearSelect.value === '2009' && dropdownModel.value === 'M3' || yearSelect.value === '2010' && dropdownModel.value === 'M3' || yearSelect.value === '2011' && dropdownModel.value === 'M3') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Convertible';
        el5.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        el5.textContent = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        dropdownEngine.appendChild(el5);
        };
        });
} else if (yearSelect.value === '2012' && dropdownModel.value === 'M3') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Convertible';
        el5.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        // if (dropdownbodyType.value === '4-dr Sedan' || dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        el5.textContent = '4.0L V8 S65B40A Siemens MS S60 MFI 414HP';
        dropdownEngine.appendChild(el5);
        // };
        });
} else if (yearSelect.value === '2015' && dropdownModel.value === 'M3') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = '4-dr Sedan';
        el2.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el2);

        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 S55B30 Bosch DI 425HP';
        el5.textContent = '3.0L L6 S55B30 Bosch DI 425HP';
        dropdownEngine.appendChild(el5);
}

    } else {
        dropdownbodyType.removeChild(el3)
}
    break;
    case 'M4':
        if (dropdownModel.value === 'M4') {
         dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el4 = document.createElement('option');
        el4.value = '2-dr Coupe';
        el4.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el4);

        let el5 = document.createElement('option');
        el5.value = '2-dr Convertible';
        el5.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el5);

        dropdownbodyType.addEventListener('change', () => {
        dropdownEngine.classList.remove('hidden');
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '3.0L L6 S55B30 Bosch DI 425HP';
        el5.textContent = '3.0L L6 S55B30 Bosch DI 425HP';
        dropdownEngine.appendChild(el5);
        
        });
}
    break;
    case 'M5':
        if(dropdownModel.value === 'M5') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        el5.textContent = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        dropdownEngine.appendChild(el5);

        if (yearSelect.value === '2013' && dropdownModel.value === 'M5') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);  

        let el4 = document.createElement('option');
        el4.value = '4.4L V8 S63B44B Siemens MS DI 560HP';
        el4.textContent = '4.4L V8 S63B44B Siemens MS DI 560HP';
        dropdownEngine.appendChild(el4);
};
};
    break;
    case 'M6':
        if (dropdownModel.value === 'M6') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el5 = document.createElement('option');
        el5.value = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        el5.textContent = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        dropdownEngine.appendChild(el5);

        
        if (yearSelect.value === '2007' && dropdownModel.value === 'M6' || yearSelect.value === '2008' && dropdownModel.value === 'M6' || yearSelect.value === '2009' && dropdownModel.value === 'M6' || yearSelect.value === '2010' && dropdownModel.value === 'M6') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';

        let el2 = document.createElement('option');
        el2.value = 'Body';
        el2.textContent = 'Body';
        dropdownbodyType.appendChild(el2);

        let el3 = document.createElement('option');
        el3.value = '2-dr Coupe';
        el3.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el3);

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownbodyType.addEventListener('change', () => {
        if (dropdownbodyType.value === '2-dr Coupe' || dropdownbodyType.value === '2-dr Convertible') {
        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        let el5 = document.createElement('option');
        el5.value = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        el5.textContent = '5.0L V10 S85B50A Siemens MS S65 MFI 500HP';
        dropdownEngine.appendChild(el5);
        }
        });
} else if (yearSelect.value === '2012' && dropdownModel.value === 'M6') {
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';    

        let el4 = document.createElement('option');
        el4.value = '2-dr Convertible';
        el4.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el4);

        dropdownEngine.value = '';
        dropdownEngine.textContent = '';
        dropdownEngine.classList.remove('hidden');
        let el5 = document.createElement('option');
        el5.value = '4.4L V8 S63B44B Siemens MS DI 560HP';
        el5.textContent = '4.4L V8 S63B44B Siemens MS DI 560HP';
        dropdownEngine.appendChild(el5);        
} else if (yearSelect.value === '2013' && dropdownModel.value === 'M6') {
        
        dropdownbodyType.value = '';
        dropdownbodyType.textContent = '';
        let el2 = document.createElement('option');
        el2.value = '2-dr Coupe';
        el2.textContent = '2-dr Coupe';
        dropdownbodyType.appendChild(el2);  

        let el3 = document.createElement('option');
        el3.value = '2-dr Convertible';
        el3.textContent = '2-dr Convertible';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el4 = document.createElement('option');
        el4.value = '4.4L V8 S63B44B Siemens MS DI 560HP';
        el4.textContent = '4.4L V8 S63B44B Siemens MS DI 560HP';
        dropdownEngine.appendChild(el4);
         });
}
}
    break;
    case 'M6 Gran Coupe':
        if (dropdownModel.value === 'M6 Gran Coupe') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el4 = document.createElement('option');
        el4.value = '4.4L V8 S63B44B Siemens MS DI 560HP';
        el4.textContent = '4.4L V8 S63B44B Siemens MS DI 560HP';
        dropdownEngine.appendChild(el4);
         });
}
    break;
    case 'M760i xDrive':
         if (dropdownModel.value === 'M760i xDrive') {
        let el3 = document.createElement('option');
        el3.value = '4-dr Sedan';
        el3.textContent = '4-dr Sedan';
        dropdownbodyType.appendChild(el3);

        dropdownbodyType.addEventListener('change', () => {
        let el4 = document.createElement('option');
        el4.value = '6.6L V12 N74B66 MED9 DI 601HP';
        el4.textContent = '6.6L V12 N74B66 MED9 DI 601HP';
        dropdownEngine.appendChild(el4);
         });
}
    break;
    case 'X3':
        // console.log('Case: 325Ci xDrive');
        // dropdownbodyType.removeChild(el2);

// for (let i = 0; i < X3Submodel.length; i++) {
//             let x3sub = X3Submodel[i];
//             let el = document.createElement('option');
//             el.value = x3sub;
//             el.textContent = x3sub;
//             dropdownSubmodel.appendChild(el);
//             console.log(x3sub);
// }
    // console.log(X3Submodel)

        if (dropdownModel.value === 'X3') {
//         for (let i = 0; i < X3Submodel.length; i++) {
//             let x3sub = X3Submodel[i];
//             let el = document.createElement('option');
//             el.value = x3sub;
//             el.textContent = x3sub;
//             dropdownSubmodel.appendChild(el);
//             console.log(x3sub);
// }

        // let el3 = document.createElement('option');
        // el3.value = '4-dr Sport Utility';
        // el3.textContent = '4-dr Sport Utility';
        // dropdownbodyType.appendChild(el3);
        // dropdownbodyType.removeChild(el)

        // let el4 = document.createElement('option');
        // el4.value = '4-dr Wagon';
        // el4.textContent = '4-dr Wagon';
        // dropdownbodyType.appendChild(el4);

    } else {
        // dropdownbodyType.removeChild(el3)
}



    }

// let bodyValue = '2dr Coupe';
// let secondValue = '2dr Covertible';

// let el = document.createElement('option');
//     el.value = bodyValue;
//     el.textContent = bodyValue;
//     dropdownbodyType.appendChild(el);

} else {
    dropdownbodyType.value = '';
    dropdownbodyType.textContent = '';
}

// } if statement end bracket

})

makeSelect.addEventListener('change', (event) => {
    const value = event.target.value;
    updateDropdown(value);
    console.log(value);
    console.log(makeSelect);

    const model = document.querySelector('#model');
    model.disabled = false;
});

const yearSelect = document.querySelector('#year');

yearSelect.addEventListener('change', (event) => {
        const value = event.target.value;
    updateDropdown(value);
//     if(makeSelect.value) {
//         makeSelect.value = '';
//         makeSelect.textContent = '';
// }
droplistYear(value)
    const make = document.querySelector('#make');
    make.disabled = false;

});


function droplistYear(value) {
    // dropdownYear.innerHTML = '<option value=""> Select an option </option>';
    // makeSelect.innerHTML = '<option value=""> Select an option </option>';
    makeSelect.value = '';
    makeSelect.textContent = '';

    // const el = document.createElement('option');

for (let i = 0; i < makes.length; i++) {
        let carMakes = makes[i];
    const el = document.createElement('option');
        el.value = carMakes;
        el.textContent = carMakes;
        makeSelect.appendChild(el);
};

dropdownSubmodel.value = '';
dropdownSubmodel.textContent = '';
for (let i = 0; i < submodel.length; i++) {
    let submodels = submodel[i];
    const el = document.createElement('option');
        el.value = submodels;
        el.textContent = submodels;
        dropdownSubmodel.appendChild(el);
}
    // dropdownSubmodel.value = 'Sub model';
    // dropdownSubmodel.textContent = 'Sub model';

    if (value === '1 Series') {
    // yearOptions.innerHTML = 'none'
    for(let i = 0; i < yearOptions.length; i++) {
    years = yearOptions[i];
    console.log(years);
//     years.foreach((year) => {
//         // let el = document.createElement('option');
//         // el.value = year;
//         // el.textContent = year;
//         // dropdownYear.appendChild(el)
//         console.log(year);
// })
    let el = document.createElement('option');
    el.value = years;
    el.textContent = years;
    dropdownYear.appendChild(el);
// dropdownYear.innerHTML = years;
// dropdownYear.innerText = yearOptions;
}
// dropdownYear.innerHTML = years;
// dropdownYear.innerText = yearOptions;
console.log('Hello Everybody!')
    // let el = document.createElement('option');
    // el.value = value;
    // el.textContent = value;
    // dropdownYear.appendChild(el);
}
}

dropdownModel.addEventListener('change', function(event) {
const value = event.target.value;
console.log(value);
//     if (dropdownModel.innerText === '1 Series') {
//     console.log('1 Series');
// }
//     if (value === '1 Series') {
//     let el = document.createElement('option');
//     el.value = value;
//     el.textContent = value;
//     dropdownYear.appendChild(el);
// }

//sets year to default due to functionality
// droplistYear(value)
})

//     for (let i = 0; i < yearOptions.length; i++) {
//         const year = yearOptions[i];
//         if (value === 'BMW' && modelOptions === '1 Series') {
//         let el = document.creatreEement('option');
//         el.value = year;
//         el.textContent = year
//         // modelOptions.value = '2018' 
//         dropdownYear.appendChild(el);
// }
// }


// makeSelect.addEventListener('click', function() {
//     let options = makeSelect.querySelectorAll('option');
    
//     let count = options.length;
//     if (typeof(count) === 'Undefined' || count < 2) {
//         console.log(makeSelect)
// }

// })


// var activities = document.getElementById("activitySelector");

// activities.addEventListener("click", function() {
//     var options = activities.querySelectorAll("option");
//     var count = options.length;
//     // if(typeof(count) === "undefined" || count < 2)
//     // {
//         // addActivityItem();
//         console.log('Hello');
//     // }
// });

// });
// document.addEventListener('DOMContentLoaded', () => {
// if (dropdownModel) {
//     dropdownSubmodel.style.display = 'block';
// } else {
//     dropdownSubmodel.style.display = 'none';
// }
// });
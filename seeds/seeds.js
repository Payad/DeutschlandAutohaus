const mongoose = require('mongoose');
const Product = require('../models/products');

mongoose.connect('mongodb://localhost:27017/DeutchlandAutohaus', {useNewUrlParser: true})
.then(() => {
    console.log("Mongo connection open")
})
.catch(err => {
    console.log("oh no mongo connection error")
    console.log(err)
})

const products = [
// {
//     name: "Black Mug",
//     // price: 30,
//     price: 2999,
//     image: "IMG_0444.jpeg",
//     // description: "DeutchlandAutohaus premier Mug (Black)",
//     description: "Classic Deutschland Black Mug",
//     category: "cup",
//     quantity: 1
// },
// {
//     name: "Red Mug",
//     // price: 30,
//     price: 2999,
//     // image: "IMG_0442.jpeg",
//     image: 'DeutschCupRed.png',
//     // description: "DeutchlandAutohaus premier Mug (Red)",
//     description: "Classic Deutschland Red Mug",
//     category: "cup",
//     quantity: 1
// },
{
    // name: "Black t-shirt",
    name: "t-shirt",
    // price: 30,
    price: 2999,
    // image: "deutschlandshirtB (6).jpg",
    image: "DeutschShirt_black.jpg",
    // description: "DeutchlandAutohaus premier t-shirt (Black)",
    description: "Mens Deutschland T-shirt, 100% high quality cotton",
    category: "clothing",
    // enum: [s, m, l, xl],
    // color: ['Black', Grey', 'Blue'],
    colors: ['black', 'grey', 'blue'],
    sizes: ["S", "M", "L", "XL"],
    quantity: 1
},
{
    // name: "Black sweatshirt",
    name: "sweatshirt",
    // price: 50,
    price: 4999,
    // image: "IMG_7342 (2).jpg",
    image: "DeutschSweater_black.jpg",
    // description: "DeutchlandAutohaus premier sweatshirt (Black)",
    description: "Mens Deutschland sweatershirt, 100% high quality cotton",
    category: "clothing",
    colors: ['black', 'grey', 'blue'],
    sizes: ["S", "M", "L", "XL"],
    quantity: 1
},
{
    // name: "Black sweatpants",
    name: "sweatpants",
    // price: 50,
    price: 4999,
    // image: "pantsRight (1).jpg",
    image: "DeutschPants_black.jpg",
    // description: "DeutchlandAutohaus premier sweatpants (Black)",
    description: "Mens Deutschland sweatpants, 100% high quality cotton",
    category: "clothing",
    colors: ['black', 'grey', 'blue'],
    sizes: ["S", "M", "L", "XL"],
    quantity: 1
},
{
    // name: "Black Beanie",
    name: "beanie",
    // price: 35,
    price: 3499,
    // image: "beanieImg.jpg",
    image: "DeutschBeanie_black.jpg",
    // description: "DeutchlandAutohaus premier Beanie (Black)",
    description: "Mens Deutschland beanie, 100% high quality cotton",
    category: "clothing",
    colors: ['Black', 'Grey', 'Blue'],
    sizes: ["S", "M", "L", "XL"],
    quantity: 1
},
{
    // name: "Black Mug",
    name: "mug",
    // price: 30,
    price: 2999,
    image: "IMG_0444.jpeg",
    // description: "DeutchlandAutohaus premier Mug (Black)",
    description: "Classic Deutschland Mug",
    category: "cup",
    colors: ['black', 'red'],
    // sizes: ["S", "M", "L", "XL"],
    quantity: 1
},
];


Product.deleteMany({})
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})

Product.insertMany(products);
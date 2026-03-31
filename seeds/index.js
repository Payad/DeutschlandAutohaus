const mongoose = require('mongoose');
const Product = require('../models/products');


// mongoose.connect('mongodb://localhost:27017/DeutchlandAutohaus', {useNewUrlParser: true})
// .then(() => {
//     console.log("Mongo connection open")
// })
// .catch(err => {
//     console.log("oh no mongo connection error")
//     console.log(err)
// })

const products = [
{
    name: "Black Mug",
    price: 29.99,
    image: "IMG_0444.jpeg",
    description: "DeutchlandAutohaus premier Mug (Black)",
    category: "cup",
    quantity: 1
},
{
    name: "Red Mug",
    price: 29.99,
    image: "IMG_0442.jpeg",
    description: "DeutchlandAutohaus premier Mug (Red)",
    category: "cup",
    quantity: 1
},
{
    name: "Black t-shirt",
    price: 39.99,
    image: "deutschlandshirtB (6).jpg",
    // description: "DeutchlandAutohaus premier t-shirt (Black)",
    description: "Mens Deutchland T-shirt, 100% cotton",
    category: "clothing",
    quantity: 1
},
{
    name: "Black sweatshirt",
    price: 49.99,
    image: "IMG_7342 (2).jpg",
    description: "DeutchlandAutohaus premier sweatshirt (Black)",
    category: "clothing",
    quantity: 1
},
{
    name: "Black sweatpants",
    price: 49.99,
    image: "pantsRight (1).jpg",
    description: "DeutchlandAutohaus premier sweatpants (Black)",
    category: "clothing",
    quantity: 1
},
{
    name: "Black Beanie",
    price: 34.99,
    image: "beanieImg.jpg",
    description: "DeutchlandAutohaus premier Beanie (Black)",
    category: "clothing",
    quantity: 1
}
];


// const products = [
// {
//     name: "Black Mug",
//     price: 29.99,
//     image: "IMG_0444.jpeg",
//     description: "DeutchlandAutohaus premier Mug (Black)",
//     category: "cup",
//     quantity: 1
// },
// {
//     name: "Red Mug",
//     price: 29.99,
//     image: "IMG_0442.jpeg",
//     description: "DeutchlandAutohaus premier Mug (Red)",
//     category: "cup",
//     quantity: 1
// }
// ]

Product.deleteMany({products})
.then(res => {
    console.log(res)
})
.catch(e => {
    console.log(e)
})

// Product.insertMany(products);
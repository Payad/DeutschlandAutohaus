
const mongoose = require('mongoose');
// const products = require('./models/products');
// const User = require('./models/users');

const cartSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
},
//     products: [
//     {
//         productId: Number,
//         quantity: Number,
//         name: String,
//         price: Number
// }
// ]
    // products: [productSchema],
products: [
    {
        productId: Number,
        quantity: Number,
        name: String,
        price: Number,

        image: String,
        selectedSize: String,
        selectedColor: String
        // description: String,
        // category: String

}
],
    totalPrice: {
        type: Number,
        default: 0
},
    totalQuantity: {
        type: Number,
        // required: true,
        min: 0,

},
vehicles: [
    {
        id: Number,
        year: Number,
        make: String,
        model: String,
        vin: String,
        lic: String,
        Date: String
    }
],

});

 const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;

// module.exports = function Cart(oldCart) {
//     this.items = oldCart.items || {};
//     this.totalQty = oldCart.totalQty || 0;
//     this.totalPrice = oldCart.totalPrice || 0;
//     // this.totalPrice = 0;

//     this.add = function(item, id) {
//         var storedItem = this.items[id];
//         if (!storedItem) {
//             storedItem = this.items[id] = {item: item, qty: 0, price: 0};
//     console.log(storedItem)
// }
// storedItem.qty++;
// // console.log(this.items.price);
// // storedItem.price = storedItem.item.price * storedItem.qty;
// // storedItem.price++
// // console.log(storedItem.price, "hello");
// // console.log(storedItem.item.price, 'Hello');// undefined
// // console.log(storedItem.item);
// // console.log(storedItem.price);
// this.totalQty++;
// this.totalPrice += storedItem.price;

// }

//     this.generateArray = function() {
//     const arr = [];
//     for (let id in this.items) {
//     arr.push(this.items[id]);
// }
// return arr;
// }
// };

// exports.addItemToCart = async(req, res) => {
//     // const userId = req.params.id;
//     // const user = await User.exists({_id: userId});
// const {userId} = req.body;
//     console.log(userId);
// }

// exports.addItemToCart = async(req, res) => {
//     const {userId, products} = req.body;
//     const quantity = Number.parseInt(req.body.quantity);

//     try {
//         //----Get users cart----//
//         let cart = await Cart.findOne({
//             userId: userId
// })
//         //----Get selected product details---//
//         const productDetails = await Product.findById(productId);

//         //--check if cart exists and check quantity of items--//
//         if (!cart && quantity products.productId == productId);

//         //--this removes an item from the cart if the quantity is set to zero--//
//         if (indexFound !== -1 && quantity products.total).reduce((acc, next) => acc + next);
// }
//         //-----check if product exist, just add the previous quantity with the new quantity and update the total price
//         else if (indexFound !== -1) {
//             cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//             cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//             cart.items[indexFound].price = productDetails.price
//             cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
// }        


// //--check if Quantity is Greater than 0 then add item to items Array ---// 
// else if (quantity > 0) {
//             cart.products.push({
//                 productId: productId,
//                 quantity: quantity,
//                 price: productDetails.price,
//                 total: parseInt(productDetails.price * quantity)
// })
//     cart.subTotal = cart.products.map(product => product.total).reduce((acc, next) => acc + next);
// }
// //---if quantity of price is 0 throw the error ------
// else {
//     return res.status(400).json({
//         type: "invalid",
//         msg: "invalid request"
// })
// }
// let data = await cart.save();
// res.status(200).json({
//     type: "success",
//     mgs: "Process successful",
//     data: data
// })

// //-------if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created-----
// }
// else {
//     const cartData = {
//         userId: userId,
//         products: [{
//             productId: productId,
//             quantity: quantity,
//             total: parseInt(productDetails.price * quantity),
//             price: productDetails.price
// }],
// subTotal: parseInt(productDetails.price * quantity)
// }
// cart = new Cart(cartData);
// let data = await cart.save();
// res.json(data);
// }
// } catch (err) {
//     console.log(err)
//     res.status(400).json({
//         type: "invalid",
//         msg: "something went wrong",
//         err: err
// })
// }
///////////////////////////////////////////
// exports.addItemToCart = async (req, res) => {
//     const {
//         userId,
//         productId
//     } = req.body;
//     const quantity = Number.parseInt(req.body.quantity);

//     try {
//         // -------Get users Cart ------
//         let cart = await Cart.findOne({
//             userId: userId
//         })

//         //-----Get Selected Product Details ----
//         const productDetails = await Product.findById(productId);

//         //-- Check if cart Exists and Check the quantity if items -------
//         if (!cart && quantity item.productId == productId);

//             //------this removes an item from the the cart if the quantity is set to zero,We can use this method to remove an item from the list  --------
//             if (indexFound !== -1 && quantity  item.total).reduce((acc, next) => acc + next);
//             }

//             //----------check if product exist,just add the previous quantity with the new quantity and update the total price-------
//             else if (indexFound !== -1) {
//                 cart.items[indexFound].quantity = cart.items[indexFound].quantity + quantity;
//                 cart.items[indexFound].total = cart.items[indexFound].quantity * productDetails.price;
//                 cart.items[indexFound].price = productDetails.price
//                 cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
//             }

//             //----Check if Quantity is Greater than 0 then add item to items Array ----
//             else if (quantity > 0) {
//                 cart.items.push({
//                     productId: productId,
//                     quantity: quantity,
//                     price: productDetails.price,
//                     total: parseInt(productDetails.price * quantity)
//                 })
//                 cart.subTotal = cart.items.map(item => item.total).reduce((acc, next) => acc + next);
//             }
//             //----if quantity of price is 0 throw the error -------
//             else {
//                 return res.status(400).json({
//                     type: "Invalid",
//                     msg: "Invalid request"
//                 })
//             }
//             let data = await cart.save();
//             res.status(200).json({
//                 type: "success",
//                 mgs: "Process Successful",
//                 data: data
//             })
//         }
//         //------------ if there is no user with a cart...it creates a new cart and then adds the item to the cart that has been created------------
//         else {
//             const cartData = {
//                 userId: userId,
//                 items: [{
//                     productId: productId,
//                     quantity: quantity,
//                     total: parseInt(productDetails.price * quantity),
//                     price: productDetails.price
//                 }],
//                 subTotal: parseInt(productDetails.price * quantity)
//             }
//             cart = new Cart(cartData);
//             let data = await cart.save();
//             res.json(data);
//         }
//     } catch (err) {
//         console.log(err)
//         res.status(400).json({
//             type: "Invalid",
//             msg: "Something Went Wrong",
//             err: err
//         })
//     }
// }

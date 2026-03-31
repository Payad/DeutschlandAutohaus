const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = new Schema({
    cardName: {
        type: String,
        required: true,
},
    user: {
        type: Schema.Types.ObjectId,
        required: true,
        ref: 'User',
},

    accountUser: {
        type: String,
        required: true,
},

    userEmail: {
        type: String,
        required: true,
},

    cardLast4: {
        type: Object,
        required: true,
},

    cart: {
        type: Object,
        required: true,
        ref: 'Cart',
},

    cartTotal: {
        type: String,
        required: true,
        ref: 'Cart',
},
    address1: {
        type: String,
        required: true,
},

    address2: {
        type: String,
        required: true,
},

    addressCity: {
        type: String,
        required: true,
},

    addressState: {
        type: String,
        required: true,
},

    addressZip: {
        type: String,
        required: true,
},
//     name: {
//         type: String,
//         required: true,
// },
//     purchaseId: {
//         type: String,
//         required: true,
// }
    purchaseId: {
        type: Object,
        required: true,
},

    purchaseDate: {
        type: Object,
        required: true,
}
});

module.exports = mongoose.model('Order', orderSchema)
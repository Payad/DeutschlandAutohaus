const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  {
    type: String,
    required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0
},
    image: String,
    description: String,
    category: {
        type: String,
        lowercase: true,
        enum: ['cup', 'clothing', 'sticker']
},

    sizes: [{
        type: String,
        enum: ['S', 'M', 'L', 'XL']
}],

    color: [String],

    quantity: {
        type: Number,
        required: true,
        min: 1
    }
});

module.exports = mongoose.model('Product', productSchema)
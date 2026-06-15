const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name:  {
    type: String,
    required: true,
    trim: true
    },
    sku: {
        type: String,
        required: true,
        unique: true
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
        // enum: ['cup', 'clothing', 'sticker']
        enum: ['shirt', 'sweater', 'pants', 'beanie', 'cup', 'sticker']
},

    fulfillmentType: {
        type: String,
        enum: ['pickup', 'delivery', 'both'],
        default: 'both'
    },

    sizes: [{
        type: String,
        enum: ['S', 'M', 'L', 'XL']
}],

    color: [String],

    inventory: {
        type: Number,
        required: true,
        min: 0,
        default: 0
    },

    active: {
        type: Boolean,
        default: true
    },

    // timestamps: true
    timestamps: {
        type: String,
        required: true,
        default: true
    },

    // variantsDAHShirtM: [
    //     {
    //         sku: "DAH-SHIRT-BLK-M",
    //         color: "Black",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-GRY-M",
    //         color: "Grey",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-BLU-M",
    //         color: "Blue",
    //         size: "M",
    //         inventory: 0
    //     },

    // ],

    // variantsDAHShirtL: [
    //     {
    //         sku: "DAH-SHIRT-BLK-L",
    //         color: "Black",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-GRY-L",
    //         color: "Grey",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-BLU-L",
    //         color: "Blue",
    //         size: "L",
    //         inventory: 0
    //     },
    // ],
    // variantsDAHShirtS: [
    //     {
    //         sku: "DAH-SHIRT-BLK-S",
    //         color: "Black",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-GRY-S",
    //         color: "Grey",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SHIRT-BLU-S",
    //         color: "Blue",
    //         size: "S",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHSweaterL: [
    //     {
    //         sku: "DAH-SWEATER-BLK-L",
    //         color: "Black",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-GRY-L",
    //         color: "Grey",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-BLU-L",
    //         color: "Blue",
    //         size: "L",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHSweaterM: [
    //     {
    //         sku: "DAH-SWEATER-BLK-M",
    //         color: "Black",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-GRY-M",
    //         color: "Grey",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-BLU-M",
    //         color: "Blue",
    //         size: "M",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHSweaterS: [
    //     {
    //         sku: "DAH-SWEATER-BLK-S",
    //         color: "Black",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-GRY-S",
    //         color: "Grey",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-SWEATER-BLU-S",
    //         color: "Blue",
    //         size: "S",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHPantsL: [
    //     {
    //         sku: "DAH-PANTS-BLK-L",
    //         color: "Black",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-GRY-L",
    //         color: "Grey",
    //         size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-BLU-L",
    //         color: "Blue",
    //         size: "L",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHPantsM: [
    //     {
    //         sku: "DAH-PANTS-BLK-M",
    //         color: "Black",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-GRY-M",
    //         color: "Grey",
    //         size: "M",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-BLU-M",
    //         color: "Blue",
    //         size: "M",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHPantsS: [
    //     {
    //         sku: "DAH-PANTS-BLK-S",
    //         color: "Black",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-GRY-S",
    //         color: "Grey",
    //         size: "S",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-PANTS-BLU-S",
    //         color: "Blue",
    //         size: "S",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHBeanie: [
    //     {
    //         sku: "DAH-BEANIE-BLK",
    //         color: "Black",
    //         // size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-BEANIE-GRY",
    //         color: "Grey",
    //         // size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-BEANIE-BLU",
    //         color: "Blue",
    //         // size: "L",
    //         inventory: 0
    //     },
    // ],

    // variantsDAHMug: [
    //     {
    //         sku: "DAH-MUG-BLK",
    //         color: "Black",
    //         // size: "L",
    //         inventory: 0
    //     },
    //     {
    //         sku: "DAH-MUG-RED",
    //         color: "Red",
    //         // size: "L",
    //         inventory: 0
    //     },
    //     // {
    //     //     sku: "DAH-BEANIE-BLU",
    //     //     color: "Blue",
    //     //     // size: "L",
    //     //     inventory: 0
    //     // },
    // ]


    // quantity: {
    //     type: Number,
    //     required: true,
    //     min: 1
    // }
});

module.exports = mongoose.model('Product', productSchema)
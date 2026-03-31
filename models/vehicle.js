const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const vehicleSchema = new Schema({
    user: {
        type: String,
        required: true,
        ref: 'User',
},
    id: {
        type: Number,
        required: true,
        unique: true,
},
    make: {
        type: String,
        required: true,
},

    model: {
        type: String,
        required: true,
},

    year: {
        type: Number,
        required: true,
},
    name: {
        type: String,
        required: true,
},

    color: {
        type: String,
        // required: true,
},

    miles: {
        type: Number,
        // required: true,
},

    vin: {
        type: String,
        required: true,
},
//was License_plate
    lic: {
        type: String,
        // required: true,
}, 
    signup_date: {
    type: Date,
    default: Date.now // ✅ automatically captures the creation time
  },
 

});

module.exports = mongoose.model('Vehicle', vehicleSchema)

const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose')

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
        unique: true
        // required: false
},
//     password: {
//         type: String,
//         required: [true, 'password is required']
// }

    email: {
        type: String,
        required: true,
        unique: true
},

    role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user' // default role
    },

    plan: {
        type: String,
        default: null
},

    pending_plan: {
        type: String,
        // enum: ['bronze', 'silver', 'gold'],
        default: null,
        required: false
},
    plan_tier: {
        type: String,
        default: null,
        // enum: ['nitro_charged', 'turbo_charged', 'super_charged'],
        required: false
},
    pending_plan_tier: {
        type: String,
        default: null
},
//     user_tier: {
//         type: String,
//         required: false
// },
    status: {
        type: String,
        enum: ['pending', 'approved', 'rejected', 'reviewed'],
        required: false
},
    statusChangedAt: {
        type: Date,
        default: Date.now
},

    inspection_date: {
        type: Date,
        required: false
},
//     approvedByAdmin: {
//         type: String,
//         required: true
// },
    signup_date: {
    type: Date,
    default: Date.now // ✅ automatically captures the creation time
  },

    repair_list: {
        type: [String],
        required: false,
        default: []
},
    carwash_list: {
        type: [String],
        required: false,
        default: []
}


})

    userSchema.plugin(passportLocalMongoose)

const User = mongoose.model('User', userSchema);

module.exports = User;
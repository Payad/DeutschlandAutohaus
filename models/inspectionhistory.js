const mongoose = require('mongoose');

const InspectionLogSchema = {
    userId: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
    vehicleId: {type: mongoose.Schema.Types.ObjectId, ref: 'Vehicle'},
    adminId: {type: mongoose.Schema.Types.ObjectId, ref: 'Admin'},
    adminName: {type: String},
    action: {type: String, enum: ['approved', 'rejected', 'reopened'], required: true},
    reason: {type: String},
    timestamp: {type: Date, default: Date.now}
}

    module.exports = mongoose.model('InspectionLog', InspectionLogSchema)
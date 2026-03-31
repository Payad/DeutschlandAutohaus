const mongoose = require('mongoose');

// Create an audit log schema
const auditLogSchema = new mongoose.Schema({
    action: String,
    target: String,  // The target of the action (e.g., "deleted admin@example.com")
    actor: String,   // The user who performed the action (e.g., logged-in user)
    timestamp: { type: Date, default: Date.now },
    metadata: Object  // You can store additional metadata if needed, like IP address
});

const AuditLog = mongoose.model('AuditLog', auditLogSchema);
module.exports = AuditLog;
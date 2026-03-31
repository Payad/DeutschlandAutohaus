//AppError extends express default error handler
//super implies that takes the error object properties and adds them to the AppError class
class AppError extends Error {
    constructor (message, status) {
        super();
        this.message = message;
        this.status = status;
        
}
}

module.exports = AppError;
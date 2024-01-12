const mongoose = require('mongoose');
const validator = require('validator');


const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    userName: {
        type: String,
        required: false
    },
    email: {
        type: String,
        validate: (value) => {
            return validator.isEmail(value)
        },
        required: true
    },
    password: {
        type: String,
        required: true
    },
    resetPasswordToken: String,
    resetPasswordTokenExpire: Date,
    createdAt: {
        type: Date,
        default: Date.now()
    }
});

let User = mongoose.model('user', userSchema);
module.exports = User;
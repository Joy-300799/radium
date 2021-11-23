const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true, unique: true
    },
    mobile: {
        type: Number,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: Number,
        required: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
}, { timestmaps: true });

module.exports = mongoose.model('User_details', userSchema)
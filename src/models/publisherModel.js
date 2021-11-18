const mongoose = require("mongoose");

const publisherSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    headQuarter: String
}, { timestamps: true })

module.exports = mongoose.model('myPublisher', publisherSchema)
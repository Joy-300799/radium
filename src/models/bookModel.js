const mongoose = require('mongoose')
const ObjectId = mongoose.Schema.Types.ObjectId
const PublisherId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: ObjectId,
        ref: 'myAuthor',
        required: true
    },
    price: Number,
    ratings: Number,
    publisher: {
        type: PublisherId,
        ref: 'myPublisher',
        required: true
    }
}, { timestamps: true })

module.exports = mongoose.model('myBook', bookSchema)
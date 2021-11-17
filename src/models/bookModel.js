const mongoose=require('mongoose')

const bookCollection= new mongoose.Schema({
        
    "bookName": {
        "type": String,
        "required": true
    },
    "authorName": String,
    "tags": [String], //array of strings 
    "year": {
        type: "number",
        default:2021
    },
    "prices": {
        "indianPrice": String,
        "europeanPrice": String,
    },
    "stockAvailable": Boolean, //True or false
    "totalPages": "number"

 }, { timestamps: true })

module.exports = mongoose.model( 'Books_Collection', bookCollection ) 



const mongoose= require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const BookSchema=new mongoose.Schema({
    name:String,
    author:{
        type:ObjectId,
        ref:"Myauthor"
    },
    publisher:{
        type:ObjectId,
        ref:"MyPublisher"
    },
        price:Number,
        ratings:Number,
}, {timestamps: true} )

module.exports=mongoose.model('Mybook',BookSchema);
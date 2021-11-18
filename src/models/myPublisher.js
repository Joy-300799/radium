const mongoose= require('mongoose')


const publisherSchema=new mongoose.Schema({
       name:String,
       headQuator:String
}, {timestamps: true} )

module.exports=mongoose.model('MyPublisher',publisherSchema);
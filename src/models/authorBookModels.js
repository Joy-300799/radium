const mongoose= require('mongoose')


const authorBookSchema=new mongoose.Schema({
    name:String,
        author_id:{type:Number,
            required:true
         },
        price:Number,
        ratings:Number,
}, {timestamps: true} )

module.exports=mongoose.model('newBooks_details', authorBookSchema);
const mongoose= require('mongoose')
const ObjectId=mongoose.Schema.Types.ObjectId

const orderSchema=new mongoose.Schema({
    user:{
        type:ObjectId,
        ref:"User"
    },
    product:{
        type:ObjectId,
        ref:"Product"
    },
        isFreeAppUser:Boolean,
        amount:Number,
        date:Date
}, {timestamps: true} )

module.exports=mongoose.model('Order',orderSchema);
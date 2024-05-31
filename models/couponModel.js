const mongoose=require("mongoose")
const couponSchema=new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
          ref:"users"
    },
    name:{
        type:String
    },
    couponCode: {
        type: String,
        unique: true
    },
    discount_amount: {
        type: Number,
        
    },
    minimum:{
        type:Number,
        required:true
    },
  
    
 
})
const Coupon = mongoose.model('Coupon', couponSchema);

module.exports = Coupon
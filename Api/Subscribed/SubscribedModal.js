const mongoose=require("mongoose");
const subscribed=mongoose.Schema({
    email:{
        unique:true,
        type:String,    
    }
})
const subscribedUser=mongoose.model("subscribedUser",subscribed);
module.exports=subscribedUser;
const mongoose=require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema=new Schema({
    name:{
        required:true,
        unique:true,
        type:String
    },
    image:{
        type:Array,
    },
    description:{
        type:String
    },
    featuredCategories:{
        type:String
    },
    featuredImage:{
        type:Array
    },
    slideShow:{
        type:Boolean
      }
})

const model=mongoose.model("category",CategorySchema);
module.exports=model;
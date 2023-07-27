const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CategorySchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  image: {
    type: Array,
   },
   description:{
    type: String,  
   },
   slug :{
    required:true,
    type:String,
    unique:true,
  },
   featuredCategories : {
    type: String,
   },
   featuredImage: {
    type: Array,
   },
}, {timestamps: true});
const model = mongoose.model("Category", CategorySchema);
module.exports = model;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const brandSchema = new Schema({
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
   featuredBrands: {
    type : String
   }
}, {timestamps : true});
const model = mongoose.model("Brands", brandSchema);
module.exports = model;

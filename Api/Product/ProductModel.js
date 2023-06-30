const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
  name: {
    required: true,
    type: String,
    unique: true,
  },
  description: {
    type: String,
  },
  image: {
    type: Array,
  },
  otherImage: {
    type: Array,
  },
  category: { 
    type: Schema.Types.ObjectId, 
    ref: "Category" 
  },
  warehouse: {
    type: String,
  },
  type: {
    type: String,
  },
  inrMrp: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  reorderQuantity:{
    type: Number,
  },
  maximumOrder:{
    type:Number,
  },
  inrDiscount: {
    type: String,
  },
  gender:{
    type:String,
  },
  height:{
    type:String,
  },
  width:{
    type:String,
  },
  weight:{
    type:String,
  },
  brand: { type: Schema.Types.ObjectId, ref: "Brands" },
  subcategory: { type: Schema.Types.ObjectId, ref: "SubCategory" },
}, {timestamps: true });
const model = mongoose.model("Product", ProductSchema);
module.exports = model;

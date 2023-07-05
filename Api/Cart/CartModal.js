const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const CartSchema = new Schema({
  userid: {
    unique: true,
    required: true,
    type: String,
  },
  order: {
    type: Array,
    default:[]
   }
});
const model = mongoose.model("Cart", CartSchema);
module.exports = model;

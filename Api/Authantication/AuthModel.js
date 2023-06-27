const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const LoginSchema = new Schema({
  username: {
    required: true,
    type: String,
    unique:true,
    
  },
  email: {
    required: true,
    type: String,
    unique: true,
  },
  phonenumber: {
    required: true,
    type : String,
  },
  accountId : {
    required: true,
    type: String,
    unique: true
  },
  password: {
    required: true,
    type: String,
  },
  role:{
  type: String, 
  },
  userStatus:{
    type:String,
  },

}, {timestamps : true} );
const model = mongoose.model("Login", LoginSchema);
module.exports = model;

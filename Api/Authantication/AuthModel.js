const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    required: true,
    type: String,
  },
  role: {
    type: String,
  },
  userStatus: {
    type: String,
  },
}, { timestamps: true });



const User = mongoose.model('User', UserSchema);


module.exports = User;






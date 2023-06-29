console.log("Inside model of auth 1");

const mongoose = require("mongoose");
console.log("Inside model of auth 2");

const AutoIncrementFactory = require('mongoose-sequence');
console.log("Inside model of auth 3");

const Schema = mongoose.Schema;

console.log("Inside model of auth 4");

const AutoIncrement = AutoIncrementFactory(mongoose);

const LoginSchema = new Schema({
  email: {
    required: true,
    type: String,
    unique: true,
  },
  accountId: {
    type: Number,
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

console.log("Inside model of auth 5");

// Add the auto-increment plugin to your schema
LoginSchema.plugin(AutoIncrement, {inc_field: 'accountId'});

console.log("Inside model of auth 6");

const model = mongoose.model("User", LoginSchema);
console.log("Inside model of auth 7");

module.exports = model;

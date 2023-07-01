const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const WishlistSchema = new Schema(
  {
    userId: {
      required: true,      
      type: String,
    },
    productId: {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
   
  },
  { timestamps: true }
);
const model = mongoose.model("Wishlist", WishlistSchema);
module.exports = model;

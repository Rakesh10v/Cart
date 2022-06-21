const mongoose = require("mongoose");

const userschema = new mongoose.Schema(
  {
    name: { type: String },
    image: { type: String },
    price: { type: Number },
  },
  { collection: "Cart" }
);
module.exports = mongoose.model("userModel", userschema);

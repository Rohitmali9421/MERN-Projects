const mongoose = require("mongoose");

const productSchema = mongoose.Schema(
  {
    product_id: {
      type: String,
      required: true,
      trim:true,
      unique:true,
    },
    title: {
      type: String,
      required: true,
      trim:true,
    },
    price: {
      type: Number,
      required: true,
      trim:true,
    },
    decription: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    images: {
      type: Object,
      required: true,
    },
    category: {
      type:mongoose.Schema.Types.ObjectId,
      ref:"Category",
      trim:true,
      required: true,
    },
    checked: {
      type: Boolean,
      default: false,
    },
    sold: {
      type: Number,
      default: 0,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);
module.exports = Product;

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    profilePhoto: {
      type: Object,
      default:{
        public_id:"amvfmhjviqpbmvu4txsf",
        url:"http://res.cloudinary.com/dhturqqs5/image/upload/v1720437805/amvfmhjviqpbmvu4txsf.png"
      }
    },
    cart: [
      {
        productID: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
        },
        quantity: {
          type: Number,
          min: 1,
        },
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("Users", userSchema);
module.exports = User;

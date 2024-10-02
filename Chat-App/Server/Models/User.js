const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    profilePic: {
      type: Object,
      default: {
        public_id: "amvfmhjviqpbmvu4txsf",
        url: "http://res.cloudinary.com/dhturqqs5/image/upload/v1720437805/amvfmhjviqpbmvu4txsf.png",
      },
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);
module.exports = User;

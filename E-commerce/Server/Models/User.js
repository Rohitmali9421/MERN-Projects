const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
    
  },
  role:{
    type:Number,
    default:0
  },
  profilePhoto: {
    type: Object,
    required: true,
  },
  cart:{
    type:Array,
    default:[]

  }
},{timestamps:true});

const User=mongoose.model("Users",userSchema)
module.exports=User
const express=require("express");
const { handlesignUp, handleLogin } = require("../Controller/User");

const router=express.Router();

router.post("/signup",handlesignUp)
router.get("/login",handleLogin)
module.exports=router
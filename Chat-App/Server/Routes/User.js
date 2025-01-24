const express=require("express");
const { handlesignUp, handleLogin, logout, handleGetUsers, handleGetUser } = require("../Controller/User");
const authenticateToken = require("../middlewares/Auth");

const router=express.Router();

router.post("/signup",handlesignUp)
router.post("/login",handleLogin)
router.post("/logout",logout)
router.get("/users",authenticateToken,handleGetUsers)
router.get("/",handleGetUser)
module.exports=router
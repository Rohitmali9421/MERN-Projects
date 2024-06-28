const express=require("express")
const {handleSignUp,handleLogin,handleGetUser}=require("../Controllers/User")
const { authenticateToken } = require("../middlewares/Auth")
const router=express.Router()

router.post("/signUp",handleSignUp)
router.post("/login",handleLogin)
router.get("/infor",authenticateToken,handleGetUser)

module.exports=router
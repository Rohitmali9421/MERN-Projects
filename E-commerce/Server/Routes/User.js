const express=require("express")
const {handleRegister}=require("../Controllers/User")
const router=express.Router()

router.post("/register",handleRegister)

module.exports=router
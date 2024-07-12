const express=require("express")
const {handleSignUp,handleLogin,handleGetUser,handleAddToCart,handleCartIncreaseQuantity,handleCartDecreaseQuantity}=require("../Controllers/User")
const { authenticateToken } = require("../middlewares/Auth")
const uploadMiddleware = require("../middlewares/Multer")
const router=express.Router()

router.post("/signUp",uploadMiddleware,handleSignUp)
router.patch("/cart",authenticateToken,handleAddToCart)
router.patch("/cartIncrement",authenticateToken,handleCartIncreaseQuantity)
router.patch("/cartDecrement",authenticateToken,handleCartDecreaseQuantity)
router.post("/login",handleLogin)
router.get("/infor",authenticateToken,handleGetUser)

module.exports=router
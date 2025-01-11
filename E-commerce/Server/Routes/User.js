const express = require("express");

const {
  handleSignUp,
  handleLogin,
  handleGetUser,
  handleAddToCart,
  handleCartIncreaseQuantity,
  handleCartDecreaseQuantity,
  handlecheckout,
} = require("../Controllers/User");
const { authenticateToken } = require("../middlewares/Auth");
const { validateLogin, validateSignUp } = require("../middlewares/validation");
const router = express.Router();

router.post("/signUp", validateSignUp, handleSignUp);
router.patch("/cart", authenticateToken, handleAddToCart);
router.patch("/cartIncrement", authenticateToken, handleCartIncreaseQuantity);
router.patch("/cartDecrement", authenticateToken, handleCartDecreaseQuantity);
router.post("/login", validateLogin, handleLogin);
router.get("/infor", authenticateToken, handleGetUser);
router.post("/checkout", authenticateToken, handlecheckout);

module.exports = router;

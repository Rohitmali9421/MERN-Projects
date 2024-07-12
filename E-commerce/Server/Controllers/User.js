const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { setUser } = require("../Services/Auth");
const mongoose = require("mongoose");
async function handleSignUp(req, res) {
  try {
    const { name, email, password, image } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ msg: "User already exists" });
    }

    if (password.length < 8) {
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
      profilePhoto:image,
    });

    const accessToken = setUser(newUser);
    const { password: _, ...userWithoutPassword } = newUser._doc; // Exclude password from the response

    return res
      .status(200)
      .json({ user: userWithoutPassword, token: accessToken });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

async function handleLogin(req, res) {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ msg: "User does not exist" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials" });

    const accessToken = setUser(user);
    return res.status(200).json({ user: user, token: accessToken });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleGetUser(req, res) {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID).select("-password");
    if (!user) return res.status(400).json({ msg: "User Not Found" });

    return res.status(200).json(user);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

async function handleAddToCart(req, res) {
  try {
    const { productId } = req.body;
    const userId = req.user.id;
  
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const productIndex = user.cart.findIndex(item => item.productID?.toString() === productId);
    
    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
    } else {
      user.cart.push({
        productID: new mongoose.Types.ObjectId(productId),
        quantity: 1
      });
    }

    await user.save();
    const updatedUser = await User.findById(userId).select('-password');
    return res.status(200).json(updatedUser);
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

async function handleCartIncreaseQuantity(req, res) {
  try {
    const { productId } = req.body;
    const userId = req.user.id;
  
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const productIndex = user.cart.findIndex(item => item.productID?.toString() === productId);
    
    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
    } else {
      return res.status(400).json({ msg: "Product not found in cart" });
    }

    await user.save();
    const updatedUser = await User.findById(userId).select('-password');
    return res.status(200).json(updatedUser);
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleCartDecreaseQuantity(req, res) {
  try {
    const { productId } = req.body;
    const userId = req.user.id;
  
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const productIndex = user.cart.findIndex(item => item.productID?.toString() === productId);
    
    if (productIndex > -1) {
      user.cart[productIndex].quantity -= 1;

      // Remove the product if the quantity reaches zero
      if (user.cart[productIndex].quantity <= 0) {
        user.cart.splice(productIndex, 1);
      }

      await user.save();
      const updatedUser = await User.findById(userId).select('-password');
      return res.status(200).json(updatedUser);
    } else {
      return res.status(400).json({ msg: "Product not found in cart" });
    }
    
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  handleSignUp,
  handleLogin,
  handleGetUser,
  handleAddToCart,
  handleCartIncreaseQuantity,
  handleCartDecreaseQuantity,
};







const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { setUser } = require("../Services/Auth");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");
const Product = require("../Models/Product");
const stripe = require("stripe")(process.env.STRIPE_SECRET);
async function handleSignUp(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    const accessToken = setUser(newUser);
    const { password: _, ...userWithoutPassword } = newUser._doc;

    return res
      .status(200)
      .json({ user: userWithoutPassword, token: accessToken });
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
}

async function handleLogin(req, res) {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ error: errors.array()[0].msg });
    }

    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const accessToken = setUser(user);
    return res.status(200).json({ user: user, token: accessToken });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
}
async function handleGetUser(req, res) {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID).select("-password");
    if (!user) return res.status(400).json({ msg: "User Not Found" });

    return res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
}
async function handlecheckout(req, res) {
  try {
    const products  = req.body.cart; 

    const lineItems = [];

    for (const product of products) {
      const productDetails = await Product.findById(product.productID);

     
      if (!productDetails) {
        throw new Error(`Product with ID ${product.id} not found`);
      }

      
      lineItems.push({
        price_data: {
          currency: "usd",
          product_data: {
            name: productDetails.title,
            images: [productDetails.image.url], 
          },
          unit_amount: productDetails.price * 100, 
        },
        quantity: product.quantity, 
      });
    }

    
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: lineItems,
      mode: "payment",
      success_url: "https://yourdomain.com/success",
      cancel_url: "https://yourdomain.com/cancel",
    });

    res.json({ id: session.id });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: error.message });
  }
};
  


async function handleAddToCart(req, res) {
  try {
    const { productId } = req.body;
    const userId = req.user.id;

    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({ msg: "User Not Found" });
    }

    const productIndex = user.cart.findIndex(
      (item) => item.productID?.toString() === productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
    } else {
      user.cart.push({
        productID: new mongoose.Types.ObjectId(productId),
        quantity: 1,
      });
    }

    await user.save();
    const updatedUser = await User.findById(userId).select("-password");
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

    const productIndex = user.cart.findIndex(
      (item) => item.productID?.toString() === productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity += 1;
    } else {
      return res.status(400).json({ msg: "Product not found in cart" });
    }

    await user.save();
    const updatedUser = await User.findById(userId).select("-password");
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

    const productIndex = user.cart.findIndex(
      (item) => item.productID?.toString() === productId
    );

    if (productIndex > -1) {
      user.cart[productIndex].quantity -= 1;

      // Remove the product if the quantity reaches zero
      if (user.cart[productIndex].quantity <= 0) {
        user.cart.splice(productIndex, 1);
      }

      await user.save();
      const updatedUser = await User.findById(userId).select("-password");
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
  handlecheckout
};

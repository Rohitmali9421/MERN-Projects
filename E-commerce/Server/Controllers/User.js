const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { setUser } = require("../Services/Auth");
const mongoose = require("mongoose");
const { validationResult } = require("express-validator");


const handleSignUp = async (req, res) => {
  // Validate the request
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ error: errors.array()[0].msg });
  }

  try {
    const { name, email, password, image } = req.body;

    // Check if the user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "User already exists" });
    }

    // Hash the password
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const newUser = new User({
      name,
      email,
      password: hashedPassword,
      image
    });

    // Save the user to the database
    await newUser.save();

    // Generate a token or handle post-registration logic here
    const accessToken = setUser(newUser); // Implement setUser function as per your logic

    // Respond with the new user and token
    res.status(201).json({ user: newUser, token: accessToken });
  } catch (error) {
    console.error(error); // Log the error for internal debugging
    res.status(500).json({ error: "Server error. Please try again later." });
  }
};

async function handleLogin(req, res) {
  try {
    const errors = validationResult(req);
    if (errors.array().length > 0)
      return res.status(400).json({ error: errors.array()?.[0]?.msg });

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
};

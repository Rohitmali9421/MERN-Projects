const User = require("../Models/User");
const bcrypt = require("bcrypt");
const { setUser } = require("../Services/Auth");

async function handleSignUp(req, res) {
  try {
    const { name, email, password } = req.body;

    const user = await User.findOne({ email: email });

    if (user) return res.status(400).json({ msg: "User already exists" });

    if (password.length < 8)
      return res
        .status(400)
        .json({ msg: "Password must be at least 8 characters" });

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.status(200).json({ msg: "Registration successful" });
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

    const accessToken = setUser(user)
    return res.status(200).json({user:user, token:accessToken });
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

module.exports = {
  handleSignUp,
  handleLogin,
  handleGetUser,
};

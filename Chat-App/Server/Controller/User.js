const bcrypt = require("bcrypt");
const User = require("../Models/User");
const { setUser } = require("../Services/Auth");


const handlesignUp = async (req, res) => {
  try {
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
      .json({ user: userWithoutPassword,token: accessToken});
  } catch (error) {
    res.status(500).json({ error: "Server error. Please try again later." });
  }
}
 const handleLogin= async(req, res)=> {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email: email });
    if (!user) return res.status(400).json({ error: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ error: "Invalid credentials" });

    const accessToken = setUser(user);
    const {password:_,...userWithoutPassword}=user._doc;
    return res.status(200).json({ user: userWithoutPassword, token: accessToken });
  } catch (error) {
    return res
      .status(500)
      .json({ error: "Server error. Please try again later." });
  }
}

module.exports = {
  handlesignUp,
  handleLogin
};

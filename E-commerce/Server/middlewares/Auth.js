const { getUser } = require("../Services/Auth");
const User = require("../Models/User");

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  if (token == null) return res.status(401).json({ msg: "Please login" });

  const user = getUser(token);
  if (!user) return res.json({ msg: "invalid Token" });
  req.user = user;
  next();
};

const authAdmin = async (req, res, next) => {
  try {
    const userID = req.user.id;

    const user = await User.findById(userID);
    if (user.role === 0)
      return res.status(400).json({ msg: "Admin Access Denied" });
    next();
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
};

module.exports = {
  authenticateToken,
  authAdmin,
};

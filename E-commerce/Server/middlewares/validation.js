const { check } = require("express-validator");
const validateLogin = [
  check("email", "Email is required").not().isEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").not().isEmpty(),
];
const validateSignUp = [
  check("name", "Name is required").not().isEmpty(),
  check("email", "Email is required").not().isEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  check("password", "Password must be at least 8 characters long").isLength({
    min: 8,
  }),
];
module.exports = {
  validateLogin,
  validateSignUp,
};

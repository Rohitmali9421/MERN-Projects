const { check } = require("express-validator");
const validateLogin = [
  check("email", "Email is required").not().isEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").not().isEmpty(),
];
const validateSignUp = [
  check("name")
    .not()
    .isEmpty()
    .withMessage("Name is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Name must be at least 3 characters long"),
  check("email", "Email is required").not().isEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").not().isEmpty(),
  check("password")
    .not()
    .isEmpty()
    .withMessage("Password is required")
    .matches(/\d/)
    .withMessage("Password must contain at least one number")
    .matches(/[a-zA-Z]/)
    .withMessage("Password must contain at least one letter")
    .matches(/[@$!%*?&#]/)
    .withMessage("Password must contain at least one special character")
    .isLength({ min: 8 })
    .withMessage("Password must be at least 8 characters long"),
];
module.exports = {
  validateLogin,
  validateSignUp,
};

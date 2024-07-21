const { check } = require("express-validator");
const validateLogin = [
  check("email", "Email is required").not().isEmpty(),
  check("email", "Invalid email format").isEmail(),
  check("password", "Password is required").not().isEmpty(),
];
const validateCreateProduct = [
  check("title")
    .not()
    .isEmpty()
    .withMessage("Title is required")
    .isString()
    .withMessage("Name must be a string")
    .isLength({ min: 3 })
    .withMessage("Title must be at least 3 characters long"),
  check("description")
    .not()
    .isEmpty()
    .withMessage("description is required")
    .isString()
    .withMessage("description must be a string")
    .isLength({ min: 20 })
    .withMessage("description must be at least 20 characters long"),
  check("content")
    .not()
    .isEmpty()
    .withMessage("content is required")
    .isString()
    .withMessage("content must be a string")
    .isLength({ min: 20 })
    .withMessage("content must be at least 20 characters long"),
  check("category")
    .not()
    .isEmpty()
    .withMessage("category is required")
    .isString()
    .withMessage("category must be a string")
    .isLength({ min: 3 })
    .withMessage("content must be at least 3 characters long"),
  check("price")
    .not()
    .isEmpty()
    .withMessage("Price is required")
    .isNumeric()
    .withMessage("Price must be a Number"),
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
  validateCreateProduct,
};

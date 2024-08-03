const express = require("express");
const router = express.Router();
const {
  handleGetProduct,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
} = require("../Controllers/Product");
const { validateCreateProduct } = require("../middlewares/validation");
const uploadMiddleware = require("../middlewares/Multer");

router
  .route("/products")
  .get(handleGetProduct)
  .post(uploadMiddleware, validateCreateProduct, handleCreateProduct);

router
  .route("/products/:id")
  .delete(handleDeleteProduct)
  .put(handleUpdateProduct);

module.exports = router;

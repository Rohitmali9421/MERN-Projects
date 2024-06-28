const express = require("express");
const router = express.Router();
const {
  handleGetProduct,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
} = require("../Controllers/Product");

router
  .route("/products")
  .get(handleGetProduct)
  .post(handleCreateProduct)
  
router
  .route("/products/:id")
  .delete(handleDeleteProduct)
  .put(handleUpdateProduct);

module.exports = router;

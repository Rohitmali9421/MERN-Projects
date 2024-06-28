const Product = require("../Models/Product");

async function handleGetProduct(req, res) {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

async function handleCreateProduct(req, res) {
  try {
    const { product_id, title, price, decription, content, images, category } =
      req.body;
    return res.json({ mag: "post" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleDeleteProduct(req, res) {
  try {
    return res.json({ mas: "delete" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleUpdateProduct(req, res) {
  try {
    return res.json({ mas: "put" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  handleGetProduct,
  handleCreateProduct,
  handleDeleteProduct,
  handleUpdateProduct,
};

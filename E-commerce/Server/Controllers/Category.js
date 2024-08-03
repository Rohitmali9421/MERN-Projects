const Category = require("../Models/Category");
const Product = require("../Models/Product");
async function handleGetCategory(req, res) {
  try {
    const category = await Category.find();
    return res.json(category);
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleCreateCategory(req, res) {
  try {
    const { name, imagePath } = req.body;
    if (!image) return res.status(400).json({ msg: "Image not uploaded" });
    const category = await Category.findOne({ name });
    if (category)
      return res.status(400).json({ msg: "Category Already Exists" });
    const image = await uploadOnCloudinary(imagePath);
    const newCategory = await Category.create({
      name: name,
      imageURL: image,
    });
    return res.json({ msg: "Category Created", newCategory });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

async function handleDeleteCategory(req, res) {
  try {
    await Product.deleteMany({ category: req.params.id });
    await Category.findByIdAndDelete(req.params.id);

    return res.json({ msg: "Category Deleted" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleUpdateCategory(req, res) {
  try {
    const { name } = req.body;
    await Category.findByIdAndUpdate({ _id: req.params.id }, { name });
    return res.json({ msg: "Category Updated" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}

module.exports = {
  handleGetCategory,
  handleCreateCategory,
  handleDeleteCategory,
  handleUpdateCategory,
};

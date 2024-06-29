const Product = require("../Models/Product");
const { deleteOnCloudinary } = require("../Services/Choudinary");

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
    const { product_id, title, price, decription, content, image, category } =
      req.body;
    if (!image) return res.status(400).json({ msg: "Image not uploaded" });

    const product=await Product.findOne({product_id})
    if (product) return res.status(400).json({ msg: "this product already exists" });

    const newproduct=await Product.create({
      
        product_id,
        title:title.toLowerCase(),
        price,
        decription,
        content,
        images:image,
        category
    })
    return res.status(200).json({ msg: "Product Created",newproduct});
  } catch (error) {
    return res.status(500).json({ msg: error.message } );
  }
}
async function handleDeleteProduct(req, res) {
  try {
    const productID=req.params.id
    const product=await Product.findById(productID)
    deleteOnCloudinary(product.images.public_id)
    await Product.findByIdAndDelete(productID)
    return res.json({ msg: "delete" });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleUpdateProduct(req, res) {
  try {
    return res.json({ msg: "put" });
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

const Category = require("../Models/Category");
const Product = require("../Models/Product");
const { deleteOnCloudinary } = require("../Services/Choudinary");

class APIFeatures {
  constructor(query, queryString) {
    this.query = query;
    this.queryString = queryString;
  }

  filtering() {
    const queryObj = { ...this.queryString };
    const excludedFields = ['page', 'sort', 'limit'];
    excludedFields.forEach(el => delete queryObj[el]);
    let queryStr = JSON.stringify(queryObj);
    queryStr = queryStr.replace(/\b(gte|gt|lte|lt|regex)\b/g, match => `$${match}`);

    this.query.find(JSON.parse(queryStr));
    return this;
  }

  sorting() {
    if (this.queryString.sort) {
      const sortBy = this.queryString.sort.split(',').join(' ');
      this.query = this.query.sort(sortBy);
    } else {
      this.query = this.query.sort('-createdAt');
    }
    return this;
  }

  pagination() {
    const page = this.queryString.page * 1 || 1;
    const limit = this.queryString.limit * 1 || 9;
    const skip = (page - 1) * limit;

    this.query = this.query.skip(skip).limit(limit);
    return this;
  }
}

async function handleGetProduct(req, res) {
  try {
    const features = new APIFeatures(Product.find(), req.query)
      .filtering()
      .sorting()
      .pagination();
    const products = await features.query;
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

    let cat = await Category.findOne({ name: category });

    if (!cat) {
      return res.status(400).json({ msg: "Category does not exists" });
    }
    const product = await Product.findOne({ product_id });
    if (product)
      return res.status(400).json({ msg: "this product already exists" });

    const newproduct = await Product.create({
      product_id,
      title: title.toLowerCase(),
      price,
      decription,
      content,
      images: image,
      category:cat.id,
    });
    return res.status(200).json({ msg: "Product Created", newproduct });
  } catch (error) {
    return res.status(500).json({ msg: error.message });
  }
}
async function handleDeleteProduct(req, res) {
  try {
    const productID = req.params.id;
    const product = await Product.findById(productID);
    deleteOnCloudinary(product.images.public_id);
    await Product.findByIdAndDelete(productID);
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

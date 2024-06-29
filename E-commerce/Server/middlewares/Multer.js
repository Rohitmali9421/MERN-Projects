const multer = require("multer");
const {uploadOnCloudinary} = require("../Services/Choudinary");
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

function uploadMiddleware(req, res, next) {
  const uploadSingle = upload.single("image");

  uploadSingle(req, res, async function (err) {
    if (err) {
      return res.status(400).json({ error: err.message });
    }
    const response = await uploadOnCloudinary(req.file.path);
    req.body.image = response;
    next();
  });
}

module.exports = uploadMiddleware;

require("dotenv").config();
const cors = require("cors");
const express = require("express");
const UserRouter = require("./Routes/User");
const ProductRouter = require("./Routes/Product");
const CategoryRouter = require("./Routes/Category");
const connectMongoDB = require("./config/connection");

const port = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;
const app = express();

//MongoDB Connection
connectMongoDB(URI);

//Middlerwares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Routes
app.use("/user", UserRouter);
app.use("/api", CategoryRouter);
app.use("/api", ProductRouter);

app.listen(port, () => {
  console.log("server started");
});

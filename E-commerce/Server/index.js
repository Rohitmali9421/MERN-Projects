require("dotenv").config();

const express = require("express");

const UserRouter = require("./Routes/User");
const connectMongoDB = require("./config/connection");

const port = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;

const app = express();

//MongoDB Connection 
connectMongoDB(URI);

//Middlerwares
app.use(express.json());

//Routes
app.use("/user", UserRouter);

app.listen(port, () => {
  console.log("server started");
});

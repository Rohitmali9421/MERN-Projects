require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectMongoDB = require("./config/connection");
const UserRouter=require("./Routes/User")

const app = express();
const port = process.env.PORT || 8000;
const URI = process.env.MONGODB_URI;
connectMongoDB(URI);
app.use(cors());

//Midelewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes
app.use("/api/user",UserRouter)

app.listen(port, () => {
  console.log("server Started");
});

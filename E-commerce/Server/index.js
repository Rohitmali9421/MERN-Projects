require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const UserRouter = require("./Routes/User");
const app = express();
const port = process.env.PORT || 8000;
const URL = process.env.MONGODB_URL;

app.use(express.json())

app.use("/user",UserRouter)

app.listen(port, () => {
  console.log("server started");
});

mongoose
  .connect(URL,{
    useCreateIndex:true,
    useFindAndModify:false,
    useNewUrlParser:true,
    useUnifiedTopology:true
  })
  .then(console.log("Connected"))
  .catch((err) => {
    console.log(err);
  });

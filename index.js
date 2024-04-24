const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");

const app = express();
const port = process.env.PORT || 3000;
const uri = process.env.MONGODB_URI;
const productRoute = require("./routers/product.route.js");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/api/products", productRoute);

// middleware
app.get("/", (req, res) => {
  res.send("Hello from Node API");
});

mongoose
  .connect(uri)
  .then(() => {
    console.log("Connected to database!");
    app.listen(port, () => {
      console.log(`Server is runing on ${port}`);
    });
  })
  .catch((error) => {
    console.log("Connection failed", error);
  });

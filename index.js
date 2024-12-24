const express = require("express");
const app = express();
const Product = require("./models/product.model");
const mongoose = require("mongoose");
const productRoute = require("./routes/product.route");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//routes
app.use("/api/products", productRoute);
mongoose
  .connect(
    "mongodb+srv://admin:12345@backendapi.k8ode.mongodb.net/CRUDE-DEMO?retryWrites=true&w=majority&appName=BackendAPI"
  )
  .then(() => {
    console.log("Connected to database");
    app.listen(3000, () => {
      console.log("Server is running on port 3000");
    });
  })
  .catch(() => {
    console.log("Connection failed");
  });

app.get("/", (req, res) => {
  res.send("Hello from Node API new");
});

const express = require("express");
const app = express();
const port = 3000;
let dotenv = require('dotenv').config();

const {userRouter} = require("./routes/user");
const {productsRouter} = require("./routes/products"); 
const {ordersRouter} = require("./routes/orders");
const {order_productsRouter} = require("./routes/order_products");

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.get("/", (req, res) => {
  res.json({ message: "Bienvenido al proyecto de tortas.." });
});

app.use("/user", userRouter);
app.use("/products", productsRouter);
app.use("/orders", ordersRouter);
app.use("/order_products", order_productsRouter);

/*
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});*/

app.listen(process.env.PORT, () => {
  console.log(`Example app listening at http://localhost:${process.env.PORT}`);
});

const { response } = require("express");
const express = require("express");
const ShoppingRouter = express.Router();
const { ShoppingModels } = require(".././Models/Shopping.model");

ShoppingRouter.get("/soppingHome", (req, res) => {
  res.send("Welcome to Shopping Page");
});

ShoppingRouter.post("/shoppingData", async (req, res) => {
  const { title, quantity, priority, description } = req.body;

  const newShoppingData = new ShoppingModels({
    title: title,
    quantity: quantity,
    priority: priority,
    description: description,
  });

  await newShoppingData.save();
  res.send({ msg: "data added successfull" });
});

ShoppingRouter.get("/displayData", async (req, res) => {
  const shoppingList = await ShoppingModels.find();

  res.send({ shoppingList });
});

module.exports = {
  ShoppingRouter,
};

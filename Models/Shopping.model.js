const mongoose = require("mongoose");

const ShoppingSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    quantity: { type: Number, required: true },
    priority: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const ShoppingModels = mongoose.model("data", ShoppingSchema);

module.exports = {
  ShoppingModels,
};

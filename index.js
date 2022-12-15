const express = require("express");
const app = express();
app.use(express.json());
require("dotenv").config();
const cors = require("cors");
app.use(cors());
const { connection } = require("./Config/db");
const { ShoppingRouter } = require("./Routes/Shopping.route");

app.get("/", (req, res) => {
  res.send("Welcom to Shopping Home Page");
});

app.use("/", ShoppingRouter);

app.listen(process.env.PORT, async () => {
  try {
    await connection;
    console.log("Mongo DB connected successfull");
    console.log(`App listen on port ${process.env.PORT}`);
  } catch (err) {
    console.log("Mongo DB connected faild");
    console.log(err);
  }
});

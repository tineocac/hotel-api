const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const errorHandle = require("./middlewares/error.middleware");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

db.authenticate()
  .then(console.log("Succesfull aunthentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(console.log("Succesfull synchronization"))
  .catch((error) => console.log(error));

app.get("/", (req, res) => {
  console.log("Welcome to server");
});

app.use(errorHandle);

module.exports = app;

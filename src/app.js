const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const db = require("./utils/database");
const errorMiddleware = require("./middlewares/error.middleware");
const initModels = require("./models/initModels");
const {
  usersRoutes,
  authRoutes,
  bookingsRoutes,
  guestsRoutes,
  paysRoutes,
  roomsRoutes,
} = require("./routes");

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
initModels();

db.authenticate()
  .then(console.log("Succesfull aunthentication"))
  .catch((error) => console.log(error));

db.sync({ force: false })
  .then(console.log("Succesfull synchronization"))
  .catch((error) => console.log(error));

app.use("/api/v1", usersRoutes);
app.use("/api/v1", authRoutes);
app.use("/api/v1", bookingsRoutes);
app.use("/api/v1", guestsRoutes);
app.use("/api/v1", paysRoutes);
app.use("/api/v1", roomsRoutes);

app.use(errorMiddleware);

module.exports = app;

const { Sequelize } = require("sequelize");
require("dotenv").config();

const db = new Sequelize({
  database: process.env.DB_NAME || "hotel_api",
  username: process.env.DB_USER || "postgres",
  port: process.env.DB_PORT || 5432,
  host: process.env.DB_HOST || "localhost",
  password: process.env.DB_PASSWORD || "root",
  dialect: "postgres",
  logging: false,
});

module.exports = db;

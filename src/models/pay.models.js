const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Pay = db.define(
  "pay",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    bookingsId: {
      type: DataTypes.INTEGER,
    },
    status: {
      type: DataTypes.ENUM("pending", "paid", "canceled"),
      defaultValue: "pending",
    },
    total: {
      type: DataTypes.FLOAT,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Pay;

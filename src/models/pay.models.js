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
      field: "bookings_id",
    },
    status: {
      type: DataTypes.ENUM("pending", "paid", "canceled"),
      defaultValue: "pending",
    },
    payment: {
      type: DataTypes.ENUM("unselected", "cash", "TDC", "TDD", "tranfer"),
      defaultValue: "unselected",
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

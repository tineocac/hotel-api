const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Rooms = db.define(
  "rooms",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    number: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    floor: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    characteristics: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      tpye: DataTypes.FLOAT,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Rooms;

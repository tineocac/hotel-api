const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Bookings = db.define("bookings", {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  usersId: {
    type: DataTypes.INTEGER,
    field: "users_id",
    allowNull: false,
  },
  arrive: {
    type: DataTypes.DATE,
  },
  depart: {
    type: DataTypes.DATE,
  },
  numberOfPersons: {
    type: DataTypes.INTEGER,
    field: "number_of_persons",
  },
  status: {
    type: DataTypes.ENUM("pending", "paid", "canceled"),
    defaultValue: "pending",
  },
  payment: {
    type: DataTypes.ENUM("unselected", "cash", "TDC", "TDD", "tranfer"),
    defaultValue: "unselected",
  },
});

module.exports = Bookings;

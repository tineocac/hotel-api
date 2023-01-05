const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const Guests = db.define(
  "guests",
  {
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
    idCard: {
      tpye: DataTypes.INTEGER,
      allowNull: false,
      field: "id_card"
    },
    firstName: {
      type: DataTypes.STRING,
      field: "first_name",
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      field: "last_name",
      allowNull: false,
    },
    age: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Guests;

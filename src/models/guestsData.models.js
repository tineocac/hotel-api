const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const GuestsData = db.define(
  "guests_data",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
    },
    guestsId: {
      type: DataTypes.INTEGER,
      field: "guest_id",
    },
  },
  {
    timestamps: false,
  }
);

module.exports = GuestsData;

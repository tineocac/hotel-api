const db = require("../utils/database");
const { DataTypes } = require("sequelize");

const BookingsGuests = db.define(
  "bookings_guests",
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
      allowNull: false,
    },
    guestsId: {
      type: DataTypes.INTEGER,
      field: "guests_id",
      allowNull: false,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = BookingsGuests;

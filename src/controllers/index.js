const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createBooking } = require("./bookings.controllers");
const { createGuest } = require("./guests.controllers");
const { makePayment } = require("./pay.controllers");

module.exports = {
  createUser,
  userLogin,
  createBooking,
  createGuest,
  makePayment,
};

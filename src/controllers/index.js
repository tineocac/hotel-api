const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createBooking } = require("./bookings.controllers");

module.exports = {
  createUser,
  userLogin,
  createBooking,
};

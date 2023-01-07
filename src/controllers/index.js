const { createUser } = require("./users.controllers");
const { userLogin } = require("./auth.controllers");
const { createBooking } = require("./bookings.controllers");
const { createGuest, getAllGuests } = require("./guests.controllers");
const { makePayment } = require("./pay.controllers");
const { selectRoom, createRoom } = require("./rooms.controllers");

module.exports = {
  createUser,
  userLogin,
  createBooking,
  createGuest,
  getAllGuests,
  makePayment,
  selectRoom,
  createRoom,
};

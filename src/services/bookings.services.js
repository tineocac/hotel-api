const { Bookings, Pay } = require("../models");

class BookingsServices {
  static async create(newBooking) {
    try {
      const result = await Bookings.create(newBooking);
      const bookingId = result.id;
      const pay = await Pay.create({ bookingId });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookingsServices;

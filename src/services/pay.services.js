const { Pay, Bookings } = require("../models");

class PayServices {
  static async pay(id, status, payment) {
    try {
      const result = Pay.update({ status, payment }, { where: { id } });
      const booking = Bookings.update({ status }, { where: { id: id } });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PayServices;

const { Pay } = require("../models");

class PayServices {
  static async pay(id, payment) {
    try {
      const result = Pay.update(
        { status: "paid" },
      );
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = PayServices;

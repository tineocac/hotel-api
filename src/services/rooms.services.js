const { BookingsRooms } = require("../models");

class RoomsServices {
  static async select(id, roomsId) {
    try {
      const result = await BookingsRooms.create(roomsId, { bookingsid: id });
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoomsServices;

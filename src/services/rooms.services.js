const { BookingsRooms, Rooms } = require("../models");

class RoomsServices {

  static async create(newRoom){
    try {
      const result = await Rooms.create(newRoom)
      return result
    } catch (error) {
      throw error
    }
  }
  static async select(id, roomsId) {
    try {
      const result = await BookingsRooms.create(roomsId);
      result.bookingsId = id;
      return result;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = RoomsServices;

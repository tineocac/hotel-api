const {
  Bookings,
  Guests,
  BookingsGuests,
  Pay,
  Rooms,
  Users,
  BookingsRooms,
} = require("./index");

const initModels = () => {
  Users.hasMany(Bookings, { foreignKey: "users_id" });
  Bookings.belongsTo(Users, { foreignKey: "users_id" });

  Users.hasMany(Guests, { foreignKey: "users_id" });
  Guests.belongsTo(Users, { foreignKey: "users_id" });

  Bookings.hasOne(Pay, { foreignKey: "bookings_id" });
  Pay.belongsTo(Bookings, { foreignKey: "bookings_id" });

  Bookings.hasMany(BookingsRooms, { foreignKey: "bookings_id" });
  BookingsRooms.belongsTo(Bookings, { foreignKey: "bookings_id" });

  Rooms.hasMany(BookingsRooms, { foreignKey: "rooms_id" });
  BookingsRooms.belongsTo(Rooms, { foreignKey: "rooms_id" });

  Bookings.hasMany(BookingsGuests, { foreignKey: "bookings_id" });
  BookingsGuests.belongsTo(Bookings, { foreignKey: "bookings_id" });

  Guests.hasMany(BookingsGuests, { foreignKey: "guests_id" });
  BookingsGuests.belongsTo(Guests, { foreignKey: "guests_id" });
};

module.exports = initModels;

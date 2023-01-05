const db = require('../utils/database')
const { DataTypes } = require('sequelize')

const BookingsRooms = db.define('bookings_rooms', {
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
    },
    bookingsId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "bookings_id"
    },
    roomsId:{
        type: DataTypes.INTEGER,
        allowNull: false,
        field: "rooms_id"
    }
},{
    timestamps: false
})

module.exports = BookingsRooms
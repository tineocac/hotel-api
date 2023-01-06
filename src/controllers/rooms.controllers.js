const { RoomsServices } = require("../services");

const selectRoom = async (req, res, next) => {
  try {
    const { id } = req.params;
    const roomsId = req.body;
    const result = await RoomsServices.select(id, roomsId);
    res.status(201).json({ message: "Room selected succesfull" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

const createRoom = async (req, res, next) => {
  try {
    const newRoom = req.body;
    const result = await RoomsServices.create(newRoom);
    res.status(201).json({ message: "Room has been created succesfull" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { selectRoom, createRoom };

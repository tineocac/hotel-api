const { GuestsServices } = require("../services");

const createGuest = async (req, res, next) => {
  try {
    const newGuest = req.body;
    const result = await GuestsServices.create(newGuest);
    res.status(201).json({ message: "New guest has been created succesfull" });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { createGuest };

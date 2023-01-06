const { BookingsServices } = require("../services");

const createBooking = async (req, res, next) => {
  try {
    const newBooking = req.body;
    const result = await BookingsServices.create(newBooking);
    res.status(201).json({
      message:
        "You have created a reservation, complete the rest of the information requested.",
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong, verify the submitted data",
    });
  }
};

module.exports = { createBooking };

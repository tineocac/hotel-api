const { PayServices } = require("../services");

const makePayment = async (req, res, next) => {
  try {
    const { id } = req.params;
    const payment = req.body
    const result = await PayServices.pay( id, payment );
    res.status(200).json({
      message: "You payment has been completed succesfull",
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong",
    });
  }
};

module.exports = { makePayment };

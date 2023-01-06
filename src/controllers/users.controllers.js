const { UsersServices } = require("../services");
const transporter = require("../utils/mailer");
const welcomeTemplate = require("../templates/welcome");

const createUser = async (req, res, next) => {
  try {
    const newUser = req.body;
    const result = await UsersServices.create(newUser);
    res.status(201).json({ message: "User succesfully created" });
    await transporter.sendMail({
      from: "<carlostineocac@gmail.com>",
      to: result.email,
      subject: `Welcome ${result.firstName } ${result.lastName}  to the best HOTEL API`,
      html: welcomeTemplate(`${result.firstName}`),
    });
  } catch (error) {
    next({
      status: 400,
      errorContent: error,
      message: "Oops, something went wrong, check the submitted data",
    });
  }
};

module.exports = { createUser };

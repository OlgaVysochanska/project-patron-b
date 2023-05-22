const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const googleAuth = async (req, res) => {
  const { _id: id } = req.user;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "23h",
  });

  await User.findByIdAndUpdate(result._id, { token });

  res.redirect(`http://localhost:3000?token=${token}`);
};

module.exports = googleAuth;

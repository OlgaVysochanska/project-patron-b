const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const googleAuth = async (req, res) => {
  const { _id: id } = req.user;
  const payload = {
    id,
  };
  const token = jwt.sign(payload, process.env.SECRET_KEY, {
    expiresIn: "23h",
  });

  const user = await User.findByIdAndUpdate(id, { token });

  res.redirect(`http://localhost:3000?token=${token}`);
};

module.exports = googleAuth;

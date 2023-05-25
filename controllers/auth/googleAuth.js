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

  res.set({
    Authorization: `Bearer ${token}`,
  });
  res.redirect(`https://patron4u-pet-app.netlify.app/temp?code=${token}`);
};

module.exports = googleAuth;

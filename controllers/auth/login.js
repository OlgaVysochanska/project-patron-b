const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");

const { HttpError } = require("../../helpers");
const { Pet } = require("../../models/pet");

const { SECRET_KEY } = process.env;

const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(401, "Email or password is wrong");
  }

  const passwordCompare = await bcrypt.compare(password, user.password);

  if (!passwordCompare) {
    throw HttpError(401, "Email or password is wrong");
  }

  const payload = {
    id: user._id,
  };

  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: "23h" });
  await User.findByIdAndUpdate(user._id, { token });
  const pets = await Pet.find({ owner: user._id });

  res.status(201).json({
    token,
    user: {
      email: user.email,
      name: user.name,
      _id: user._id,
      birthday: user.birthday,
      phone: user.phone,
      city: user.city,
      avatarURL: user.avatarURL,
      myAbs: user.myAbs,
      myPets: user.myPets,
      favoriteNotice: user.favoriteNotice,
    },
    pets,
  });
};

module.exports = login;

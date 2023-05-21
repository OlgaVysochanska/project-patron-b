const { Pet } = require("../../models/pet");

const current = async (req, res) => {
  const {
    _id,
    email,
    name,
    birthday,
    phone,
    city,
    avatarURL,
    myPets,
    myAbs,
    favoriteAbs,
  } = req.user;
  const token = req.token;

  const pets = await Pet.find({ owner: _id });

  res.status(200).json({
    token,
    user: {
      _id,
      email,
      name,
      birthday,
      phone,
      city,
      avatarURL,
      myPets,
      myAbs,
      favoriteAbs,
    },
    pets,
  });
};

module.exports = current;

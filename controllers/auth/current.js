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
  const { token } = req.token;

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
      token,
      myPets,
      myAbs,
      favoriteAbs
    }
  });
};

module.exports = current;

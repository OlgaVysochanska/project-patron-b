// створити ендпоінт для додавання оголошення до обраних
const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const updateStatusFavorite = async (req, res) => {
  const { _id, favoriteNotice } = req.user;
  const { id } = req.params;
  const result = favoriteNotice.findIndex((item) => item === id);
  if (result !== -1) {
    throw HttpError(400, "This notise in favorite");
  }
  favoriteNotice.push(id);
  await User.findByIdAndUpdate(_id, { favoriteNotice });
  res.status(200).json(favoriteNotice);
};

module.exports = updateStatusFavorite;

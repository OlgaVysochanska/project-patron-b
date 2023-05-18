// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const deleteFavoriteNotices = async (req, res) => {
  const { _id, favoriteNotice } = req.user;
  const { id } = req.params;
  const data = await User.find(_id, req.body, { favoriteNotice });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  const result = favoriteNotice.findIndex((item) => item === id);
  favoriteNotice.splice(result, 1);
  await User.findByIdAndUpdate(_id, { favoriteNotice });
  res.status(200).json(favoriteNotice);
};

module.exports = deleteFavoriteNotices;

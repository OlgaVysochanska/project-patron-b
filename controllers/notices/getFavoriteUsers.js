// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const getFavoriteUsers = async (req, res) => {
  const { _id, favoriteNotice } = req.user;
  const data = await User.find(_id, req.body, { favoriteNotice });
  console.log("favoriteNotice", favoriteNotice);

  if (!data) {
    throw HttpError(404, "Not found");
  }
  const result = await favoriteNotice.map((item) => Notice.findById(item));
  res.status(200).json(result);
};

module.exports = getFavoriteUsers;

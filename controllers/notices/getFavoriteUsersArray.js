// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const getFavoriteUsersArray = async (req, res) => {
  const { _id } = req.user;
  const data = await Notice.find({ owner: _id })
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = getFavoriteUsersArray;

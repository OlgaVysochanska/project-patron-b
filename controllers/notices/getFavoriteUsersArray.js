// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const getFavoriteUsersArray = async (req, res) => {
  const { favoriteNotice } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const data = await Notice.find({ _id: favoriteNotice })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  const count = await Product.countDocuments();
  res.status(200).json({
    data,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
};

module.exports = getFavoriteUsersArray;

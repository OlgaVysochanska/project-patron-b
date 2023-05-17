// створити ендпоінт для видалення оголошення авторизованого користувача доданих цим же до обраних
const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const deleteFavoriteUsers = async (req, res) => {
  const { id } = req.params;
  const { favoriteNotice } = req.user;
  const data = await User.findByIdAndDelete({ id });
  res.status(200).json(data);
};

module.exports = deleteFavoriteUsers;

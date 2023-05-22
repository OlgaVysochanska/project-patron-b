// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { HttpError } = require("../../helpers");
const { User } = require("../../models");

const getFavoriteUsers = async (req, res) => {
  const { _id } = req.user;
  const data = await User.findById(_id)
    .populate("favoriteNotice")
    .select("favoriteNotice");
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = getFavoriteUsers;

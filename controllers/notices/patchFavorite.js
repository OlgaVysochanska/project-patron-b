// створити ендпоінт для додавання оголошення до обраних
const { HttpError } = require("../../helpers");
// const { Notice } = require("../../models/notice");
const { User } = require("../../models");

const updateStatusFavorite = async (req, res) => {
  const { _id, favoriteNotice } = req.user;
  const { id } = req.params;
  const data = await User.find(_id, req.body, { favoriteNotice });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  const result = favoriteNotice.findIndex((item) => item === id);
  if (result !== -1) {
    throw HttpError(404, "This notise in favorite");
  }
  favoriteNotice.push(id);
  await User.findByIdAndUpdate(_id, { favoriteNotice });
  res.status(200).json(favoriteNotice);
};

// const updateStatusFavorite = async (req, res) => {
//   const { _id } = req.user;
//   const { id } = req.params;
//   const data = await Notice.findByIdAndUpdate(id, {
//     favorite: { _id },
//   });
//   if (!data) {
//     throw HttpError(404, "Not found");
//   }
//   res.status(200).json(data);
// };

module.exports = updateStatusFavorite;

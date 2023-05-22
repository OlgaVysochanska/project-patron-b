// створити ендпоінт для додавання оголошення до обраних
const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const { Notice } = require("../../models/notice");

const updateStatusFavorite = async (req, res) => {
  const { _id, favoriteNotice } = req.user;
  const { id } = req.params;
  await User.find(_id, req.body, { favoriteNotice });

  const result = favoriteNotice.findIndex((item) => item === id);
  if (result !== -1) {
    throw HttpError(400, "This notise in favorite");
  }
  const noticeFull = await Notice.findById(id);
  if (!noticeFull) {
    throw HttpError(404, "Notice not found");
  }
  favoriteNotice.push(noticeFull);
  await User.findByIdAndUpdate(_id, { favoriteNotice });
  res.status(200).json(favoriteNotice);
};

module.exports = updateStatusFavorite;

// створити ендпоінт для додавання оголошення до обраних

const { Notice } = require("../../models/notice");
const { User } = require("../../models");

// const updateStatusFavorite = async (req, res) => {
//   const { _id } = req.user;
//   const data = await User.findByIdAndUpdate(_id, {
//     favoriteNotice: { ...req.body },
//   });
//   if (!data) {
//     throw HttpError(404, "Not found");
//   }
//   res.status(200).json(data);
// };

const updateStatusFavorite = async (req, res) => {
  const { _id } = req.user;
  const { id } = req.params;
  const data = await Notice.findByIdAndUpdate(id, {
    favorite: { _id },
  });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = updateStatusFavorite;

// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { Notice } = require("../../models/notice");
const { HttpError } = require("../../helpers");

const getNoticeOnlyAddUser = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Notice.find({ owner }, { skip, limit });
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = getNoticeOnlyAddUser;

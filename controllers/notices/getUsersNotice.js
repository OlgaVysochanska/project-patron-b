// Отримання усіх оголошень юзера

const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getUsersNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 12 } = req.query;
  const data = await Notice.find({ owner })
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

module.exports = getUsersNotice;

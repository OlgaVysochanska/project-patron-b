// створити ендпоінт для отримання оголошень по категоріям
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getCategory = async (req, res) => {
  const { category } = req.query;
  const { page = 1, limit } = req.query;
  const data = await Notice.find({ category })
    .limit(limit * 1)
    .skip((page - 1) * limit);
  if (!data) {
    throw HttpError(404, `${category} not found`);
  }
  res.status(200).json({
    data,
    totalPages: Math.ceil(data.length / limit),
    currentPage: page,
  });
};

module.exports = getCategory;

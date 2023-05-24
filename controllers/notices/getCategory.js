// створити ендпоінт для отримання оголошень по категоріям
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getCategory = async (req, res) => {
  const { category } = req.query;
  const { page = 1, limit = 2 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Notice.find(
    { category },
    {
      skip,
      limit: Number(limit),
    }
  );
  if (!data) {
    throw HttpError(404, `${category} not found`);
  }
  const count = await Notice.countDocuments();
  res.status(200).json({
    data,
    totalPages: Math.ceil(count / limit),
    currentPage: page,
  });
};

module.exports = getCategory;

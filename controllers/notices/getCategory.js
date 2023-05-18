// створити ендпоінт для отримання оголошень по категоріям
const { Notice } = require("../../models/notice");

const getCategory = async (req, res) => {
  const { category } = req.query;
  const data = await Notice.find({ category });
  console.log(data);
  if (!data) {
    throw HttpError(404, `${category} not found`);
  }
  res.status(200).json(data);
};

module.exports = getCategory;

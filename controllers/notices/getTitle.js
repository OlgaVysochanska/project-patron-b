// створити ендпоінт для пошуку оголошеннь по заголовку
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getTitle = async (req, res) => {
  const { title } = req.query;
  const data = await Notice.find({ title: { $regex: title } });
  if (!data) {
    throw HttpError(404, `${title} not found`);
  }
  res.status(200).json(data);
};

module.exports = getTitle;

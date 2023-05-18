// створити ендпоінт для додавання оголошень відповідно до обраної категорії
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const addCategory = async (req, res) => {
  const { _id: owner } = req.user;
  const { category } = req.query;
  const data = await Notice.create({
    ...req.body,
    category,
    owner,
  });

  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json(data);
};

module.exports = addCategory;

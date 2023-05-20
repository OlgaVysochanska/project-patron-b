// створити ендпоінт для отримання одного оголошення
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getOne = async (req, res) => {
  const data = await Notice.findOne({});
  if (!data) {
    throw HttpError(404, `Not found`);
  }
  res.status(200).json(data);
};

module.exports = getOne;

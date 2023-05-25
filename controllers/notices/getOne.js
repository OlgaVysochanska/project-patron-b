// створити ендпоінт для отримання одного оголошення
const { HttpError } = require("../../helpers");
const { User } = require("../../models");
const { Notice } = require("../../models/notice");

const getOne = async (req, res) => {
  const { _id } = req.query;
  console.log(_id);
  const data = await Notice.find({ _id });
  if (!data) {
    throw HttpError(404, `Not found notice`);
  }

  const user = await User.find({ _id: data[0].owner });

  if (!user) {
    throw HttpError(404, `Not found user`);
  }

  res.status(200).json({ data: data[0], user: user[0] });
};

module.exports = getOne;

// створити ендпоінт для отримання оголошень авторизованого кристувача створених цим же користувачем
const { Notice } = require("../../models/notice");
const { HttpError } = require("../../helpers");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Notice.create({
    ...req.body,
    owner,
  });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(data);
};

module.exports = addNotice;

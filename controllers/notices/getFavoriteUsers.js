// створити ендпоінт для отримання оголошень авторизованого користувача доданих ним же в обрані
const { Notice } = require("../../models/notice");

const getFavoriteUsers = async (req, res) => {
  const { _id } = req.user;
  const data = await Notice.find({});
  console.log("result", data);
  res.status(200).json(data);
};

module.exports = getFavoriteUsers;

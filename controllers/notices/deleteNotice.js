// створити ендпоінт для видалення оголошення авторизованого користувача створеного цим же користувачем
const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const deleteNotice = async (req, res) => {
  const { id } = req.params;
  const data = await Notice.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data.id} deleted`,
  });
};

module.exports = deleteNotice;

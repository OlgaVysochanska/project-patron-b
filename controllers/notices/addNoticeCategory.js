// створити ендпоінт для додавання оголошень відповідно до обраної категорії
const { Notice } = require("../../models/notice");
const { HttpError } = require("../../helpers");

const addNoticeCategory = async (req, res) => {
  //   const { _id: owner } = req.user;
  //   const { page = 1, limit = 20 } = req.query;
  //   const skip = (page - 1) * limit;
  //   const data = await Notice.find({ owner }, { skip, limit });
  //   if (!data) {
  //     throw HttpError(404, "Not found");
  //   }
  //   res.status(200).json(data);
};

module.exports = addNoticeCategory;

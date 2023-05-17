const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");


const getAllNotice = async (req, res) => {
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Notice.find({ skip, limit });
  res.status(200).json(data);
};

module.exports = getAllNotice;
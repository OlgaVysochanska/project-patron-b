const New = require("../../models/news");

const getNews = async (req, res) => {
  // const result = await New.find().sort({ date: -1 });

  // res.status(200).json(result);
  const { page = 1, limit = 6, ...query } = req.query;
  const skip = (page - 1) * limit;

  const result = await New.find({ ...query }, "-createdAt -updatedAt", {
    skip,
    limit,
  }).sort({ date: -1 });

  res.json(result);
};

const getByKeywords = async (req, res) => {
  const { page = 1, limit = 6, ...query } = req.query;
  const skip = (page - 1) * limit;

  const filteredData = await New.find(
    {
      title: { $regex: query.search, $options: "i" },
    },
    "-createdAt -updatedAt",
    {
      skip,
      limit,
    }
  )
    .sort({ date: -1 })
    .exec();
  // Поверніть результат у відповідь у форматі JSON
  res.json(filteredData);
};

module.exports = { getNews, getByKeywords };

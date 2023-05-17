const New = require("../../models/news");

const getNews = async (req, res) => {
  const { page = 1, limit = 6, ...query } = req.query;
  const skip = (page - 1) * limit;

  try {
    const result = await New.find({ ...query }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).sort({ date: -1 });

    const totalItems = await New.countDocuments();
    const totalPages = Math.ceil(totalItems / limit);

    res.status(200).json({
      totalItems,
      totalPages,
      currentPage: page,
      data: result,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const getByKeywords = async (req, res) => {
  const { page = 1, limit = 6, ...query } = req.query;
  const skip = (page - 1) * limit;

  try {
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

    const totalItems = await New.countDocuments({
      title: { $regex: query.search, $options: "i" },
    });

    const totalPages = Math.ceil(totalItems / limit);

    res.json({
      totalItems,
      totalPages,
      currentPage: page,
      data: filteredData,
    });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getNews, getByKeywords };

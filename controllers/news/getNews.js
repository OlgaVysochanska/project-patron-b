const New = require("../../models/news");

const getNews = async (req, res) => {
  const { page, pageSize } = req.query;
  const pageNumber = parseInt(page) || 1;
  const limit = parseInt(pageSize) || 10;
  const skip = (pageNumber - 1) * limit;

  try {
    const totalCount = await New.countDocuments();

    const news = await New.find()
      .sort({ date: -1 })
      .skip(skip)
      .limit(limit);

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      totalItems: totalCount,
      currentPage: pageNumber,
      totalPages: totalPages,
      pageSize: limit,
      news: news,
    });
  } catch (error) {
    res.status(500).json({ error: "Помилка сервера" });
  }
};

const getByKeywords = async (req, res) => {
  const { page = 1, limit = 10, ...query } = req.query;
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
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

module.exports = { getNews, getByKeywords };

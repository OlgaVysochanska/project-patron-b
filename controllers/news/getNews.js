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

module.exports = getNews;
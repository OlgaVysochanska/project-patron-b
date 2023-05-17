const Sponsor = require("../../models/friends");

const getFriends = async (req, res) => {
  const { page, pageSize } = req.query;
  const pageNumber = parseInt(page) || 1;
  const limit = parseInt(pageSize) || 10;

  const skip = (pageNumber - 1) * limit;

  try {
    const totalCount = await Sponsor.countDocuments();

    const sponsors = await Sponsor.find().skip(skip).limit(limit);

    const totalPages = Math.ceil(totalCount / limit);

    res.status(200).json({
      totalItems: totalCount,
      currentPage: pageNumber,
      totalPages: totalPages,
      pageSize: limit,
      friends: sponsors,
    });
  } catch (error) {
    res.status(500).json({ error: "Помилка сервера" });
  }
};

module.exports = getFriends;
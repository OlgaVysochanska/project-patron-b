const Sponsor = require("../../models/friends");

const getFriends = async (req, res) => {
  const { page = 1, limit = 9, ...query } = req.query;
  const skip = (page - 1) * limit;

  try {
    const result = await Sponsor.find({ ...query }, "-createdAt -updatedAt", {
      skip,
      limit,
    }).sort({ date: -1 });

    const totalItems = await Sponsor.countDocuments();
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

module.exports = getFriends;

const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getAllNotice = async (req, res) => {
  const { page = 1, limit = 20, search, category } = req.query;
  const skip = (page - 1) * limit;
  const data = category
    ? await Notice.find({ category }, null, { skip, limit })
    : await Notice.find({ skip, limit });

  if (search) {
    const searchLow = search.toLowerCase();
    const findSearch = [];
    for (const dat of data) {
      let datName = dat.name.toLowerCase();
      let datLocat = dat.location.toLowerCase();
      let datSex = dat.sex.toLowerCase();
      let datBreed = dat.breed.toLowerCase();
      if (
        datName.includes(searchLow) ||
        datLocat.includes(searchLow) ||
        datSex.includes(searchLow) ||
        datBreed.includes(searchLow)
      ) {
        findSearch.push(dat._id);
      }
    }
    const datafind = await Notice.find({ _id: findSearch }, null, {
      skip,
      limit,
    });
    if (!datafind) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(datafind);
    return;
  } else {
    res.status(200).json(data);
  }
};

module.exports = getAllNotice;

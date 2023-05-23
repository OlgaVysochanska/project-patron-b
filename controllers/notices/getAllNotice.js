const { HttpError } = require("../../helpers");
const { Notice } = require("../../models/notice");

const getAllNotice = async (req, res) => {
  const {
    page = 1,
    limit = 20,
    search,
    age,
    date,
    category = ["sell", "lost-found", "for-free"],
    sex = ["male", "female"],
  } = req.query;

  const skip = (page - 1) * limit;
  let data = await Notice.find({ category, sex }, null, { skip, limit });

  let ageData = [];

  if (age) {
    const dateTime = new Date();
    age.split(",").map((ag) => {
      switch (ag) {
        case '3-12m':
          for (const dat of data) {
            if (dateTime.getFullYear() - new Date(dat.date).getFullYear() < 1) {
              ageData.push(dat);
            }
          }
          break;

        case '1year':
          for (const dat of data) {
            if (
              dateTime.getFullYear() - new Date(dat.date).getFullYear() ===
              1
            ) {
              ageData.push(dat);
            }
          }
          break;

        case '2year':
          for (const dat of data) {
            if (
              dateTime.getFullYear() - new Date(dat.date).getFullYear() ===
              2
            ) {
              ageData.push(dat);
            }
          }
          break;
        
        default:
          throw HttpError(404, "Not found");
          break;
      }
    });
    data = ageData;
  }

  // console.log(data);

  if (search) {
    const searchLow = search.toLowerCase();
    const findSearch = [];
    for (const dat of data) {
      let datName = dat.name.toLowerCase();
      let datLocat = dat.location.toLowerCase();
      let datBreed = dat.breed.toLowerCase();
      let datTitle = dat.title.toLowerCase();
      if (
        datName.includes(searchLow) ||
        datLocat.includes(searchLow) ||
        datBreed.includes(searchLow) ||
        datTitle.includes(searchLow)
      ) {
        findSearch.push(dat);
      }
    }
    if (!findSearch) {
      throw HttpError(404, "Not found");
    }
    res.status(200).json(findSearch);
    return;
  } else {
    res.status(200).json(data);
  }
};

module.exports = getAllNotice;

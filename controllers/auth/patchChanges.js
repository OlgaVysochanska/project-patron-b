const { User } = require("../../models");

const patchChanges = async (req, res) => {
  const { _id, favoriteNotice: oldFavorite } = req.user;

  const { favoriteNotice } = req.body;
  if (favoriteNotice) {
    if (oldFavorite.includes(favoriteNotice)) {
      oldFavorite.splice(oldFavorite.indexOf(favoriteNotice), 1)
    } else {
      oldFavorite.splice(1, 0, favoriteNotice);
    }    
    await User.findByIdAndUpdate(_id, { favoriteNotice: oldFavorite });
    res.json(favoriteNotice);
  } else {
    await User.findByIdAndUpdate(_id, req.body);
    const result = await User.find(_id);

    res.json(result);
  }
};

module.exports = patchChanges;

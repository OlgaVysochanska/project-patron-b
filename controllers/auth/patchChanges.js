const { User } = require("../../models");

const patchChanges = async (req, res) => {
  const { _id, favoriteAbs: oldFavorite } = req.user;

  const { favoriteAbs } = req.body;
  if (favoriteAbs) {
    if (oldFavorite.includes(favoriteAbs)) {
      oldFavorite.splice(oldFavorite.indexOf(favoriteAbs), 1)
    } else {
      oldFavorite.splice(1, 0, favoriteAbs);
    }    
    await User.findByIdAndUpdate(_id, { favoriteAbs: oldFavorite });
    res.json(oldFavorite);
  } else {
    await User.findByIdAndUpdate(_id, req.body);

    res.json(req.body);
  }
};

module.exports = patchChanges;

const User = require("../../models/user-model");

const patchChanges = async (req, res) => {
  const { _id } = req.user;

  await User.findByIdAndUpdate(_id, req.body);

  res.json(req.body);
};

module.exports = patchChanges;

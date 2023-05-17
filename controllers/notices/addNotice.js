const { Notice } = require("../../models/notice");

const addNotice = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Notice.create({
    ...req.body,
    owner,
  });
  res.status(201).json(data);
};

module.exports = addNotice;

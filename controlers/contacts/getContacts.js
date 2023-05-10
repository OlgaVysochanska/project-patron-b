const HttpError = require("../../Helpers/HttpError");

const Contact = require("../../models/contacts-model");

const getContacts = async (req, res, next) => {
  const { _id: owner } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;
  const skip = (page - 1) * limit;
  const result = await Contact.find({owner, favorite}, "", {skip, limit});
  if (!result) {
    throw HttpError(400);
  }
  res.json(result);
};

module.exports = getContacts;
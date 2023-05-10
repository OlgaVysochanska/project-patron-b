const HttpError = require("../../Helpers/HttpError");

const Contact = require("../../models/contacts-model");

const getContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findOne({ _id: contactId });
  if (!result) {
    throw HttpError(404, `Contact id:${contactId} not found`);
  }
  res.json(result);
};

module.exports = getContactById;
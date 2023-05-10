const Contact = require("../../models/contacts-model");

const deleteContactById = async (req, res, next) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndRemove({ _id: contactId });
  if (!result) {
    return res.status(404).json({
      message: `Contact with id:${contactId} not found`,
    });
  }
  res.status(200).json({
    message: `contact deleted`,
  });
};

module.exports = deleteContactById;
const Contact = require("../../models/contacts-model");

const updateContactById = async (req, res) => {
  const { contactId } = req.params;
  const result = await Contact.findByIdAndUpdate({ _id: contactId }, req.body, {new:true});
  if (!result) {
    return res.status(404).json({
      message: `Contact with id:${contactId} not found`,
    });
  }
  res.json(result);
};

module.exports = updateContactById;
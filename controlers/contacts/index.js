const getContacts = require("./getContacts");
const getContactById = require("./getContactById");
const addContactCC = require("./addContactCC");
const deleteContactById = require("./deleteContactById");
const updateContactById = require("./updateContactById");
const updateStatusContact = require("./updateStatusContact")

const ctrlWrapper = require("../../utils/ctrlWrapper");

module.exports = {
  getContacts: ctrlWrapper(getContacts),
  getContactById: ctrlWrapper(getContactById),
  addContactCC: ctrlWrapper(addContactCC),
  deleteContactById: ctrlWrapper(deleteContactById),
  updateContactById: ctrlWrapper(updateContactById),
  updateStatusContact: ctrlWrapper(updateStatusContact),
};

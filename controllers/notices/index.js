const { ctrlWrapper } = require("../../helpers");
const addNotice = require("./addNotice");
const getAllNotice = require("./getAllNotice");



module.exports = {
    getAllNotice: ctrlWrapper(getAllNotice),
    addNotice: ctrlWrapper(addNotice),
}
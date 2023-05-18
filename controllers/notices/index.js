const { ctrlWrapper } = require("../../helpers");
const addNotice = require("./addNotice");
const getAllNotice = require("./getAllNotice");
const deleteNotice = require("./deleteNotice");
const getTitle = require("./getTitle");
const getNoticeOnlyAddUser = require("./getNoticeOnlyUser");
const getCategory = require("./getCategory");
const getOne = require("./getOne");
const updateStatusFavorite = require("./patchFavorite");
const getFavoriteUsers = require("./getFavoriteUsers");
const deleteFavoriteUsers = require("./deleteFavorite");

module.exports = {
  getAllNotice: ctrlWrapper(getAllNotice),
  addNotice: ctrlWrapper(addNotice),
  deleteNotice: ctrlWrapper(deleteNotice),
  getTitle: ctrlWrapper(getTitle),
  getNoticeOnlyAddUser: ctrlWrapper(getNoticeOnlyAddUser),
  getCategory: ctrlWrapper(getCategory),
  getOne: ctrlWrapper(getOne),
  updateStatusFavorite: ctrlWrapper(updateStatusFavorite),
  getFavoriteUsers: ctrlWrapper(getFavoriteUsers),
  deleteFavoriteUsers: ctrlWrapper(deleteFavoriteUsers),
};

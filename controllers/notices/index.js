const { ctrlWrapper } = require("../../helpers");
const addNotice = require("./addNotice");
const getAllNotice = require("./getAllNotice");
const deleteNotice = require("./deleteNotice");
const getTitle = require("./getTitle");
const getNoticeOnlyAddUser = require("./addNoticeCategory");
const getCategory = require("./getCategory");
const getOne = require("./getOne");
const updateStatusFavorite = require("./patchFavorite");
const getFavoriteUsers = require("./getFavoriteUsers");
const deleteFavoriteNotices = require("./deleteFavorite");
const addNoticeCategory = require("./addNoticeCategory");
const addCategory = require("./addCategory");
const getUsersNotice = require("./getUsersNotice");
const getFavoriteUsersArray = require("./getFavoriteUsersArray");

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
  deleteFavoriteNotices: ctrlWrapper(deleteFavoriteNotices),
  addNoticeCategory: ctrlWrapper(addNoticeCategory),
  addCategory: ctrlWrapper(addCategory),
  getUsersNotice: ctrlWrapper(getUsersNotice),
  getFavoriteUsersArray: ctrlWrapper(getFavoriteUsersArray),
};

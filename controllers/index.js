const {
  current,
  login,
  logout,
  patchChanges,
  register,
  updateAvatar,
} = require("./auth");
const { addPet, deletePet, getAllPets } = require("./pets");
const { getFriends } = require("./friends");
const { getNews } = require("./news");
const {
  getAllNotice,
  addNotice,
  deleteNotice,
  getTitle,
  getNoticeOnlyAddUser,
  getCategory,
  getOne,
  updateStatusFavorite,
  getFavoriteUsers,
  deleteFavoriteNotices,
  addNoticeCategory,
  addCategory,
  getUsersNotice,
  getFavoriteUsersArray
} = require("./notices");

module.exports = {
  current,
  login,
  logout,
  patchChanges,
  register,
  updateAvatar,
  getAllPets,
  addPet,
  deletePet,
  getFriends,
  getNews,
  getAllNotice,
  addNotice,
  deleteNotice,
  getTitle,
  getNoticeOnlyAddUser,
  getCategory,
  getOne,
  updateStatusFavorite,
  getFavoriteUsers,
  deleteFavoriteNotices,
  addNoticeCategory,
  addCategory,
  getUsersNotice,
  getFavoriteUsersArray,
};

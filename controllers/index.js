
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
};

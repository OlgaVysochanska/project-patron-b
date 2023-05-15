const ctrlWrapper = require("../helpers/ctrlWrapper");
const { addPet, deletePet, getAllPets } = require("./pets");

module.exports = {
  getAllPets: ctrlWrapper(getAllPets),
  addPet: ctrlWrapper(addPet),
  deletePet: ctrlWrapper(deletePet),
};

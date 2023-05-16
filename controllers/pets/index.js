const { ctrlWrapper } = require("../../helpers");
const { addPet, deletePet, getAllPets } = require("./pets");

module.exports = {
  getAllPets: ctrlWrapper(getAllPets),
  addPet: ctrlWrapper(addPet),
  deletePet: ctrlWrapper(deletePet),
};

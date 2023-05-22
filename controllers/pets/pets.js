const { HttpError } = require("../../helpers");
const { Pet } = require("../../models/pet");

const getAllPets = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 20 } = req.query;
  const skip = (page - 1) * limit;
  const data = await Pet.find({ owner: _id })
  res.status(200).json(data);
};

const addPet = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Pet.create({ ...req.body, owner });
  if (!data) {
    throw HttpError(400);
  }
  res.status(201).json(data);
};

const deletePet = async (req, res) => {
  const { id } = req.params;
  const data = await Pet.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data.name} deleted`,
  });
};

module.exports = {
  getAllPets,
  addPet,
  deletePet,
};

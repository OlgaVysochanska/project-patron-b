const { Pet } = require("../../models/pet");

const addPet = async (req, res) => {
  const { _id: owner } = req.user;
  const data = await Pet.create({ ...req.body, owner });
  res.status(201).json(data);
};

const deletePet = async (req, res) => {
  const { id } = req.params;
  const data = await Contact.findByIdAndDelete(id);
  if (!data) {
    throw HttpError(404, "Not found");
  }
  res.status(200).json({
    message: `${data} deleted`,
  });
};

module.exports = {
  addPet,
  deletePet,
};

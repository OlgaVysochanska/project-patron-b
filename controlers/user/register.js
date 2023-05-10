const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const HttpError = require("../../Helpers/HttpError");
const User = require("../../models/user-model");
const gravatar = require("gravatar");
const { nanoid } = require("nanoid");
const { sendMail } = require("../../Helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const token = jwt.sign({ email }, SECRET_KEY, {expiresIn: "23h"});
  const hashPassword = await bcrypt.hash(password, 1);

  const result = await User.create({
    ...req.body,
    token,
    password: hashPassword,
    verify: true,
  });

//    user(idUser:idUser,
// uriImage:string, 
// name:string,
// Mail:string,
// Phone:string,
// City: string,
// MyPets:[idPet,idPet],
// MyAbs:[idPet,idPet],
// Favourite:[idPet]) 
// і pets({
//   idPet: I’d,
// NamePet:string,
// Birthday: ,
// Bread: Pokémon,
// Location: Kiev,
// Sex: string,
// Category:[sell, lost, in goodhands, myPet],
// })

  res.status(201).json({
    user: {
      email: result.email,
      verify: result.verify,
      token: result.token,
    },
  });
};

module.exports = register;

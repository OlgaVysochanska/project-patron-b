const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const { User } = require("../../models");
const { HttpError } = require("../../helpers");

const { SECRET_KEY } = process.env;

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw HttpError(409, "Email in use");
  }

  const hashPassword = await bcrypt.hash(password, 1);

  const result = await User.create({
    ...req.body,
    password: hashPassword,
  });

  console.log(result)

  const payload = {
    id: result._id,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(result._id, { token });

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
      token,
    },
  });
};

module.exports = register;

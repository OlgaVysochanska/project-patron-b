const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const HttpError = require("../../Helpers/HttpError");
const User = require("../../models/user");

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

  const userLogin = await User.findOne({ email });
  console.log(SECRET_KEY)


  const payload = {
    id: userLogin._id,
  };

  const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: "23h" });

  await User.findByIdAndUpdate(userLogin._id, { token });

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

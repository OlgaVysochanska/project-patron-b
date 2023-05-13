const fs = require("fs/promises");
const path = require("path");
const { User } = require("../../models");
const Jimp = require("jimp");
const { HttpError } = require("../../helpers");

const avatarDir = path.join(__dirname, "../../", "public", "avatars");

const updateAvatar = async (req, res) => {
  const { _id } = req.user;
  const { path: tempUpload, originalname } = req.file;
  const avatarName = `${_id}_${originalname}`;
  const resultUpload = path.join(avatarDir, avatarName);
  await fs.rename(tempUpload, resultUpload);
  Jimp.read(resultUpload)
    .then((image) => {
      image.resize(300, Jimp.AUTO).write(resultUpload);
    })
    .catch(() => {
      throw HttpError(400, "Use type image: jpeg, png, bmp, tiff, gif");
    });
  const avatarURL = path.join("avatars", avatarName);
  await User.findByIdAndUpdate(_id, { avatarURL });

  res.status(200).json({
    avatarURL,
  });
};

module.exports = updateAvatar;

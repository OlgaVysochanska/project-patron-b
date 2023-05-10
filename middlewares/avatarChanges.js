const Jimp = require("jimp");

const avatarChanges = async (req, res, next) => {
  const { originalname } = req.file;
  console.log(req.file);
  Jimp.read(originalname, (err, setImage) => {
    if (err) throw err;
    setImage
      .resize(250, 250) // resize
      .quality(60) // set JPEG quality
      .write(originalname); // save
  });
};

module.exports = avatarChanges;

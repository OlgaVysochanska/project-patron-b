const current = async (req, res) => {
  const { _id, email, name, birthday, phone, city, avatarURL } = req.user;
  const { token } = req.token;

  res.status(200).json({
    _id,
    email,
    name,
    birthday,
    phone,
    city,
    avatarURL,
    token
  });
};

module.exports = current;

const HttpError = require("../../Helpers/HttpError");
const User = require("../../models/user-model");
const { sendMail } = require("../../Helpers");

const { BASE_URL } = process.env;

const resendVerify = async (req, res) => {
  const { email } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    throw HttpError(404, "Email not found");
  }

  if (user.verify) {
    throw HttpError(400, "Verification has already been passed");
  }

  const verificationEmail = {
    to: email,
    subject: "Verify email",
    html: `<a target="_blank" href="${BASE_URL}/api/auth/verify/${user.verificationToken}">Click verify email</a>`,
  };

  await sendMail(verificationEmail);

  res.status(200).json({
    message: "Verification email sent",
  });
};

module.export = resendVerify;

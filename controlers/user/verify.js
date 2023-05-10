const User = require("../../models/user-model");
const HttpError = require("../../Helpers/HttpError");

const verify = async (req, res) => {
    const { verificationToken } = req.params;
    console.log(verificationToken)
    const user = await User.findOne({ verificationToken })
    if (!user) {
        throw HttpError(404, "Email not found")
    }

    await User.findByIdAndUpdate(user._id, { verify: true, verificationToken: "" })
    
    res.json({
        message: "Email verify success"
    })
}

module.exports = verify;
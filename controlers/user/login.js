const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const HttpError = require("../../Helpers/HttpError");
const User = require("../../models/user-model");


// записується в env
const SECRET_KEY = '1234556';


const login = async (req, res) => {
    const { email, password } = req.body;
    
    const user = await User.findOne({email})

    if (!user) {
        throw HttpError(401, "Email or password is wrong")
    }

    if (!user.verify) {
        throw HttpError(401, "Email not verify")
    }
    
    const passwordCompare = await bcrypt.compare(password, user.password);

    if (!passwordCompare) {
        throw HttpError(401, "Email or password is wrong")
    }

    const payload = {
        id: user._id,
    }

    const token = jwt.sign(payload, SECRET_KEY, {expiresIn: "23h"});
    await User.findByIdAndUpdate(user._id, {token})

    res.status(201).json({
        token,
        user: {
            email: user.email,
            subscription: user.subscription
        }
    })
};

module.exports = login;
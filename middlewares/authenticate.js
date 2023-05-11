const jwt = require('jsonwebtoken');
const { HttpError } = require('../Helpers');
const User = require('../models/user-model');

// const { SECRET_KEY } = process.env;

const authenticate = async (req, res, next) => {
    const { authorization = "" } = req.headers;
    const [bearer, token] = authorization.split(" ");

    if (bearer !== "Bearer") {
        next(HttpError(401))
    }

    try {
        const { id } = jwt.verify(token, process.env.SECRET_KEY);
        const user = await User.findById(id);
        if (!user || !user.token) {
            next(HttpError(401));
        }
        req.user = user;
        // передаємо в req сам токен
        req.token = token;
        next();
    } catch {
        next(HttpError(401))
    }
}

module.exports = authenticate;
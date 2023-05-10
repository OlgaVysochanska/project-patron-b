const { HttpError } = require("../Helpers");

const subscriptionMiddware = async (req, res, next) => {
    const { subscription } = req.body;
    if (subscription === req.user.subscription) {
        next(HttpError(400))
    }
    switch (subscription) {
        case "starter":
            next()
            break
        case "pro":
            next()
            break
        case "business":
            next()
            break
        default:
            next(HttpError(400))
    }       
}

module.exports = subscriptionMiddware;
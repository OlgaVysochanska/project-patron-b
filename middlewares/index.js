const authenticate = require('./authenticate');
const avatarChanges = require('./avatarChanges');
const subscriptionMiddware = require('./subscriptionMiddware');
const upload = require('./upload');


module.exports = {
    authenticate,
    subscriptionMiddware,
    upload,
    avatarChanges
}
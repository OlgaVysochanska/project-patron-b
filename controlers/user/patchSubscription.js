const User = require("../../models/user-model");

const patchSubscription = async (req, res) => {
  const { _id } = req.user;
    const { subscription } = req.body;
    
   await User.findByIdAndUpdate(_id, { subscription: subscription });

  res.json(subscription);
};

module.exports = patchSubscription;

const express = require("express");

const { validateBody } = require('../../utils');

const authSchema = require('../../schemas/authSchema');
const emailSchema = require('../../schemas/emailSchema')
const ctrl = require("../../controlers/user");
const { authenticate, upload } = require("../../middlewares");

const router = express.Router();


router.post("/register", validateBody(authSchema), ctrl.register);

router.post("/login", validateBody(authSchema), ctrl.login);

router.get("/current", authenticate, ctrl.current);


router.post("/logout", authenticate, ctrl.logout);

router.patch("/", authenticate, ctrl.patchChanges)

router.patch("/avatars", authenticate, upload.single("avatar"), ctrl.updateAvatar)

module.exports = router;
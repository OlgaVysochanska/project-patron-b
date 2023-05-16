const express = require("express");
const ctrlWrapper = require("../../helpers/ctrlWrapper");
const { getFriends } = require("../../controllers");

const router = express.Router();

router.get("/", ctrlWrapper(getFriends));

module.exports = router;
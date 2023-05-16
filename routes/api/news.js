const express = require("express");
const { getNews, getByKeywords } = require("../../controllers/news/getNews");
const ctrlWrapper = require("../../helpers/ctrlWrapper");

const router = express.Router();

router.get("/", ctrlWrapper(getNews));
router.get("/search", ctrlWrapper(getByKeywords));

module.exports = router;

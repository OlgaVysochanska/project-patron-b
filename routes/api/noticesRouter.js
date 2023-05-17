const express = require("express");
const noticeRouter = express.Router();
const { validateBody } = require("../../utils");
const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/pet");
const controllers = require("../../controllers");

noticeRouter.get("/", controllers.getAllNorice);

noticeRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addPet
);

noticeRouter.delete("/:id", authenticate, controllers.deleteNotice);

module.exports = noticeRouter;
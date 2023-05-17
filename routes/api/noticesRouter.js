const express = require("express");
const noticesRouter = express.Router();
const { validateBody } = require("../../utils");
const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/notice");
const controllers = require("../../controllers");

noticesRouter.get("/", controllers.getAllNotice);

noticesRouter.post(
  "/",
  authenticate,
  // validateBody(schemas.addSchema),
  controllers.addNotice
);

// noticesRouter.delete("/:id", authenticate, controllers.deleteNotice);

module.exports = noticesRouter;
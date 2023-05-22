const express = require("express");
const noticesRouter = express.Router();
const { validateBody } = require("../../utils");
const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/notice");
const controllers = require("../../controllers");

noticesRouter.get("/", controllers.getAllNotice);

noticesRouter.get("/current", authenticate, controllers.getUsersNotice);

noticesRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addNotice
);

noticesRouter.delete("/:id", authenticate, controllers.deleteNotice);

noticesRouter.get("/title", controllers.getTitle);

noticesRouter.get("/selected", authenticate, controllers.getNoticeOnlyAddUser);

noticesRouter.get("/category", controllers.getCategory);

noticesRouter.post("/category", authenticate, controllers.addCategory);

noticesRouter.get("/oneadvertisement", controllers.getOne);

noticesRouter.patch(
  "/favorite/:id",
  authenticate,
  controllers.updateStatusFavorite
);

// noticesRouter.get("/favorite", authenticate, controllers.getFavoriteUsers);

noticesRouter.get("/favorite", authenticate, controllers.getFavoriteUsersArray);

noticesRouter.delete(
  "/favorite/:id",
  authenticate,
  controllers.deleteFavoriteNotices
);

module.exports = noticesRouter;

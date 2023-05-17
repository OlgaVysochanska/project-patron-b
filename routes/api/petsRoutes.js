const express = require("express");
const petsRouter = express.Router();
const { validateBody } = require("../../utils");
const { authenticate } = require("../../middlewares");

const { schemas } = require("../../models/pet");
const controllers = require("../../controllers");

petsRouter.get("/", authenticate, controllers.getAllPets);

petsRouter.post(
  "/",
  authenticate,
  validateBody(schemas.addSchema),
  controllers.addPet
);

petsRouter.delete("/:id", authenticate, controllers.deletePet);

module.exports = petsRouter;

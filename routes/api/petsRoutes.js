const express = require("express");
const petsRouter = express.Router();
const { validateBody } = require("../../utils");

const { schemas } = require("../../models/pet");
const controllers = require("../../controllers");

petsRouter.post("/", validateBody(schemas.addSchema), controllers.addPet);

petsRouter.delete("/", validateBody(schemas.addSchema), controllers.deletePet);

module.exports = petsRouter;

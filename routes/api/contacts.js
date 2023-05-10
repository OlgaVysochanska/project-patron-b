const express = require("express");

const ctrl = require("../../controlers/contacts");

const { validateBody } = require('../../utils');

const addSchema = require('../../schemas/contactsSchema');
const { authenticate } = require("../../middlewares");

const router = express.Router();


router.get("/", authenticate, ctrl.getContacts);

router.get("/:contactId", authenticate, ctrl.getContactById);

router.post("/", authenticate, validateBody(addSchema), ctrl.addContactCC);

router.delete("/:contactId", authenticate, ctrl.deleteContactById);

router.put("/:contactId", authenticate, validateBody(addSchema), ctrl.updateContactById);

router.patch("/:contactId/favorite", authenticate, ctrl.updateStatusContact)

module.exports = router;

const authenticate = require("./authenticate");
const upload = require("./upload");
const handleSchemaErrors = require( "./handleSchemaErrors" );
const passport = require("./google-authenticate")

module.exports = {
  authenticate,
  upload,
  handleSchemaErrors,
  passport
};

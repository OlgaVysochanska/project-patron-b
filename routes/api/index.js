const petsRouter = require("./petsRoutes");
const authRouter = require("./authRouter");
const noticesRouter = require("./noticesRouter");
const friendsRouter = require("./friends");
const newsRouter = require("./news");

module.exports = {
  authRouter,
  noticesRouter,
  friendsRouter,
  newsRouter,
  petsRouter,
};

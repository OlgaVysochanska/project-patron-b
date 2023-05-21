const mongoose = require("mongoose");

const app = require("./app");

// зберігається в env
// const DB_HOST = "mongodb+srv://ivanpanin:N9qUAWfq3gBavJnq@cluster0.amkeg2b.mongodb.net/db-cyber-bobik?retryWrites=true&w=majority";

const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {
    app.listen(5000);
    console.log("Database connection successful");
  })
  .catch((error) => {
    console.log(error.message);
    process.exit(1);
  });

// https://patron-back.onrender.com

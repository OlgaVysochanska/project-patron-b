const mongoose = require("mongoose");

const { DB_HOST } = process.env;

const connectDB = async () => {
  try {
    await mongoose.connect(DB_HOST);
  } catch (error) {
    console.log(error.message);
    process.exit(1);
  }
};

module.exports = connectDB;

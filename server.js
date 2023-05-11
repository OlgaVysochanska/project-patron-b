const app = require("./app");

const connectDB = require("./config");

connectDB();

const { PORT } = process.env;

app.listen(PORT, () => {
  console.log("Server running. Use our API on port: 5000");
});

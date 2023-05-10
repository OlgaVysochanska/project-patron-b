const mongoose = require('mongoose');

const app = require('./app');

// зберігається в env
const DB_HOST = "mongodb+srv://ivanpanin:N9qUAWfq3gBavJnq@cluster0.amkeg2b.mongodb.net/db-contacts?retryWrites=true&w=majority";

mongoose.set('strictQuery', true);

mongoose.connect(DB_HOST)
  .then(() => {
    app.listen(3000);
    console.log("Database connection successful")
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
})


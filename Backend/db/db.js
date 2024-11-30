const mongoose = require("mongoose");
require("dotenv").config();
const connectDB = async () => {
  mongoose
    .connect(process.env.DB_CONNECT)
    .then(() => {
      console.log("Connected to DB");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = connectDB;

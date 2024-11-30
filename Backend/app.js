const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./db/db");

const userRoutes = require("./routes/user.routes");
app.use(cors());
app.use(express.json());

app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/user", userRoutes);

module.exports = app;

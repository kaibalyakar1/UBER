const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];
  if (!token) {
    res.status(400).send({ error: "User not authenticated" });
  }
  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded._id);
    req.user = user;
    next();
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
};

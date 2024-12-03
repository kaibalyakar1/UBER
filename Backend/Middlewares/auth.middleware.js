const userModel = require("../models/user.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");

module.exports.authUser = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).send({ error: "User not authenticated" }); // Return to prevent further execution
  }

  const isBlackListed = await blacklistTokenModel.findOne({ token: token });
  if (isBlackListed) {
    return res.status(400).send({ error: "User not authenticated" }); // Return here as well
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await userModel.findById(decoded._id);
    if (!user) {
      return res.status(400).send({ error: "User not authenticated" }); // Return on user not found
    }

    req.user = user; // Attach the user to the request object
    next(); // Pass control to the next middleware
  } catch (err) {
    return res.status(400).send({ error: err.message }); // Handle errors properly
  }
};

module.exports.authCaptain = async (req, res, next) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res.status(400).send({ error: "User not authenticated" }); // Return to prevent further execution
  }

  const isBlackListed = await blacklistTokenModel.findOne({ token: token });
  if (isBlackListed) {
    return res.status(400).send({ error: "User not authenticated" }); // Return here as well
  }

  try {
    const decoded = jwt.verify(token, process.env.SECRET_KEY);
    const user = await captainModel.findById(decoded._id);
    if (!user) {
      return res.status(400).send({ error: "User not authenticated" }); // Return on user not found
    }

    req.user = user; // Attach the user to the request object
    next(); // Pass control to the next middleware
  } catch (err) {
    return res.status(400).send({ error: err.message }); // Handle errors properly
  }
};

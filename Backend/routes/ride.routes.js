const express = require("express");
const router = express.Router();
const { createRide } = require("../controllers/ride.controller");
const authMiddleware = require("../Middlewares/auth.middleware");
router.post(
  "/create-ride",

  authMiddleware.authUser,
  createRide
);

module.exports = router;

const express = require("express");
const router = express.Router();
const {
  createRide,
  getFareController,
  getFare,
} = require("../controllers/ride.controller");
const authMiddleware = require("../Middlewares/auth.middleware");

// Route to create a new ride
router.post("/create-ride", authMiddleware.authUser, createRide);

// Route to calculate fare
router.post("/get-fare", authMiddleware.authUser, getFare);

module.exports = router;

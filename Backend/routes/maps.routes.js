const express = require("express");
const router = express.Router();
const authMiddleware = require("../Middlewares/auth.middleware");
const mapController = require("../controllers/map.controller");

router.get(
  "/get-coordinates",
  authMiddleware.authUser,
  mapController.getCoordinates
);

router.get("/get-distance", authMiddleware.authUser, mapController.getDistance);

router.get(
  "/get-suggestions",
  authMiddleware.authUser,
  mapController.getSuggestions
);

module.exports = router;
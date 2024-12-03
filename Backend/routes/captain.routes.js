const express = require("express");
const userValidator = require("../Validators/user.validator");
const {
  registerCaptain,
  loginCaptain,
  getCaptainProfile,
  logoutCaptain,
} = require("../controllers/captain.controller");
const { authCaptain } = require("../Middlewares/auth.middleware");
const router = express.Router();

router.post("/register", userValidator, registerCaptain);
router.post("/login", userValidator, loginCaptain);
router.get("/profile", authCaptain, getCaptainProfile);
router.post("/logout", authCaptain, logoutCaptain);

module.exports = router;

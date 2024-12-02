const express = require("express");
const router = express.Router();
const validator = require("../Validators/user.validator");
const {
  registerUser,
  loginUser,
  getUserProfile,
  logoutUser,
} = require("../controllers/user.controller");
const { authUser } = require("../Middlewares/auth.middleware");

router.post("/register", validator, registerUser);
router.post("/login", validator, loginUser);
router.get("/profile", authUser, getUserProfile);
router.post("/logout", authUser, logoutUser);
module.exports = router;

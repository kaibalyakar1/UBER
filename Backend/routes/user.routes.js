const express = require("express");
const router = express.Router();
const validator = require("../Validators/user.validator");
const { registerUser } = require("../controllers/user.controller");

router.post("/register", validator, registerUser);
module.exports = router;

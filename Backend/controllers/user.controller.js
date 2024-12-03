const userModel = require("../models/user.model");
const validator = require("../Validators/user.validator");

const blackList = require("../models/blacklistToken.model");
module.exports.registerUser = async (req, res, next) => {
  try {
    // validator(req.body);

    const { firstName, lastName, email, password } = req.body;

    if (!firstName || !lastName || !email || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      fullName: {
        firstName,
        lastName,
      },
      email,
      password: hashedPassword,
    });

    const token = await user.generateAuthToken();
    await user.save();

    res
      .status(201)
      .send({ user, token, message: "User registered successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.loginUser = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email }).select("+password");
    if (!user) {
      return res.status(404).send({ error: "User not found" });
    }

    const isMatch = await user.comparePassword(password);
    if (!isMatch) {
      return res.status(400).send({ error: "Invalid credentials" });
    }
    const token = await user.generateAuthToken();
    res.cookie("token", token);
    res
      .status(200)
      .send({ user, token, message: "User logged in successfully" });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

module.exports.getUserProfile = async (req, res, next) => {
  res.status(200).send({ user: req.user });
};

module.exports.logoutUser = async (req, res, next) => {
  res.clearCookie("token");
  const token = req.cookies.token || req.headers.authorization.split(" ")[1];

  await blackList.create({ token: token });
  res.status(200).send({ message: "User logged out successfully" });
};

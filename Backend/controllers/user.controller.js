const userModel = require("../models/user.model");
const validator = require("../Validators/user.validator");

const blackList = require("../models/blacklistToken.model");
const blacklistTokenModel = require("../models/blacklistToken.model");
module.exports.registerUser = async (req, res, next) => {
  try {
    // validator(req.body);

    const {
      fullName: { firstName, lastName },
      email,
      password,
    } = req.body;

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
  try {
    const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

    if (!token) {
      console.log("Token not provided during logout");
      return res.status(400).send({ error: "Token not found" });
    }

    console.log("Received token for logout:", token);

    const existingToken = await blacklistTokenModel.findOne({ token });
    console.log("Existing token status in blacklist:", existingToken);

    if (!existingToken) {
      console.log("Adding token to blacklist");
      await blacklistTokenModel.create({ token });
    }

    console.log("Token added to blacklist successfully");
    res.clearCookie("token");
    res.status(200).send({ message: "User logged out successfully" });
  } catch (error) {
    console.error("Error during logout process:", error);
    res.status(500).send({ message: "An error occurred during logout" });
  }
};

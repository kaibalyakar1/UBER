const blacklistTokenModel = require("../models/blacklistToken.model");
const captainModel = require("../models/captain.model");
const captain = require("../models/captain.model");

module.exports.registerCaptain = async (req, res) => {
  try {
    const {
      fullName: { firstName, lastName },
      email,
      password,
      vehicle: { color, capacity, plate, vehicleType },
    } = req.body;

    // Validate request data
    if (
      !firstName ||
      !lastName ||
      !email ||
      !password ||
      !color ||
      !capacity ||
      !plate ||
      !vehicleType
    ) {
      return res.status(400).send({ error: "All fields are required." });
    }

    // Check if captain already exists
    const existingCaptain = await captainModel.findOne({ email });
    if (existingCaptain) {
      return res
        .status(400)
        .send({ error: "Captain with this email already exists." });
    }

    // Hash the password
    const hashedPassword = await captainModel.hashPassword(password);

    // Create a new captain instance
    const newCaptain = new captainModel({
      fullName: { firstName, lastName },
      email,
      password: hashedPassword,
      vehicle: { color, capacity, plate, vehicleType },
    });

    // Save the captain to the database
    await newCaptain.save();

    // Generate an auth token
    const token = newCaptain.generateAuthToken();

    // Return the captain details and token
    res.status(201).send({
      message: "Captain registered successfully.",
      captain: {
        id: newCaptain._id,
        fullName: newCaptain.fullName,
        email: newCaptain.email,
        vehicle: newCaptain.vehicle,
        status: newCaptain.status,
      },
      token,
    });
  } catch (error) {
    console.error("Error registering captain:", error.message);
    res.status(500).send({ error: "Internal server error." });
  }
};

module.exports.loginCaptain = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Validate request data
    if (!email || !password) {
      return res
        .status(400)
        .send({ error: "Email and password are required." });
    }

    // Find captain by email
    const captain = await captainModel.findOne({ email }).select("+password");
    if (!captain) {
      return res.status(400).send({ error: "Invalid email or password." });
    }

    // Compare password
    const isPasswordValid = await captain.comparePassword(password);
    if (!isPasswordValid) {
      return res.status(400).send({ error: "Invalid email or password." });
    }

    // Generate JWT token
    const token = captain.generateAuthToken();

    // Respond with token and captain details
    res.status(200).send({
      message: "Login successful.",
      token,
      captain: {
        id: captain._id,
        fullName: captain.fullName,
        email: captain.email,
        vehicle: captain.vehicle,
        status: captain.status,
      },
    });
  } catch (error) {
    console.error("Error during login:", error.message);
    res.status(500).send({ error: "Internal server error." });
  }
};

module.exports.getCaptainProfile = async (req, res) => {
  try {
    // Assuming the captain details are already attached to the request object by middleware
    res.status(200).send({ captain: req.user });
  } catch (error) {
    console.error("Error fetching captain profile:", error.message);
    res.status(500).send({ error: "Internal server error." });
  }
};

module.exports.logoutCaptain = async (req, res) => {
  const token = req.cookies.token || req.headers.authorization?.split(" ")[1];

  await blacklistTokenModel.create({ token: token });
  res.clearCookie("token");
  res.status(200).send({ message: "Captain logged out successfully" });
};

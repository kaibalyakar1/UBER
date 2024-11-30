const userModel = require("../models/user.model");
const validator = require("../Validators/user.validator");
module.exports.registerUser = async (req, res) => {
  try {
    // validator(req.body);

    const { fullName, email, password } = req.body;

    if (!fullName || !email || !password) {
      return res.status(400).send({ error: "All fields are required" });
    }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userModel.create({
      fullName,
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

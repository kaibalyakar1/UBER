const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongoose.Schema(
  {
    fullName: {
      firstName: {
        type: String,
        required: true,
      },
      lastName: {
        type: String,
        required: true,
      },
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    socketId: {
      type: String,
    },
    status: {
      type: String,
      enum: ["active", "inactive"],
      default: "inactive",
    },
    vehicle: {
      color: {
        type: String,
        required: true,
      },
      capacity: {
        // Fixed typo
        type: Number,
        required: true,
      },
      plate: {
        type: String,
        required: true,
      },
      vehicleType: {
        type: String,
        required: true,
        enum: ["motorcycle", "car", "auto"],
      },
    },
    location: {
      lat: {
        type: Number,
        required: false, // Adjusted to optional
      },
      long: {
        type: Number,
        required: false, // Adjusted to optional
      },
    },
  },
  { timestamps: true }
);

// Instance method for generating auth token
captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY, {
    expiresIn: "1d",
  });
  return token;
};

// Instance method for password comparison
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
};

// Static method for hashing password
captainSchema.statics.hashPassword = async function (password) {
  if (!password) {
    throw new Error("Password is required for hashing.");
  }
  return await bcrypt.hash(password, 10);
};

const captainModel = mongoose.model("captain", captainSchema);

module.exports = captainModel;

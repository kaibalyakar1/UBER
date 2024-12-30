const { sign } = require("jsonwebtoken");
const mongoose = require("mongoose");

const rideSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  captain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Captain",
  },
  pickup: {
    type: String,
    required: true,
  },
  vehicleType: { type: String, required: true },
  destination: {
    type: String,
    required: true,
  },
  fare: {
    type: Number,
  },
  status: {
    type: String,
    enum: ["pending", "accepted", "cancelled", "ongoing", "completed"],
    default: "pending",
  },
  duration: {
    type: Number,
  },
  distance: {
    type: Number,
  },
  paymentId: {
    type: String,
  },
  signature: {
    type: String,
  },
  orderId: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  otp: {
    type: String,
    select: false,
    required: true,
  },
});

module.exports = mongoose.model("Ride", rideSchema);

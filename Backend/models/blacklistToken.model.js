const mongoose = require("mongoose");

const blacklistSchema = new mongoose.Schema({
  token: {
    type: String,
    required: true,
    unique: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
    expires: "7d", // Automatically delete after 7 days
  },
});

module.exports = mongoose.model("BlacklistToken", blacklistSchema);

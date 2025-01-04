const rideModel = require("../models/ride.model");
const axios = require("axios"); // Required for making HTTP requests
const { generateOTP } = require("../services/ride.service");
const rideService = require("../services/ride.service");
// Function to calculate the fare based on distance and vehicle type
module.exports.getFare = async (req, res) => {
  const { pickup, destination } = req.body;

  try {
    const fare = await rideService.getFare(pickup, destination);
    return res.status(200).json(fare);
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
};

// Controller function to create a new ride
module.exports.createRide = async (req, res) => {
  try {
    const { pickup, destination, vehicleType } = req.body;
    console.log(req.body);
    // Validate that all required fields are provided
    if (!pickup || !destination || !vehicleType) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Calculate the distance between pickup and destination
    const distance = await calculateDistance(pickup, destination);

    // Validate that distance is a valid number
    if (typeof distance !== "number" || distance <= 0) {
      throw new Error("Invalid distance returned from map service");
    }

    // Calculate the fare using the fetched distance and vehicle type
    const fare = await getFare(distance, vehicleType);

    // Create a new ride in the database
    const newRide = await rideModel.create({
      userId: req.user._id,
      pickup,
      destination,
      fare,
      vehicleType,
      otp: generateOTP(4),
      distance,
    });

    // Respond with success message and ride details
    res
      .status(201)
      .send({ message: "Ride created successfully", ride: newRide });
  } catch (error) {
    console.error("Error creating ride:", error.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

// Helper function to calculate the distance between pickup and destination
async function calculateDistance(pickup, destination) {
  // Example of using Google Maps API to calculate distance
  const apiKey = "AIzaSyBNRo83-kRtFgNuVvIaHXSnxaxFzDnnA4Y"; // Replace with your actual Google Maps API key
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${pickup}&destinations=${destination}&key=${apiKey}`;

  try {
    // Make a request to the Google Maps Distance Matrix API
    const response = await axios.get(url);
    const distance = response.data.rows[0].elements[0].distance.value / 1000; // Convert meters to kilometers

    // Return the calculated distance in kilometers
    return distance;
  } catch (error) {
    throw new Error("Error calculating distance");
  }
}

const rideModel = require("../models/ride.model");
const mapService = require("./maps.services");
const crypto = require("crypto");

async function getFare(distance, vehicleType) {
  if (typeof distance !== "number" || distance <= 0) {
    throw new Error("Invalid distance provided to getFare");
  }

  const baseFare = { auto: 30, car: 50, motorCycle: 20 };
  const perKmRate = { auto: 10, car: 15, motorCycle: 5 };
  const perMinuteRate = { auto: 2, car: 3, motorCycle: 1.5 };

  if (
    !baseFare[vehicleType] ||
    !perKmRate[vehicleType] ||
    !perMinuteRate[vehicleType]
  ) {
    throw new Error("Invalid vehicle type");
  }

  const rideTime = 15; // Example: 15 minutes
  const fare =
    baseFare[vehicleType] +
    distance * perKmRate[vehicleType] +
    (rideTime / 60) * perMinuteRate[vehicleType];

  if (isNaN(fare)) {
    throw new Error("Fare calculation resulted in NaN");
  }

  return fare;
}

module.exports.getFare = getFare;

module.exports.createRide = async (req, res) => {
  try {
    const { pickup, destination, vehicleType } = req.body;

    if (!pickup || !destination || !vehicleType) {
      return res.status(400).send({ error: "All fields are required" });
    }

    // Fetch distance from mapService
    const { distance } = await mapService.getDistance(pickup, destination);

    if (typeof distance !== "number" || distance <= 0) {
      throw new Error("Invalid distance returned from map service");
    }

    // Calculate fare using the fetched distance
    const fare = await getFare(distance, vehicleType);

    // Create a new ride
    const newRide = await rideModel.create({
      userId: req.user._id,
      pickup,
      destination,
      fare,
    });

    res
      .status(201)
      .send({ message: "Ride created successfully", ride: newRide });
  } catch (error) {
    console.error("Error creating ride:", error.message);
    res.status(500).send({ error: "Internal server error" });
  }
};

module.exports.getFare = getFare;

function generateOTP(num) {
  function generateRandomNumber() {
    const otp = crypto
      .randomInt(Math.pow(10, num - 1), Math.pow(10, num))
      .toString();
    return otp;
  }
  return generateRandomNumber(num);
}

module.exports.generateOTP = generateOTP;

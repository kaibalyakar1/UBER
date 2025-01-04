const rideModel = require("../models/ride.model");
const mapService = require("./maps.services");
const crypto = require("crypto");

async function getFare(pickup, destination) {
  if (!pickup || !destination) {
    throw new Error("Pickup and destination are required");
  }

  const { distance, duration } = await mapService.getDistance(
    pickup,
    destination
  );

  if (typeof distance !== "number" || distance <= 0) {
    throw new Error("Invalid distance returned from map service");
  }

  // Parse the duration
  const durationInMinutes = parseDuration(duration);

  const baseFare = {
    auto: 30,
    car: 50,
    moto: 20,
  };

  const perKmRate = {
    auto: 10,
    car: 15,
    moto: 8,
  };

  const perMinuteRate = {
    auto: 2,
    car: 3,
    moto: 1.5,
  };

  const fare = {
    auto: Math.round(
      baseFare.auto +
        (distance / 1000) * perKmRate.auto +
        durationInMinutes * perMinuteRate.auto
    ),
    car: Math.round(
      baseFare.car +
        (distance / 1000) * perKmRate.car +
        durationInMinutes * perMinuteRate.car
    ),
    moto: Math.round(
      baseFare.moto +
        (distance / 1000) * perKmRate.moto +
        durationInMinutes * perMinuteRate.moto
    ),
  };

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
function parseDuration(durationStr) {
  const regex = /(\d+)\s*hours?\s*(\d+)\s*mins?/;
  const matches = durationStr.match(regex);
  if (matches) {
    const hours = parseInt(matches[1], 10);
    const minutes = parseInt(matches[2], 10);
    return hours * 60 + minutes; // Convert everything to minutes
  } else {
    throw new Error("Invalid duration format");
  }
}

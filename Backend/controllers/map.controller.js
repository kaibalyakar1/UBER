const mapService = require("../services/maps.services");

module.exports.getCoordinates = async (req, res) => {
  const { address } = req.query;
  console.log("Received address:", address); // Debug log
  try {
    const coordinates = await mapService.getAddressCoordinate(address);
    if (!coordinates) {
      return res.status(404).send({
        message: "No results found for the provided address.",
      });
    }
    console.log("Coordinates fetched:", coordinates); // Debug log
    return res.status(200).send({
      message: "Coordinates fetched successfully",
      coordinates,
    });
  } catch (error) {
    console.error("Error fetching coordinates:", error.message); // Debug log
    return res.status(500).send({
      error: "Error fetching coordinates",
      details: error.message,
    });
  }
};

module.exports.getDistance = async (req, res) => {
  const { origin, destination } = req.query;

  try {
    const distance = await mapService.getDistance(origin, destination);
    console.log("Distance fetched:", distance); // Debug log
    return res.status(200).send({
      message: "Distance fetched successfully",
      distance,
    });
  } catch (error) {
    console.error("Error fetching distance:", error.message); // Debug log
    return res.status(500).send({
      error: "Error fetching distance",
      details: error.message,
    });
  }
};

module.exports.getSuggestions = async (req, res) => {
  const { address } = req.query;
  console.log("Received address:", address); // Debug log
  try {
    const suggestions = await mapService.getSuggestions(address);
    console.log("Suggestions fetched:", suggestions); // Debug log
    return res.status(200).send({
      message: "Suggestions fetched successfully",
      suggestions,
    });
  } catch (error) {
    console.error("Error fetching suggestions:", error.message); // Debug log
    return res.status(500).send({
      error: "Error fetching suggestions",
      details: error.message,
    });
  }
};

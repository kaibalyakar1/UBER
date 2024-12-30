const getAddressCoordinate = async (address) => {
  const apiKey = "AIzaSyCnDX6SYV18AII1i4ZSucM636rN7-JsuZM";
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();
    if (data.status === "OK") {
      const location = data.results[0].geometry.location;
      return {
        latitude: location.lat,
        longitude: location.lng,
      };
    } else if (data.status === "ZERO_RESULTS") {
      return null;
    } else {
      throw new Error(`Google Maps API error: ${data.status}`);
    }
  } catch (error) {
    throw new Error("Failed to fetch address coordinates.");
  }
};

const getDistance = async (origin, destination) => {
  if (!origin || !destination) {
    throw new Error("Origin and destination are required.");
  }

  const apiKey = "AIzaSyCnDX6SYV18AII1i4ZSucM636rN7-JsuZM";
  const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(
    origin
  )}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json();

    console.log("Distance Matrix API response:", JSON.stringify(data, null, 2)); // Debug log

    if (data.status === "OK" && data.rows[0].elements[0].status === "OK") {
      const element = data.rows[0].elements[0];

      const distanceText = element.distance?.text; // Ensure distance exists
      if (!distanceText) {
        throw new Error("Distance is missing in API response.");
      }

      const distanceMatch = distanceText.match(/([\d.]+)\s*km/i);
      if (!distanceMatch) {
        throw new Error("Failed to parse distance from API response.");
      }
      const distance = parseFloat(distanceMatch[1]);

      return {
        distance,
        duration: element.duration?.text || "N/A",
      };
    } else if (data.rows[0].elements[0].status === "ZERO_RESULTS") {
      throw new Error("No route found between origin and destination.");
    } else {
      throw new Error(
        `Google Maps API error: ${
          data.rows[0].elements[0].status || data.status
        }`
      );
    }
  } catch (error) {
    console.error("Error in getDistance:", error.message);
    throw new Error("Failed to fetch distance.");
  }
};

const getSuggestions = async (address) => {
  if (!address) {
    throw new Error("Address is required.");
  }

  const apiKey = "AIzaSyCnDX6SYV18AII1i4ZSucM636rN7-JsuZM";
  const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(
    address
  )}&key=${apiKey}`;

  try {
    const response = await fetch(url);
    const data = await response.json(); // Convert response to JSON
    if (data.status === "OK") {
      return data.predictions;
    } else if (data.status === "ZERO_RESULTS") {
      return [];
    } else {
      throw new Error(`Google Maps API error: ${data.status}`);
    }
  } catch (error) {
    console.error("Error in getSuggestions:", error.message); // Debug log
    throw new Error("Failed to fetch suggestions.");
  }
};

module.exports = { getAddressCoordinate, getDistance, getSuggestions };

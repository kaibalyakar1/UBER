import React from "react";

const LocationSearchPanel = ({
  setvehcilePanel,
  setPanelOpen,
  locations,
  suggestion,
  activeField,
  setpickup,
  setdropoff,
}) => {
  const handleSuggestionClick = (suggestion) => {
    // Use the description field for the location text
    const locationText = suggestion.description;

    if (activeField === "pickup") {
      setpickup(locationText);
    } else if (activeField === "destination") {
      setdropoff(locationText);
    }
  };

  // Add error handling for when suggestion is undefined
  if (!Array.isArray(suggestion)) {
    return null;
  }

  return (
    <div>
      {suggestion.map((location, key) => (
        <div
          key={location.place_id} // Better to use place_id as key
          onClick={() => {
            handleSuggestionClick(location);
          }}
          className="flex gap-4 border-2 p-3 mx-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
            <i className="ri-map-pin-fill"></i>
          </h2>
          <div>
            <h4 className="font-medium">{location.description}</h4>
            {location.structured_formatting && (
              <p className="text-sm text-gray-500">
                {location.structured_formatting.secondary_text}
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;

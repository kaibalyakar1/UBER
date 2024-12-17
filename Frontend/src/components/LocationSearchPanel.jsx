import React from "react";

const LocationSearchPanel = ({ setvehcilePanel, setPanelOpen }) => {
  const locations = [
    "NV-53, Nayan vihar,Duhuria,Kendrapara",
    "22-B A, Dhanpuri, Kendrapara",
    "Shingania Nagar, Kendrapara",
  ];
  return (
    <div>
      {locations.map((location, key) => {
        return (
          <div
            key={key}
            onClick={() => {
              setvehcilePanel(true);
              setPanelOpen(false);
            }}
            className="flex gap-4 border-2 p-3 mx-2 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start"
          >
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>
            <h4 className="font-medium">{location}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;

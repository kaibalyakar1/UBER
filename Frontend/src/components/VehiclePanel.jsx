import React from "react";

const VehiclePanel = ({
  vehcilePanel,
  setvehcilePanel,
  setconfrimRidePanel,
}) => {
  return (
    <div>
      {" "}
      <h5
        onClick={() => setvehcilePanel(!vehcilePanel)}
        className="text-2xl font-bold text-center pb-8  text-gray-600 h-1"
      >
        <i className="ri-arrow-down-wide-line"></i>
      </h5>
      <h3 className="font-semibold text-xl mb-4">Choose a vehicle</h3>
      <div
        onClick={() => {
          setconfrimRidePanel(true);
          setvehcilePanel(false);
        }}
        className="flex border-2 active:border-black border-gray rounded-xl w-full items-center mb-3  gap-1 p-2"
      >
        <img
          className="h-12"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
        <div className="w-1/2 flex flex-col">
          <h4 className="font-semibold text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm  text-gray-800">2 mins Away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable , compact cars
          </p>
        </div>
        <h2 className="text-xl font-semibold ml-3">$15</h2>
      </div>
      <div
        onClick={() => setconfrimRidePanel(true)}
        className="flex border-2 active:border-black border-gray rounded-xl w-full items-center mb-3  gap-1 p-2"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
          alt=""
        />
        <div className="w-1/2 flex flex-col">
          <h4 className="font-semibold text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm  text-gray-800">2 mins Away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable , compact cars
          </p>
        </div>
        <h2 className="text-xl font-semibold ml-3">$15</h2>
      </div>
      <div
        onClick={() => setconfrimRidePanel(true)}
        className="flex border-2 active:border-black border-gray rounded-xl w-full items-center mb-3 gap-1 p-2"
      >
        <img
          className="h-12"
          src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1648431773/assets/1d/db8c56-0204-4ce4-81ce-56a11a07fe98/original/Uber_Auto_558x372_pixels_Desktop.png"
          alt=""
        />
        <div className="w-1/2 flex flex-col">
          <h4 className="font-semibold text-sm">
            UberGo{" "}
            <span>
              <i className="ri-user-3-fill">4</i>
            </span>
          </h4>
          <h5 className="font-medium text-sm  text-gray-800">2 mins Away</h5>
          <p className="font-medium text-xs text-gray-600">
            Affordable , compact cars
          </p>
        </div>
        <h2 className="text-xl font-semibold ml-3">$15</h2>
      </div>
    </div>
  );
};

export default VehiclePanel;

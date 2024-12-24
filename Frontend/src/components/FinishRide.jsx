import React from "react";
import { Link } from "react-router-dom";
const FinishRide = ({ setFinishRidePanel }) => {
  return (
    <div>
      <h3 className="font-semibold text-xl ml-[25%]">Ride Completed</h3>
      <img
        className="h-7 ml-[40%] mt-5"
        src="https://media.tenor.com/Hw7f-4l0zgEAAAAM/check-green.gif"
        alt=""
      />
      <div className="flex flex-col justify-between gap-2 items-center w-full mt-4">
        <img
          className="w-[45%] rounded-lg"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="w-full py-2">
          <div className="w-full flex items-center gap-2 border-b-2 border-gray-200">
            <i className="ri-map-pin-fill"></i>
            <div className="font-semibold">
              <h3>
                {" "}
                <p>Kendrapara,NV-53, Nayan vihar,Duhuria</p>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full py-2">
          <div className="w-full flex items-center gap-2 border-b-2 border-gray-200">
            <i className="text-lg ri-map-pin-2-fill"></i>
            <div className="font-semibold">
              <h3>
                <p>Kendrapara,22-B A, Dhanpuri</p>
              </h3>
            </div>
          </div>
        </div>
        <div className="w-full py-2">
          <div className="w-full flex items-center gap-2 border-b-2 border-gray-200">
            <i class="ri-currency-line"></i>
            <div className="font-semibold">
              <h3>Rs. 100</h3>
            </div>
          </div>
        </div>
        <button
          onClick={() => setFinishRidePanel(false)}
          className=" w-full bg-black text-white px-2 py-2 rounded-lg mt-4"
        >
          Finish
        </button>
      </div>
    </div>
  );
};

export default FinishRide;

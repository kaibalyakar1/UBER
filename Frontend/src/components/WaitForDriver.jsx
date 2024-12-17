import React from "react";
import { Audio } from "react-loader-spinner";
import { BeatLoader } from "react-spinners";
const WaitForDriver = () => {
  return (
    <div>
      <h3 className="ml-[25%] font-semibold text-xl">Searching for Driver</h3>
      <BeatLoader className="ml-[40%] mt-5" />
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
      </div>
    </div>
  );
};

export default WaitForDriver;

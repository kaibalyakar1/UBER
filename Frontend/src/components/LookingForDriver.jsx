import React from "react";

const LookingForDriver = ({ setlookingForDriver, lookingForDriver }) => {
  return (
    <div>
      <h3 className="ml-[28%] font-semibold text-xl mb-8 -mt-2">
        Rider Assigned
      </h3>
      <div className="flex justify-between gap-2 items-center -mt-4">
        <img
          className="h-12"
          src="https://swyft.pl/wp-content/uploads/2023/05/how-many-people-can-a-uberx-take.jpg"
          alt=""
        />
        <div className="text-right">
          <h2 className="font-semibold">Amit</h2>
          <h4 className="font-bold  text-m -mt-1 -mb-1">OD 02 AB 6969</h4>
          <p>Maruti Suzuki Ciaz</p>
        </div>
      </div>
      <div className="flex flex-col justify-between gap-2 items-center w-full mt-4">
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
          onClick={() => setlookingForDriver(!lookingForDriver)}
          className="bg-black text-white p-1 w-[19%] rounded -mt-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default LookingForDriver;

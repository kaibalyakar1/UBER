import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
    <div className="h-screen">
      <Link
        className="absolute top-4 right-4 bg-black p-2 rounded-3xl text-xl text-white px-2 py-2"
        to="/user-dash"
      >
        <i class="ri-home-4-line"></i>
      </Link>
      <div className="h-1/2">
        <img
          className="h-full w-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9kC0ofjRRqWZsFPJsLboytAWkbg5AXZQRA&s"
          alt=""
        />
      </div>

      <div className="p-3">
        <div className="flex justify-between gap-2 items-center mt-3">
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
          <button className="bg-black text-white p-2">Make a payment</button>
        </div>
      </div>
    </div>
  );
};

export default Riding;

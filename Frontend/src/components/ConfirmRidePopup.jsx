import React from "react";

const ConfirmRidePopup = ({ setconfirmPanel }) => {
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 items-center w-full -mt-[20%]">
        <img
          className="w-2/4 ml-5 "
          src="https://media3.giphy.com/media/7hAr7m8m7k3uumlu4G/source.gif"
          alt=""
        />
        <p className="text-center text-sm">Are you sure?</p>
        <button
          onClick={() => setconfirmPanel(false)}
          className="bg-black text-white p-2 w-1/2"
        >
          Confirm{" "}
        </button>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;

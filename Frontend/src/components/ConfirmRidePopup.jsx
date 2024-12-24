import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopup = ({ setconfirmPanel }) => {
  const [otp, setOtp] = React.useState("");
  const submitHandler = (e) => {
    e.preventDefault();
    if (otp.length === 6) {
      setconfirmPanel(false);
    } else {
      alert("Please enter a valid OTP");
    }
  };
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 items-center w-full -mt-[20%]">
        <img
          className="w-2/4 ml-5 "
          src="https://media3.giphy.com/media/7hAr7m8m7k3uumlu4G/source.gif"
          alt=""
        />
        <div className="flex flex-col items-center mt-[30%]">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              type="text"
              className="w-3/4 bg-slate-300 h-9 px-3 py-5 rounded-lg border-2 ml-8 border-black"
              placeholder="Enter OTP"
            />

            <p className="text-center text-sm mt-5">Are you sure?</p>
            <Link
              to="/captain-ride"
              onClick={() => setconfirmPanel(false)}
              className="bg-black text-white p-2 w-1/2 mt-5 px-8"
            >
              Confirm{" "}
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopup;

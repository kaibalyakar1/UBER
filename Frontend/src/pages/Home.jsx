import React from "react";

const Home = () => {
  return (
    <div>
      <div className="h-screen pt-5 pl-5 flex flex-col justify-between   w-full bg-red-600">
        <img
          className="w-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white">
          <h2>Get Started With Uber</h2>
          <button>Continue</button>
        </div>
      </div>
    </div>
  );
};

export default Home;

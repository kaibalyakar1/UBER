import React from "react";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <div>
      <div className="bg-[url('https://images.unsplash.com/photo-1538563188159-070c4db2bc65?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDUxfHx8ZW58MHx8fHx8')] bg-cover bg-center  h-screen pt-8 flex flex-col justify-between   w-full ">
        <img
          className="w-16 ml-8 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        <div className="bg-white pb-7 py-4 px-4">
          <h2 className="text-3xl font-bold">Get Started With Uber</h2>
          <Link
            to="/login"
            className="flex items-center justify-center w-full py-3 bg-black text-white rounded-lg mt-5"
          >
            Continue
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

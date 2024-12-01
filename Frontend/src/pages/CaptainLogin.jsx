import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [data, setData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setData({ email, password });
    console.log(data);
    setEmail("");
    setPassword("");
  };

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-12 mb-10 "
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />
        {/* <form onSubmit={submitHandler}> */}
        <form
          onSubmit={(e) => {
            submitHandler(e);
          }}
        >
          <h3 className="text-xl font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            required
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            placeholder="Enter your password"
          />
          <button className="bg-black text-white w-full px-4 py-2 rounded font-semibold mb-4 text-lg">
            Login
          </button>
          <p>
            New to Uber?
            <Link to="/signup" className="text-blue-600">
              {" "}
              Regsiter as a Rider
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/login"
          className="bg-yellow-400 flex items-center justify-center w-full text-black px-4 py-2.5 rounded font-semibold mb-9"
        >
          Sign In as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainLogin;

import React, { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState({});
  const submitHandler = (e) => {
    e.preventDefault();
    setData({ email, password, name });
    console.log(data);
    setEmail("");
    setPassword("");
    setName("");
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
          <h3 className="text-xl font-medium mb-2">What's your name?</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="text"
            placeholder="First name"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="text"
            placeholder="last name"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <h3 className="text-xl font-medium mb-2">What's your email</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <h3 className="text-xl font-medium mb-2">Enter Password</h3>
          <input
            className="bg-[#eeeeee] mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-xl"
            type="password"
            placeholder="Enter your password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="bg-black text-white w-full px-4 py-2 rounded font-semibold mb-4 text-lg">
            Login
          </button>
          <p>
            Already have an account?
            <Link to="/" className="text-blue-600">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/signup"
          className="bg-yellow-400 flex items-center justify-center w-full text-black px-4 py-2.5 rounded font-semibold mb-9"
        >
          Sign Up as a User
        </Link>
      </div>
    </div>
  );
};

export default CaptainSignup;

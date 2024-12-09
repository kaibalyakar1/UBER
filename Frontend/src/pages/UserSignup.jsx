import React, { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import UserContext, { userDataContext } from "../context/UserContext";
const UserSignup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastName, setLastName] = useState("");
  const [data, setData] = useState({});

  const { user, setuser } = useContext(userDataContext);
  const navigate = useNavigate();
  const submitHandler = async (e) => {
    e.preventDefault();
    const newUser = {
      email: email,
      password: password,
      fullName: {
        firstName: firstname,
        lastName: lastName,
      },
    };
    const response = await axios.post(
      `${import.meta.env.VITE_BASE_URL}/user/register`,
      newUser
    );

    if (response.status === 201) {
      const data = response.data;
      setuser(data.user);
      localStorage.setItem("token", data.token);

      navigate("/captain-login");
    }
    setEmail("");
    setPassword("");
    setFirstname("");
    setLastName("");
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
          <div className="flex gap-3">
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
          </div>

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
            Signup
          </button>
          <p>
            Already have an account?
            <Link to="/login" className="text-blue-600">
              {" "}
              Login
            </Link>
          </p>
        </form>
      </div>

      <div>
        <Link
          to="/captain-signup"
          className="bg-yellow-400 flex items-center justify-center w-full text-black px-4 py-2.5 rounded font-semibold mb-9"
        >
          Sign Up as a Rider
        </Link>
      </div>
    </div>
  );
};

export default UserSignup;

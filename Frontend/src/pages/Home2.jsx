import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import { use } from "react";
const Home2 = () => {
  const [pickup, setpickup] = useState("");
  const [dropoff, setdropoff] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const panelref = useRef(null);
  const hide = useRef(null);
  const submitHandler = (e) => {
    e.preventDefault();
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelref.current, {
          height: "70%",
        });

        gsap.to(hide.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelref.current, {
          height: "0%",
        });
        gsap.to(hide.current, {
          opacity: 0,
        });
      }

      if (panelOpen) {
      } else {
      }
    },
    [panelOpen]
  );

  return (
    <div className="h-screen relative">
      <img
        className="w-12 absolute top-7 left-7"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />

      <div className="h-screen w-screen object-cover">
        <img
          className="w-full h-full"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9kC0ofjRRqWZsFPJsLboytAWkbg5AXZQRA&s"
          alt=""
        />
      </div>

      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-6 relative">
          <h5 className="absolute text-2xl text-black top-3 right-6">
            <i
              ref={hide}
              onClick={() => setPanelOpen(!panelOpen)}
              className="ri-arrow-down-wide-line opacity-0"
            ></i>
          </h5>
          <h4 className="text-xl font-medium">Find your ride</h4>
          <form onSubmit={submitHandler}>
            <div className="line absolute h-16 w-1 bg-black top-20 left-10 rounded-full"></div>
            <input
              className="my-2 border px-8 p-2 w-80 rounded-lg bg-gray-100"
              type="text"
              placeholder="Add a pickup location"
              value={pickup}
              onChange={(e) => setpickup(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
            <input
              className="my-2 border px-8 p-2 w-80 rounded-lg bg-gray-100"
              type="text"
              placeholder="Add a dropoff location"
              value={dropoff}
              onChange={(e) => setdropoff(e.target.value)}
              onClick={() => setPanelOpen(true)}
            />
          </form>
        </div>

        <div ref={panelref} className=" bg-red-500 "></div>
      </div>
    </div>
  );
};

export default Home2;

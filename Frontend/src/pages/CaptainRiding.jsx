import React, { useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";
const CaptainRiding = () => {
  const [finishedRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);
  useGSAP(
    function () {
      if (finishedRidePanel) {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(0%)",
        });
      } else {
        gsap.to(finishRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [finishedRidePanel]
  );
  return (
    <div className="h-screen">
      <div className="h-4/5">
        <img
          className="h-full w-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9kC0ofjRRqWZsFPJsLboytAWkbg5AXZQRA&s"
          alt=""
        />
      </div>

      <div
        onClick={() => setFinishRidePanel(true)}
        className="h-1/5 bg-yellow-300"
      >
        <div className="flex gap-4 pt-11 ml-[20%] items-center pt-5">
          <p className="font-bold">4KM Away</p>
          <button className="bg-green-600 h-10 px-4 rounded-lg">
            complete Ride
          </button>
        </div>
      </div>

      <div
        ref={finishRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full bg-white py-3 px-10 pt-12"
      >
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  );
};

export default CaptainRiding;

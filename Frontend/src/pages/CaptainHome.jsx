import React, { useRef, useState } from "react";
import CaptainsDetails from "../components/CaptainsDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ConfirmRidePopup from "../components/ConfirmRidePopup";

const CaptainHome = () => {
  const [RidePanel, setRidePanel] = useState(true);
  const [confirmPanel, setconfirmPanel] = useState(false);
  const RidePanelRef = useRef(null);
  const confirmPanelRef = useRef(null);

  useGSAP(
    function () {
      if (RidePanel) {
        gsap.to(RidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(RidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [RidePanel]
  );

  useGSAP(
    function () {
      if (confirmPanel) {
        gsap.to(confirmPanelRef.current, {
          transform: "translateY(0)",
          opacity: 1,
        });
      } else {
        gsap.to(confirmPanelRef.current, {
          transform: "translateY(100%)",
          opacity: 0,
        });
      }
    },
    [confirmPanel]
  );
  return (
    <div className="h-screen">
      <div className="h-3/5">
        <img
          className="h-full w-full "
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU9kC0ofjRRqWZsFPJsLboytAWkbg5AXZQRA&s"
          alt=""
        />
      </div>

      <div className="p-3 h-2/5">
        <CaptainsDetails />
      </div>
      <div
        ref={RidePanelRef}
        className="fixed w-full  z-10 bottom-0 translate-y-full bg-white py-10 pt-12 px-4"
      >
        <RidePopUp
          setRidePanel={setRidePanel}
          RidePanel={RidePanel}
          setconfirmPanel={setconfirmPanel}
        />
      </div>

      <div
        ref={confirmPanelRef}
        className="fixed w-full  z-10 bottom-0 translate-y-full bg-white py-10  px-4"
      >
        <ConfirmRidePopup setconfirmPanel={setconfirmPanel} />
      </div>
    </div>
  );
};

export default CaptainHome;

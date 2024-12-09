import React, { useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const UserLogout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const logout = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        console.error("No token found. User might already be logged out.");
        navigate("/login");
        return;
      }

      try {
        console.log("Token being sent:", token); // Debugging
        const response = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/user/logout`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          console.log("Logout successful");
          localStorage.removeItem("token");
          navigate("/login");
        }
      } catch (error) {
        console.error(
          "Error during logout:",
          error.response?.data || error.message
        );
      }
    };

    logout();
  }, [navigate]);

  return (
    <div>
      <h1>Logging out...</h1>
    </div>
  );
};

export default UserLogout;

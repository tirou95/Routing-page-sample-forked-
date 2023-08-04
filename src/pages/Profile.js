import React, { useEffect } from "react";
import style from "./Profile.module.css";
import image from "../assets/background2.jfif";
import { useNavigate } from "react-router-dom";

//Profile page
const Profile = ({ name }) => {
  const navigate = useNavigate();
  useEffect(() => {
    const handleBackButton = () => {
      window.location.href = "/";
    };

    window.addEventListener("popstate", handleBackButton);
    return () => {
      window.removeEventListener("popstate", handleBackButton);
    };
  }, []);

  return (
    <div
      style={{ backgroundImage: `url(${image})`, height: "100%" }}
      className={style.conatiner2}
    >
      <h1 className={style.heading}>This is {name}'s profile.</h1>
      <p style={{ color: "#121212" }}>
        Click here to find out the Work experience.
      </p>
      <div style={{ paddingLeft: "40%" }}>
        <button
          className={style.button}
          onClick={() => {
            navigate("/Work");
          }}
        >
          Work
        </button>
      </div>
    </div>
  );
};

export default Profile;

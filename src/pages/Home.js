import { Link } from "react-router-dom";
import style from "./Profile.module.css";
import image from "../assets/background.jpg";

//home page
const Home = () => {
  let link = (
    <Link className={style.link} to="/Profile">
      Profile
    </Link>
  );
  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={style.container}
    >
      <h1 className={style.homeHeading}>Welcome to Home!</h1>
      <p style={{ color: "#FFFF00", paddingLeft: "20px" }}>
        Please click {link} to check the profile.
      </p>
    </div>
  );
};

export default Home;

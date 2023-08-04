import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Profile from "./pages/Profile.js";
import Home from "./pages/Home.js";
import Work from "./pages/Work.js";

//Routes are defined here and elements are added accordingly
export default function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/profile" element={<Profile name="Tirou" />} />
      <Route exact path="/work" element={<Work />} />
    </Routes>
  );
}

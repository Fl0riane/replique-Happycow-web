import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
  faLocationDot,
  faClock,
  faPhone,
  faLink,
  faCamera,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
  faHeart,
  faLocationDot,
  faClock,
  faPhone,
  faLink,
  faCamera,
  faFacebookF
);

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Restaurant from "./pages/RestaurantPage/Restaurant";
import Modal from "./components/Modal/Modal";

function App() {
  const [visible, setVisible] = useState(false);

  return (
    <Router>
      <Header visible={visible} setVisible={setVisible} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
      {visible && <Modal setVisible={setVisible} />}
    </Router>
  );
}

export default App;

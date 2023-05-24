import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

library.add(faMagnifyingGlass, faStar, faStarHalfStroke, faHeart);

import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Restaurant from "./pages/Restaurant";

import data from "./assets/data.json";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant/:id" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App;

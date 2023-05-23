import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass, faStar, faStarHalfStroke);
import "./App.css";
import Home from "./pages/Home";
import Header from "./components/Header/Header";
import Restaurant from "./pages/Restaurant";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/restaurant" element={<Restaurant />} />
      </Routes>
    </Router>
  );
}

export default App;

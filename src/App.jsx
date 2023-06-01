import "./App.css";
import { useState } from "react";
import Cookies from "js-cookie";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faHeart, faCircleXmark } from "@fortawesome/free-regular-svg-icons";
import { faFacebookF, faApple } from "@fortawesome/free-brands-svg-icons";
import {
  faMagnifyingGlass,
  faStar,
  faStarHalfStroke,
  faLocationDot,
  faClock,
  faPhone,
  faLink,
  faCamera,
  faAngleLeft,
  faAngleRight,
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
  faFacebookF,
  faCircleXmark,
  faApple,
  faAngleLeft,
  faAngleRight
);

/*-----------------------Pages-------------------------------*/
import Home from "./pages/Home";
import ResearchPage from "./pages/ResearchPage/ResearchPage";
import Restaurant from "./pages/RestaurantPage/Restaurant";
import AddListPage from "./pages/AddListPage/AddListPage";

/*-----------------------Components----------------------------*/
import Header from "./components/Header/Header";
import Modal from "./components/Modal/Modal";

function App() {
  const [token, setToken] = useState(Cookies.get("hc-Token") || null);
  const [favorites, setFavorites] = useState(Cookies.get("hc-Favorites") || []);

  const [visible, setVisible] = useState(false);
  const [research, setResearch] = useState("");
  const handleSearch = (event) => {
    setResearch(event.target.value);
  };

  const addFavorite = (item) => {
    const newTab = tab.push(item);
    Cookies.set("hc-Favorites", JSON.stringify([newTab], { expires: 14 }));
  };

  const handleUserData = (userData) => {
    if (userData && userData.token) {
      const { token } = userData;
      const { favorites } = userData;
      setToken(token);
      setFavorites(favorites);

      Cookies.set("hc-Token", token, { expires: 14 });
    } else {
      setToken(null);
      Cookies.remove("hc-Token");
      Cookies.remove("hc-Favorites");
    }
  };
  return (
    <Router>
      <Header
        visible={visible}
        setVisible={setVisible}
        handleSearch={handleSearch}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              handleSearch={handleSearch}
              setResearch={setResearch}
              research={research}
              handleUserData={handleUserData}
              addFavorite={addFavorite}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/restaurant/:id"
          element={
            <Restaurant
              handleUserData={handleUserData}
              addFavorite={addFavorite}
              setFavorites={setFavorites}
            />
          }
        />
        <Route
          path="/research/country"
          element={
            <ResearchPage
              handleUserData={handleUserData}
              handleSearch={handleSearch}
              research={research}
              setResearch={setResearch}
            />
          }
        ></Route>
        <Route
          path="/addlist"
          element={
            <AddListPage
              handleUserData={handleUserData}
              addFavorite={addFavorite}
              setFavorites={setFavorites}
            />
          }
        ></Route>
      </Routes>
      {visible && (
        <Modal
          handleUserData={handleUserData}
          setVisible={setVisible}
          visible={visible}
        />
      )}
    </Router>
  );
}

export default App;

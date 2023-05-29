import "./hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Hero = ({ handleSearch, research }) => {
  console.log("log hero", research);
  return (
    <div className="hero">
      <h1>Find Vegan Restaurants Nearby</h1>

      <span>
        <input
          type="text"
          placeholder="Search for city"
          onChange={handleSearch}
        />
        <Link to="/research/country" research={research}>
          <button className="icon">
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </button>
        </Link>
      </span>
    </div>
  );
};
export default Hero;

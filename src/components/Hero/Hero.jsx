import "./hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Hero = ({ handleSearch, research }) => {
  return (
    <div className="hero">
      <h1>Find Vegan Restaurants Nearby</h1>

      <span>
        <input
          type="text"
          placeholder="Search for city"
          onChange={handleSearch}
        />

        <p className="icon">
          <button onClick={handleSearch}>
            <Link to="/research/country">
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </Link>
          </button>
        </p>

        <div className="wave"></div>
      </span>
    </div>
  );
};
export default Hero;

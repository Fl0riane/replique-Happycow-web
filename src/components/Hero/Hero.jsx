import "./hero.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
const Hero = ({ handleSearch, research, setResearch }) => {
  return (
    <div className="hero">
      <h1>Find Vegan Restaurants Nearby</h1>

      <span>
        <input
          type="text"
          placeholder="Search for city"
          onChange={handleSearch}
        />
        <Link to="/research/country" state={{ research: research }}>
          <p className="icon">
            <button onClick={handleSearch}>
              <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </button>
          </p>
        </Link>
        <div className="wave"></div>
      </span>
    </div>
  );
};
export default Hero;

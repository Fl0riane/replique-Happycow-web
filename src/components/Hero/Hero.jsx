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
          value={research}
          placeholder="Search for city"
          onChange={handleSearch}
        />

        <p className="icon">
          <button>
            <Link to="/research/country">
              <FontAwesomeIcon
                icon="fa-solid fa-magnifying-glass"
                size="xl"
                style={{ color: "#fcfcfd" }}
              />
            </Link>
          </button>
        </p>

        <div className="wave"></div>
      </span>
    </div>
  );
};
export default Hero;

import "./hero.css";
import Homeimg from "../../assets/img/Homeimg.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Hero = () => {
  return (
    <div className="hero">
      <h1>Find Vegan Restaurants Nearby</h1>

      <span>
        <input type="text" />
        <p className="icon">
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </p>
      </span>
    </div>
  );
};
export default Hero;

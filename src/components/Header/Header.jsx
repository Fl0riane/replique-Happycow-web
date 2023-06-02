import logo from "../../assets/img/happycow-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
import { Link } from "react-router-dom";
const Header = ({ setVisible, visible, research }) => {
  return (
    <header>
      <Link to="/">
        <img src={logo} alt="logo happy-cow blanc et violet" />
      </Link>
      <div>
        <button>
          <Link to="/research/country" state={{ research: research }}>
            <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
          </Link>
        </button>

        <button>
          <Link to="/addList"> Favoris</Link>
        </button>

        <button
          onClick={() => {
            setVisible(!visible);
          }}
        >
          Login/Join
        </button>
      </div>
    </header>
  );
};
export default Header;

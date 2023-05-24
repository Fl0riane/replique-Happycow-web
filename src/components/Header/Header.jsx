import logo from "../../assets/img/happycow-logo.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";
const Header = ({ setVisible, visible }) => {
  return (
    <header>
      <img src={logo} alt="logo happy-cow blanc et violet" />
      <div>
        <button>
          <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
        </button>
        <button>Add Listing</button>
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

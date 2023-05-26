import "./modal.css";
import logoWhite from "../../assets/img/hc-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoGoogle from "../../assets/img/google.png";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";

const Modal = ({ setVisible, handleUserData }) => {
  const [isActive, setActive] = useState("false");
  const handleToggle = () => {
    setActive(!isActive);
    setActive2("false");
  };

  const [isActive2, setActive2] = useState("false");
  const handleToggle2 = () => {
    setActive2(!isActive2);
    setActive("false");
  };

  return (
    <section className="modal-root">
      <div
        className="modallog"
        onClick={(event) => {
          event.stopPropagation();
        }}
      >
        <div className="leftPart">
          <span>
            <img src={logoWhite} alt="logo hp blanc" />
            <h3>Welcome to HappyCow</h3>
          </span>
        </div>
        <div className="rigthPart">
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            <FontAwesomeIcon
              icon="fa-regular fa-circle-xmark"
              size="xl"
              style={{ color: "#BBBB", opacity: "90%" }}
            />
          </button>

          <span>
            <div className={isActive ? "clic" : null}>
              <button onClick={handleToggle2}>Login</button>
            </div>
            <div className={isActive2 ? "clic" : null}>
              <button onClick={handleToggle}>Sign Up</button>
            </div>
          </span>
          <nav>
            <div>
              <FontAwesomeIcon
                icon="fa-brands fa-facebook-f"
                size="xl"
                style={{ color: "#3a5898" }}
              />
            </div>
            <div>
              <img className="logoSM" src={logoGoogle} alt="logo google" />
            </div>
            <div>
              <FontAwesomeIcon
                icon="fa-brands fa-apple"
                size="xl"
                style={{ color: "#050505" }}
              />
            </div>
          </nav>

          <p>OR</p>
          <LoginForm />
        </div>
      </div>
    </section>
  );
};
export default Modal;

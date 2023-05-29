import "./modal.css";
import logoWhite from "../../assets/img/hc-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoGoogle from "../../assets/img/google.png";
import { useState } from "react";
import LoginForm from "../LoginForm/LoginForm";
import { Link } from "react-router-dom";
import SignUpForm from "../SignUpForm/SignUpForm";

const Modal = ({ setVisible, handleUserData }) => {
  const [isActive, setActive] = useState(false);
  const handleToggle = () => {
    setActive(!isActive);
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
            {isActive ? (
              <h3>Welcome to HappyCow</h3>
            ) : (
              <h3>
                Join the largest vegan and vegetarian community in the world.
              </h3>
            )}
          </span>
        </div>
        <div className="rigthPart">
          <main>
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
                <button onClick={handleToggle}>Login</button>
              </div>

              <div className={!isActive ? "clic" : null}>
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
          </main>

          {isActive ? (
            <LoginForm handleUserData={handleUserData} />
          ) : (
            <SignUpForm handleUserData={handleUserData} />
          )}
        </div>
      </div>
    </section>
  );
};
export default Modal;

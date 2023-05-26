import "./modal.css";
import logoWhite from "../../assets/img/hc-logo-white.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoGoogle from "../../assets/img/google.png";
const Modal = ({ setVisible }) => {
  return (
    <section className="modal-root">
      <div
        className="modal"
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
            <button>Login</button>
            <button>Sign Up</button>
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
        </div>
      </div>
    </section>
  );
};
export default Modal;

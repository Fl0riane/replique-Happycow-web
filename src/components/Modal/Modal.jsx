import imgLog from "../../assets/img/login-social.jpg";
import "./modal.css";
import logoWhite from "../../assets/img/hc-logo-white.png";
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
          <img src={imgLog} alt="img log" />
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
            x
          </button>
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            Login
          </button>
          <button
            onClick={() => {
              setVisible(false);
            }}
          >
            Sign Up
          </button>
        </div>
      </div>
    </section>
  );
};
export default Modal;

import imgLog from "../../assets/img/login-social.jpg";

const Modal = (setVisible, visible) => {
  return (
    <section className="container">
      <div>
        <img src={imgLog} alt="img log" />
        <h2>Happy Cow</h2>
        <h3>Welcome to HappyCow</h3>
      </div>
      <div>
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
    </section>
  );
};
export default Modal;

import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "./form.css";
const LoginForm = ({ handleUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErromessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  return (
    <form
      className="form"
      onSubmit={async (event) => {
        event.preventDefault();
        try {
          const response = await axios.post(
            "https://site--back-end-happy-cow--p2d7k4xwpzzq.code.run/user/login",
            { email: email, password: password }
          );
          if (response.data) {
            handleUserData({
              token: response.data.token,
              userId: response.data._id,
            });

            alert("vous etes connecté");
          }
          navigate("/");
        } catch (error) {
          console.log(error.message);
          console.log(error.response.status);

          if (error.response.status === 401) {
            setErromessage("Accès non autorisé");
          }
        }
      }}
    >
      <label htmlFor="id">Username or Email</label>
      <input
        name="id"
        type="text"
        placeholder=" Username or Email"
        onChange={handleEmailChange}
      />
      <label htmlFor="password">Password</label>
      <input
        placeholder="password"
        type="password"
        name="password"
        onChange={handlePasswordChange}
      />
      {errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

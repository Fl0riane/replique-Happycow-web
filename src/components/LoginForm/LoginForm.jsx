import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import "../SignUpForm/form.css";
const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [errorMessage, setErromessage] = useState("");
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
            "http://localhost/3000/user/login",
            { email: email, password: password }
          );
          if (response.data) {
            handleUserData({
              token: response.data.token,
              userId: response.data._id,
            });
            navigate("/");
          }
        } catch (error) {
          console.log(error.message);

          if (error.response.status === 401) {
            setErromessage("Accès non autorisé");
          }
        }
      }}
    >
      <label htmlFor="id">Username or Email</label>
      <input name="id" type="text" placeholder=" Username or Email" />
      <label htmlFor="password">Password</label>
      <input
        placeholder="password"
        type="password"
        name="password"
        // onChange={handlePasswordChange}
      />

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

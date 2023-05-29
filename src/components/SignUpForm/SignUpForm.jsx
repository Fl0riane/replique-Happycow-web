import "./form.css";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const SignUpForm = ({ handleUserData }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [errorMessage, setErrormessage] = useState("");
  const navigate = useNavigate();

  const handleEmailChange = (event) => {
    const value = event.target.value;
    setEmail(value);
  };

  const handlePasswordChange = (event) => {
    const value = event.target.value;
    setPassword(value);
  };

  const handleUsernameChange = (event) => {
    const value = event.target.value;
    setUsername(value);
  };

  return (
    <form
      className="form bigForm"
      onSubmit={async (event) => {
        event.preventDefault();
        setErrormessage("");
        try {
          const response = await axios.post(
            "http://localhost:3000/user/signup",
            {
              emai: email,
              username: username,
              password: password,
            }
          );
          if (response.data.token) {
            handleUserData(response.data.token);
            alert("Votre compte a bien été créé");
            navigate("/");
          }

          console.log(response.data);
        } catch (error) {
          console.log(error.message);
          console.log(error.response.status);
          if (error.response.status === 409) {
            setErrormessage("Cette adresse email est déjà utilisée");
          } else if (error.response.data.message === "Missing parameters") {
            setErrormessage("Veuillez remplir tous les champs");
          }
        }
      }}
    >
      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="text"
        placeholder="Email"
        onChange={handleEmailChange}
      />
      <label htmlFor="username">Username</label>
      <input
        name="username"
        type="text"
        placeholder="Username"
        onChange={handleUsernameChange}
      />
      <p>Publicly displayed. Do not use your email address as your username</p>

      <label htmlFor="password">Password</label>
      <input
        placeholder="password"
        type="password"
        name="password"
        onChange={handlePasswordChange}
      />
      <p>{errorMessage && <p style={{ color: "red" }}>{errorMessage}</p>}</p>

      <button type="submit">Next</button>
    </form>
  );
};

export default SignUpForm;

import "./form.css";

const SignUpForm = () => {
  return (
    <form className="form">
      <label htmlFor="email">Email</label>
      <input name="email" type="text" placeholder="Email" />
      <label htmlFor="username">Username</label>
      <input name="username" type="text" placeholder="Username" />
      <p>Publicly displayed. Do not use your email address as your username</p>
      <label htmlFor="password">Password</label>

      <input
        placeholder="password"
        type="password"
        name="password"
        // onChange={handlePasswordChange}
      />

      <button type="submit">Next</button>
    </form>
  );
};

export default SignUpForm;

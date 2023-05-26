const LoginForm = () => {
  return (
    <form className="form">
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

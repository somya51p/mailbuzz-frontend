import React from "react";
import { useState } from "react";
import loginImg from "../../login.jpg";
import googleImg from "../../google.png";

const Login = ({
  handleLogin,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };
  return (
    <div className="base-container">
      <div className="google">
        <img src={googleImg} alt="bg"/>
        <button type="button" className="btn2">
          Login with Google
        </button>
      </div>
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="bg" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              name="username"
              placeholder="username"
              onChange={({ target }) => setUsername(target.value)}
              value={username}
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type={passwordShown ? "text" : "password"}
              name="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
            <i onClick={togglePassword} class="fa fa-eye teal-color"></i>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

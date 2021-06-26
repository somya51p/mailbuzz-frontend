import React from "react";
import { useState } from "react";
import loginImg from "../../login.jpg";

const Login = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div
      className="base-container"
    >
      <div className="header">Login</div>
      <div className="content">
        <div className="image">
          <img src={loginImg} alt="bg" />
        </div>
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type={passwordShown ? "text" : "password"} name="password" placeholder="password" />
            <i onClick={togglePassword} class="fa fa-eye teal-color" ></i>
          </div>
        </div>
      </div>
      <div className="footer">
        <button type="button" className="btn">
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

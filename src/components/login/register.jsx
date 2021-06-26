import React from "react";
import { useState } from "react";
import googleImg from "../../google.png";

const Register = () => {
  const [passwordShown, setPasswordShown] = useState(false);

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  return (
    <div
      className="base-container"
    >
      <div className="google">
        <img src={googleImg} alt="bg"/>
        <button type="button" className="btn2">
          Login with Google
        </button>
      </div>
      <div className="header">Register</div>
      <div className="content">
        <div className="form">
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" placeholder="username" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email" />
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
          Register
        </button>
      </div>
    </div>
  );
};
export default Register;

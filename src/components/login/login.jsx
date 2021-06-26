import React from "react";
import loginImg from "../../login.jpg";

const Login = ({
  handleLogin,
  username,
  password,
  setUsername,
  setPassword,
}) => {
  return (
    <div
      className="base-container"
      // ref={this.props.containerRef}
    >
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
              type="password"
              name="password"
              placeholder="password"
              value={password}
              onChange={({ target }) => setPassword(target.value)}
            />
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

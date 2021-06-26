import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";
import userServices from "./services/user";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setRightClass("right");
    axios.get("/ping").then((res) => console.log(res.data));
  }, []);

  const handleLogin = async (event) => {
    console.log(username);
    console.log(password);
    try {
      const newUser = await userServices.login({
        username,
        password,
      });
      setUser(newUser);
      setUsername("");
      setPassword("");
      console.log(newUser);
      window.localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      console.error(err.message);
    }
  };

  const handleRegister = async (event) => {
    console.log(username);
    console.log(password);
    try {
      const user = {
        username,
        name,
        email,
        password,
      };
      const newUser = await userServices.register(user);
      console.log("newUser", newUser);
      handleLogin();
      // window.localStorage.setItem("user", JSON.stringify(newUser));
    } catch (err) {
      console.error(err.message);
    }
  };

  const googleLogin = () => {
    console.log("dfs");
    const newUser = userServices.googleLogin("a");
    console.log(newUser);
  };

  const changeState = () => {
    isLogginActive ? setRightClass("left") : setRightClass("right");
    setIsLogginActive(!isLogginActive);
  };

  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";

  return (
    <div className="App">
      <div className="login">
        <div className="container">
          {isLogginActive && (
            <Login
              googleLogin={googleLogin}
              handleLogin={handleLogin}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
          {!isLogginActive && (
            <Register
              googleLogin={googleLogin}
              handleRegister={handleRegister}
              username={username}
              setUsername={setUsername}
              name={name}
              setName={setName}
              email={email}
              setEmail={setEmail}
              password={password}
              setPassword={setPassword}
            />
          )}
        </div>
        <RightSide
          className={rightClass}
          current={current}
          currentActive={currentActive}
          onClick={changeState}
        />
      </div>
    </div>
  );
};

const RightSide = (props) => {
  return (
    <div className={`right-side ${props.className}`} onClick={props.onClick}>
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";
import loginServices from "./services/login";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    setRightClass("right");
    axios.get("/ping").then((res) => console.log(res.data));
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    console.log(username);
    console.log(password);
    try {
      const newUser = await loginServices.login({
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
              handleLogin={handleLogin}
              username={username}
              password={password}
              setUsername={setUsername}
              setPassword={setPassword}
            />
          )}
          {!isLogginActive && <Register />}
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

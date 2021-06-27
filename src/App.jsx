import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import SendMail from "./components/SendMail";
import { Login, Register } from "./components/login/index";
import History from "./components/History";
import userServices from "./services/user";
import Home from "./components/Home";
import mailServices from "./services/mail";
import { Switch, Route, Link } from "react-router-dom";
import Future from "./components/Future";
import EmailList from "./components/EmailList";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");
  const [user, setUser] = useState(null);
  const [username, setUsername] = useState("root");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("root");
  const [showEditor, setShowEditor] = useState(false);
  const [mails, setMails] = useState([]);
  const [history, setHistory] = useState([]);

  useEffect(() => {
    setRightClass("right");
    axios.get("/ping").then((res) => console.log(res.data));
    const logedInUser = window.localStorage.getItem("user");
    if (logedInUser) {
      setUser(JSON.parse(logedInUser));
    }
  }, []);

  useEffect(() => {
    if (user) {
      console.log("geting mails");
      getFutureMails(user).then((mails) => setMails(mails));
      mailServices.getPast(user).then((mails) => setHistory(mails));
    }
  }, [user]);

  const handleLogout = () => {
    window.localStorage.removeItem("user");
    window.location.reload(false);
    //window.location.assign("/");
  };

  console.log("future", mails);
  console.log("history", history);

  const getFutureMails = async (user) => {
    return await mailServices.getFuture(user);
  };
  const handleLogin = async (event) => {
    console.log(username);
    console.log(password);
    try {
      const newUser = await userServices.login({
        username,
        password,
      });
      console.log(newUser);
      setUser(newUser);
      setUsername("");
      setPassword("");
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

  if (!user) {
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
  }

  return (
    <div className="app">
      <Header />
      <Switch>
        <div className="app__body">
          <Sidebar
            handleLogout={handleLogout}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
          <SendMail
            user={user}
            showEditor={showEditor}
            setShowEditor={setShowEditor}
          />
          {/* <History history={history} /> */}
          <Route path="/history">
            <History history={history} />
          </Route>
          {/* <Route path="/logout">{handleLogout}</Route> */}
          <Route exact path="/">
            <Future mails={mails} />
            <EmailList />
          </Route>
        </div>
      </Switch>
      <Route path="/home" exact component={Home}></Route>
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

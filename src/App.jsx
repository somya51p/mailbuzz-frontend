import React, { useEffect, useState } from "react";
import "./App.css";
import { Login, Register } from "./components/login/index";

const App = () => {
  const [isLogginActive, setIsLogginActive] = useState(true);
  const [rightClass, setRightClass] = useState("");

  useEffect(() => {
    setRightClass("right");
  }, []);

  // componentDidMount() {
  //   //Add .right by default
  //   this.rightSide.classList.add("right");
  // }

  const changeState = () => {
    isLogginActive ? setRightClass("left") : setRightClass("right");
    // if (isLogginActive) {
    //   rightSide.classList.remove("right");
    //   rightSide.classList.add("left");
    // } else {
    //   rightSide.classList.remove("left");
    //   rightSide.classList.add("right");
    // }
    // this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }));
    console.log(rightClass);
    setIsLogginActive(!isLogginActive);
  };

  const current = isLogginActive ? "Register" : "Login";
  const currentActive = isLogginActive ? "login" : "register";
  return (
    <div className="App">
      <div className="login">
        <div
          className="container"
          // ref={(ref) => (this.container = ref)}
        >
          {isLogginActive && (
            <Login
            // containerRef={(ref) => (this.current = ref)}
            />
          )}
          {!isLogginActive && (
            <Register
            //  containerRef={(ref) => (this.current = ref)}
            />
          )}
        </div>
        <RightSide
          className={rightClass}
          current={current}
          currentActive={currentActive}
          // containerRef={(ref) => (this.rightSide = ref)}
          onClick={changeState}
        />
      </div>
    </div>
  );
};

const RightSide = (props) => {
  return (
    <div
      className={`right-side ${props.className}`}
      // ref={props.containerRef}
      onClick={props.onClick}
    >
      <div className="inner-container">
        <div className="text">{props.current}</div>
      </div>
    </div>
  );
};

export default App;

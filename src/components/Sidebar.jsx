import React from "react";
import "./Sidebar.css";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Sidebar({ handleLogout }) {
  return (
    <div className="sidebar">
      <Button component={Link} to="/compose" className="sidebar__compose">
        Compose
      </Button>
      <Button component={Link} to="/history" className="sidebar__history">
        History
      </Button>
      <Button component={Link} to="/home" className="sidebar__schedule">
        Schedule Mails
      </Button>
      <Button onClick={() => handleLogout()} className="sidebar__signout">
        Sign Out
      </Button>
    </div>
  );
}

export default Sidebar;

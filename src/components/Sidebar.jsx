import React from "react";
import "./Sidebar.css";
// import DuoIcon from "@material-ui/icons/Duo";
// import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";
import { Link } from "react-router-dom";

function Sidebar({ setShowEditor, showEditor, handleLogout }) {
  return (
    <div className="sidebar">
      <Button className="sidebar__compose" onClick={() => setShowEditor(true)}>
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

      {/* <div className="sidebar__footer">
        <div className="sidebar__footerIcons">

          <IconButton>
            <DuoIcon />
          </IconButton>

          <IconButton>
            <PhoneIcon />
          </IconButton>
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;

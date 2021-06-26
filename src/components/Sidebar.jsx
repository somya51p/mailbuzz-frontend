import React from "react";
import "./Sidebar.css";
// import DuoIcon from "@material-ui/icons/Duo";
// import PhoneIcon from "@material-ui/icons/Phone";
import { Button } from "@material-ui/core";

function Sidebar() {

  return (
    <div className="sidebar">
      <Button
        className="sidebar__compose"
      >
        Compose
      </Button>
      <Button
        className="sidebar__history"
      >
        History
      </Button>
      <Button
        className="sidebar__schedule"
      >
        Schedule Mails
      </Button>
      <Button
        className="sidebar__signout"
      >
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

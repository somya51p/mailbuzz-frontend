import React from "react";
import "./Header.css";
import { IconButton } from "@material-ui/core";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import AppsIcon from "@material-ui/icons/Apps";
import NotificationsIcon from "@material-ui/icons/Notifications";
import emaillogo from "../logo.jpg";

function Header() {

  return (
    <div className="header">
      <div className="header__left">
        <img src={emaillogo} alt="" />
        <div>
            <h3>Mailbuzz</h3>
        </div>
      </div>
      <div className="header__middle">
        <SearchIcon />
        <input placeholder="Search mail" type="text" />
        <ArrowDropDownIcon className="header__inputCaret" />
      </div>
      <div className="header__right">
        <IconButton>
          <AppsIcon />
        </IconButton>
        <IconButton>
          <NotificationsIcon />
        </IconButton>
      </div>
    </div>
  );
}

export default Header;

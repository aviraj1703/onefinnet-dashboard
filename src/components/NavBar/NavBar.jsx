import * as React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import AdminIcon from "../../assets/admin.jpg";
import "./NavBar.css";

export default function NavBar() {
  return (
    <div className="navbar">
      <h2>Onefinnet</h2>
      <div className="widgets">
        <div className="search-box">
          <div className="icon-common">
            <SearchOutlinedIcon className="search" sx={{ color: "rgb(63, 63, 63)" }} />
          </div>
          <input placeholder="Start searching" type="text" />
        </div>
        <div className="icon-common">
          <NotificationsNoneOutlinedIcon
            className="notification"
            sx={{ color: "gray" }}
          />
        </div>
        <div className="icon-common">
          <SettingsOutlinedIcon className="settings" sx={{ color: "gray" }} />
        </div>
        <div className="icon-common">
          <AppsOutlinedIcon className="Appbar" sx={{ color: "gray" }} />
        </div>
        <div className="profile">
          <img
            style={{ width: "25px", height: "25px", borderRadius: "100%" }}
            src={AdminIcon}
            alt="Admin"
          />
        </div>
      </div>
    </div>
  );
}

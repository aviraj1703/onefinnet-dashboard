import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import AccountCircle from "@mui/icons-material/AccountCircle";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import "./NavBar.css";

export default function NavBar() {
  return (
    <Box sx={{ flexGrow: 1, background: "transparent" }}>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "transparent",
          boxShadow: "none",
          borderBottom: "1px solid silver",
          paddingX: "5px",
        }}
      >
        <Toolbar sx={{ padding: "0px" }}>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              display: { xs: "none", sm: "block" },
              color: "black",
              fontWeight: "bold",
            }}
          >
            Onefinnet
          </Typography>
          <Box sx={{ flexGrow: 1, backgroundColor: "transparent" }} />
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: "10px" }}>
            <div className="search-box">
              <IconButton size="small" color="inherit">
                <SearchOutlinedIcon sx={{ color: "rgb(63, 63, 63)" }} />
              </IconButton>
              <input placeholder="Start searching" type="text" />
            </div>
            <IconButton size="medium" color="inherit">
              <NotificationsNoneOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <SettingsOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <AppsOutlinedIcon sx={{ color: "gray" }} />
            </IconButton>
            <IconButton size="medium" color="inherit">
              <AccountCircle sx={{ color: "gray" }} />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

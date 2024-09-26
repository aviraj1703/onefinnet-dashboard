import React, { useState } from "react";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import KeyboardTabOutlinedIcon from "@mui/icons-material/KeyboardTabOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import "./SideBar.css";

const SideBar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeIndex, setActiveIndex] = useState(0);
  const [rotate, setRotate] = useState(true);

  const items = [
    {
      name: "Dashboard",
      icon: <HomeOutlinedIcon sx={{ height: "1.5rem", width: "1.5rem" }} />,
    },
  ];

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  const handleIconClick = () => {
    setIsOpen(!isOpen);
    setRotate(!rotate);
  };

  return (
    <div className="side-bar" style={{ width: isOpen ? "17vw" : "5vw" }}>
      <div className="side-bar-items">
        <div>
          {items.map((item, index) => (
            <div
              key={index}
              className={`item ${activeIndex === index ? "active" : ""}`}
              onClick={() => handleItemClick(index)}
            >
              {item.icon}
              {isOpen ? item.name : ""}
            </div>
          ))}
        </div>
        <div
          className={`open-close-button ${rotate ? "rotate" : ""}`}
          onClick={handleIconClick}
        >
          <KeyboardTabOutlinedIcon
            sx={{ height: "1rem", width: "1.2rem", marginTop: "2px" }}
          />
        </div>
        <div className={`arrow-button`}>
          <ExpandMoreIcon
            sx={{ height: "1.1rem", width: "1.3rem", marginTop: "2px" }}
          />
        </div>
      </div>
    </div>
  );
};

export default SideBar;

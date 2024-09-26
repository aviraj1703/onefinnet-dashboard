import React from "react";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import LocalActivityOutlinedIcon from "@mui/icons-material/LocalActivityOutlined";
import "./JobData.css"

const JobData = () => {
  return (
    <div className="job-data">
      <div className="section1">
        <div className="sub-section1">
          <div
            style={{
              backgroundColor: "blue",
              padding: "3%",
              borderRadius: "100%",
              width: "fit-content",
              marginTop: "2px"
            }}
          >
            <BusinessCenterOutlinedIcon
              sx={{ color: "white", height: "1rem", width: "1.4rem", marginTop: "3px" }}
            />
          </div>
          <div className="text">
            <h2>15</h2>
            <p>Total Jobs</p>
          </div>
        </div>
        <div className="sub-section1">
          <div
            style={{
              backgroundColor: "rgb(229, 184, 100)",
              padding: "3%",
              borderRadius: "100%",
              width: "fit-content",
              marginTop: "2px"
            }}
          >
            <PeopleAltOutlinedIcon
              sx={{ color: "white", height: "1rem", width: "1.4rem", marginTop: "3px" }}
            />
          </div>
          <div className="text">
            <h2>1500</h2>
            <p>Applicants</p>
          </div>
        </div>
      </div>
      <div className="section1">
        <div className="sub-section1">
          <div
            style={{
              backgroundColor: "rgb(74, 128, 222)",
              padding: "3%",
              borderRadius: "100%",
              width: "fit-content",
              marginTop: "2px"
            }}
          >
            <LocalActivityOutlinedIcon
              sx={{ color: "white", height: "1rem", width: "1.4rem", marginTop: "3px" }}
            />
          </div>
          <div className="text">
            <h2>20,000</h2>
            <p>AI credits</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobData;

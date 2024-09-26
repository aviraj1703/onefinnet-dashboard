import React from "react";
import privateJobBoardImg from "../../assets/private_job_board.png";
import "./PrivateJob.scss";

const PrivateJob = () => {
  return (
    <div className="private-job">
      <img
        src={privateJobBoardImg}
        alt="Private Job Board"
        style={{ width: "100%", height: "65%" }}
      />
      <p>
        <b>Private Job Board</b>
      </p>
      <p style={{ color: "gray", margin: "0%", fontSize: "0.8rem" }}>
        Your private job postings will appear here, accessible to the public via
        a company-specific URL.
      </p>
    </div>
  );
};

export default PrivateJob;

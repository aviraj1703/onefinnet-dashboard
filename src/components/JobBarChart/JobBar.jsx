import React from "react";
import "./JobBar.css";
import JobBarChart from "./JobBarChart";

const JobBar = () => {
  const data = {
    labels: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
    datasets: [
      {
        label: "Number of Jobs",
        data: [150, 100, 200],
        backgroundColor: [
          "rgb(93, 93, 243)",
          "rgb(93, 173, 243)",
          "rgb(93, 238, 243)",
        ],
        barPercentage: 0.5,
        categoryPercentage: 0.8,
        borderRadius: 10,
        stack: "jobs",
      },

      {
        label: "Remaining Jobs (Trail)",
        data: [80, 100, 50],
        backgroundColor: "rgba(192, 192, 192, 0.5)",
        barPercentage: 0.5,
        categoryPercentage: 0.8,
        borderRadius: 5,
        stack: "jobs",
      },
    ],
  };

  return (
    <div className="job-bar-chart">
      <h4>Your Job Postings</h4>
      <JobBarChart data={data} />
      <div className="categories">
        <div
          style={{ borderLeft: "8px solid rgb(93, 93, 243)" }}
          className="category"
        >
          Frontend Developer
        </div>
        <div
          style={{ borderLeft: "8px solid rgb(93, 173, 243)" }}
          className="category"
        >
          Backend Developer
        </div>
        <div
          style={{ borderLeft: "8px solid rgb(93, 238, 243)" }}
          className="category"
        >
          Full-stack Developer
        </div>
      </div>
    </div>
  );
};

export default JobBar;

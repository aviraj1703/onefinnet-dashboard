import React from "react";
import "./Stats.css";
import JobData from "../Jobs/JobData";
import RadialChart from "../Radial/RadialChart";
import PrivateJob from "../PrivateJobs/PrivateJob";

const Stats = () => {
  const chartData = {
    labelss: ["Not Reviewed", "Total Applicants"],
    totalApplicants: 100,
    notReviewed: 25,
    colors: ["rgb(203, 200, 200)", "rgb(139, 90, 238)"],
  };
  return (
    <div className="stats">
      <div className="introduction">
        <h2>Welcome back, Lewis</h2>
        <p>
          Here's whats changed in your talent hunt journey! You can evaluate
          candidates, attract job seekers, and redefine the candidate experience
          for a new era of your workspace from here
        </p>
      </div>
      <div className="data">
        <JobData />
        <RadialChart chartData={chartData} />
        <PrivateJob />
      </div>
    </div>
  );
};

export default Stats;

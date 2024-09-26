import React from "react";
import "./Stats.scss";
import JobData from "../Jobs/JobData";
import RadialChart from "../Radial/RadialChart";
import PrivateJob from "../PrivateJobs/PrivateJob";

const Stats = () => {
  return (
    <div className="stats">
      <div className="introduction">
        <h2>Welcome back&#44; Lewis</h2>{" "}
        <p>
          Here&#39;s what has changed in your talent hunt journey&#33; You can
          evaluate candidates&#44; attract job seekers&#44; and redefine the
          candidate experience for a new era of your workspace from here&#46;{" "}
        </p>
      </div>
      <div className="data">
        <JobData />
        <RadialChart />
        <PrivateJob />
      </div>
    </div>
  );
};

export default Stats;

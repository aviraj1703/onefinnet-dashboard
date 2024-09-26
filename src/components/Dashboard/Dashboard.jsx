import React from "react";
import "./Dashboard.css";
import Stats from "../Statisticks/Stats";
import Visual from "../Visualization/Visual";

const Dashboard = () => {
  return (
    <div className="Dashboard">
      <Stats />
      <Visual />
    </div>
  );
};

export default Dashboard;

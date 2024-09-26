import React, { useContext, useMemo } from "react";
import "./JobBar.scss";
import JobBarChart from "./JobBarChart";
import { DataContext } from "../ContextProvider/DataProvider";

const JobBar = () => {
  const { jobs } = useContext(DataContext);

  const generateColor = () => {
    const randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return `#${randomColor}`;
  };

  const data = useMemo(() => {
    const colors =
      jobs.length > 4
        ? Array.from({ length: jobs.length }, generateColor)
        : [
            "rgb(93, 93, 243)",
            "rgb(93, 173, 243)",
            "rgb(93, 238, 243)",
            "rgb(93, 243, 218)",
          ].slice(0, jobs.length);

    return {
      labels: jobs.map((job) => job.title),
      datasets: [
        {
          label: "Posted Jobs",
          data: jobs.map((job) => job.vacancies),
          backgroundColor: colors,
          barPercentage: 0.5,
          categoryPercentage: 0.8,
          borderRadius: 10,
          stack: "jobs",
        },
        {
          label: "Remaining Jobs",
          data: jobs.map((job) => job.totalJobs - job.vacancies),
          backgroundColor: "rgba(192, 192, 192, 0.5)",
          barPercentage: 0.5,
          categoryPercentage: 0.8,
          borderRadius: 5,
          stack: "jobs",
        },
      ],
    };
  }, [jobs]);

  const maxJobs = useMemo(() => {
    const maxTotalJob = Math.max(...jobs.map((job) => job.totalJobs));
    return Math.ceil(maxTotalJob / 100) * 100;
  }, [jobs]);

  return (
    <div className="job-bar-chart">
      <h4>Your Job Postings</h4>
      <JobBarChart data={data} maxJobs={maxJobs} />
      <div className="categories">
        {data.labels.map((label, index) => (
          <div
            key={label}
            style={{
              borderLeft: `8px solid ${data.datasets[0].backgroundColor[index]}`,
            }}
            className="category"
          >
            {label}
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobBar;

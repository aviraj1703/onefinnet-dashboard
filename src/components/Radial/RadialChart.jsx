import React, { useContext, useMemo } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { DataContext } from "../ContextProvider/DataProvider";
import "./RadialChart.scss";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = () => {
  const { jobs, candidates } = useContext(DataContext);

  const notReviewed = useMemo(() => {
    return candidates.filter((candidate) => !candidate.reviewed).length;
  }, [candidates]);

  const totalApplicants = candidates.length;

  const colors = ["rgba(192, 192, 192, 0.5)", "rgb(139, 90, 238)"];
  const notReviewedPercentage = (notReviewed / totalApplicants) * 100;
  const reviewedPercentage = 100 - notReviewedPercentage;

  const data = {
    labels: ["Not Reviewed", "Total Applicants"],
    datasets: [
      {
        label: "Applicants",
        data: [notReviewedPercentage, reviewedPercentage],

        backgroundColor: [colors[1], colors[0]],
        hoverBackgroundColor: [colors[1], colors[0]],
        borderWidth: 0,
        borderRadius: 1,
        cutout: "70%",
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        callbacks: {
          label: function (tooltipItem) {
            if (tooltipItem.dataIndex === 0) {
              return ` ${notReviewed}`;
            } else {
              return ` ${totalApplicants}`;
            }
          },
        },
      },
    },
    rotation: 0,
    circumference: 360,
  };

  return (
    <div className="radial-chart">
      <div className="chart" style={{ width: 120, height: 120 }}>
        <Doughnut data={data} options={options} />
      </div>
      <div className="data-details">
        <div className="data-1">
          <div
            style={{
              width: "30%",
              height: "0.7rem",
              backgroundColor: `${colors[0]}`,
              borderRadius: "3px",
            }}
          ></div>
          <p>{data.labels[1]}</p>
        </div>
        <div className="data-1">
          <div
            style={{
              width: "30%",
              height: "0.7rem",
              backgroundColor: `${colors[1]}`,
              borderRadius: "3px",
            }}
          ></div>
          <p>{data.labels[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;

import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import "./RadialChart.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const RadialChart = ({ chartData }) => {
  const { labelss, totalApplicants, notReviewed, colors } = chartData;
  const notReviewedPercentage = (notReviewed / totalApplicants) * 100;
  const reviewedPercentage = 100 - notReviewedPercentage;

  const data = {
    labels: [labelss[0], labelss[1]],
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
          <p>{labelss[1]}</p>
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
          <p>{labelss[0]}</p>
        </div>
      </div>
    </div>
  );
};

export default RadialChart;

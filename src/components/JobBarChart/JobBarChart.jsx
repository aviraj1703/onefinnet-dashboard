import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const JobBarChart = ({ data, maxJobs }) => {
  const stepSize = Math.ceil(maxJobs / 10);

  const options = {
    indexAxis: "y",
    scales: {
      x: {
        min: 0,
        max: maxJobs,
        grid: {
          color: (context) =>
            context.tick.value === 0 ? "gray" : "rgba(192, 192, 192, 0.5)",
          drawBorder: false,
        },
        ticks: {
          color: "black",
          font: {
            weight: "normal",
          },
          stepSize: stepSize,
          autoSkip: false,
        },
      },
      y: {
        ticks: {
          display: false,
        },
        grid: {
          display: false,
        },
      },
    },
    plugins: {
      legend: {
        display: false,
      },
    },
    maintainAspectRatio: false,
  };

  return (
    <div
      style={{
        width: "100%",
        height: "67%",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default JobBarChart;

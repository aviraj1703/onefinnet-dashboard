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

const JobBarChart = ({ data }) => {
  const options = {
    indexAxis: "y",
    scales: {
      x: {
        min: 0,
        max: 275,
        grid: {
          color: (context) => (context.tick.value === 0 ? "gray" : "silver"),
          drawBorder: false,
        },
        ticks: {
          color: "black",
          font: {
            weight: "normal",
          },
          stepSize: 25,
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
        marginTop: "1%",
        height: "67%",
      }}
    >
      <Bar data={data} options={options} />
    </div>
  );
};

export default JobBarChart;

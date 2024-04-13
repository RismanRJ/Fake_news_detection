import React from "react";
import { Bar } from "react-chartjs-2";

const BarChart = ({ chartData }) => {
  const options = {
    plugins: {
      legend: {
        labels: {
          font: {
            size: 20,
            weight: "bold",
          },
        },
      },
    },
  };
  return <Bar data={chartData} options={options} />;
};

export default BarChart;

import { Box } from "@chakra-ui/react";
import React from "react";
import { Pie } from "react-chartjs-2";

const PieChart = ({ chartData }) => {
  return (
    <Pie
      data={chartData}
      options={{
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
      }}
    />
  );
};

export default PieChart;

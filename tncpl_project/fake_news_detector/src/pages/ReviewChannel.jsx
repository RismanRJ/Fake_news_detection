import { Box, SimpleGrid, Heading, Text, Textarea } from "@chakra-ui/react";
import BarChart from "../components/BarChart";
import { CategoryScale } from "chart.js";
import React, { useState } from "react";
import UserData from "../Data/Data";
import Chart from "chart.js/auto";
import PieChart from "../components/PieChart";
import ChannelData from "../Data/ChannelData";
import ChannelData1 from "../Data/ChannelData1";
const ReviewChannel = () => {
  Chart.register(CategoryScale);
  Chart.defaults.color = "#fff";
  const [userData, setUserData] = useState({
    labels: ChannelData.map((data) => data.year),
    datasets: [
      {
        label: "Truthness of the News",
        data: ChannelData.map((val) => val.truthGain),
        backgroundColor: ["green", "red"],
        borderColor: "black",
        borderWidth: 2,
        font: {
          weight: "bold",
        },
        fullSize: true,
      },
    ],
  });
  const [userData1, setUserData1] = useState({
    labels: ChannelData1.map((data) => data.year),
    datasets: [
      {
        label: "Credibility of the News",
        data: ChannelData1.map((val) => val.truthGain),
        backgroundColor: ["#6fdc6f", "#ff1a1a"],
        borderColor: "black",
        borderWidth: 2,
        font: {
          weight: "bold",
        },
        fullSize: true,
      },
    ],
  });
  return (
    <>
      <div className="home_main">
        <Heading textAlign={"center"} color={"white"}>
          NewsGuard-Fake news Predictor
        </Heading>
        <SimpleGrid
          columns={{ base: 2, md: 2 }}
          spacing={"10"}
          fontSize={"2rem"}
        >
          <Box>
            <Heading color={"white"} textAlign={"center"} py={10}>
              {ChannelData.map((val) => val.id == 1 && val.name)}
            </Heading>

            <Box h={"600px"} display={"grid"} placeItems={"center"} px={5}>
              <PieChart chartData={userData} />
            </Box>
          </Box>

          <Box>
            <Heading color={"white"} textAlign={"center"} py={10}>
              {ChannelData1.map((val) => val.id == 1 && val.name)}
            </Heading>

            <Box h={"600px"} display={"grid"} placeItems={"center"} px={5}>
              <PieChart chartData={userData1} />
            </Box>
          </Box>
        </SimpleGrid>
      </div>
    </>
  );
};

export default ReviewChannel;

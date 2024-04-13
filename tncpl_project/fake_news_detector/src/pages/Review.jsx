import { Box, SimpleGrid, Heading, Text } from "@chakra-ui/react";
import BarChart from "../components/BarChart";
import { CategoryScale } from "chart.js";
import React, { useState } from "react";
import UserData from "../Data/Data";
import Chart from "chart.js/auto";
import PieChart from "../components/PieChart";
const Review = () => {
  Chart.register(CategoryScale);
  Chart.defaults.color = "#fff";
  const [userData, setUserData] = useState({
    labels: UserData.map((data) => data.year),
    datasets: [
      {
        label: "Credibility of the News",
        data: UserData.map((data) => data.userGain),
        backgroundColor: ["#6fdc6f", "#ff1a1a"],
        borderColor: "white",
        borderWidth: 5,
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
          columns={{ base: 1, md: 2 }}
          spacing={"10"}
          fontSize={"2rem"}
        >
          <Box h={"600px"} display={"grid"} placeItems={"center"} px={5}>
            <BarChart chartData={userData} />
          </Box>
          <Box h={"600px"} display={"grid"} placeItems={"center"} px={5}>
            <PieChart chartData={userData} />
          </Box>
        </SimpleGrid>
      </div>
      <Box bg={"red"} color={"white"} fontWeight={900} h={"fit-content"}>
        <marquee direction="left" loop="">
          <Heading textAlign={"center"} size={"md"} h={"fit-content"}>
            Disclaimer
          </Heading>
          <Text>
            All the predictions we are providing is completely for under
            development stage. So please ,Careful with that information.
          </Text>
        </marquee>
      </Box>
    </>
  );
};

export default Review;

import {
  Box,
  Card,
  CardBody,
  CardHeader,
  CircularProgress,
  Divider,
  HStack,
  Text,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const LatestNews = () => {
  const [data, setData] = useState([]);
  const [label, setLabel] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(
        "https://newsapi.org/v2/top-headlines?country=us&category=business&apikey=93c0c35080624a1183c8025160edfabc"
      );
      console.log(res.data.articles);
      setData(...data, res.data.articles);
      //   fecthLabel();
      setLoading(false);
    };
    fetchData();
  }, []);
  const fecthLabel = (e) => {
    // console.log(data);
    data.forEach((val) => {
      var result = handleTextAnalyze(val.description);
      print(result);
      //   setLabel(...label, res);
      //   console.log(val.description);
    });
  };

  const handleTextAnalyze = async (text) => {
    // try {
    //   const res = await axios.post("http://127.0.0.1:5000/analyze_text", {
    //     text: text,
    //   });
    //   let true_percentage = res.data.true;
    //   let false_percentage = res.data.false;
    //   console.log(true_percentage, false_percentage);
    // } catch (error) {
    //   console.log(error);
    // }
    return "true";
  };
  return (
    <>
      {!loading ? (
        <Box className="home_main" display={"grid"} placeItems={"center"}>
          {data.map((val, index) => (
            <Card w={"90%"} border={"2px solid black"} my={2} key={index}>
              <CardHeader>
                <Text fontWeight={800}>{val.title}</Text>

                <HStack justify={"space-between"}>
                  <Text fontWeight={400}>{val.publishedAt}</Text>
                  {/* <Text px={3} py={1} bg={"green.400"} borderRadius={"10px"}>
                    True
                  </Text> */}
                </HStack>
                <Text textAlign={"end"} fontWeight={600}>
                  -{val.author}
                </Text>
                <a
                  href={val.url}
                  className="nav-link"
                  style={{
                    color: "black",
                  }}
                  target="blank"
                >
                  Explore ➡️
                </a>
              </CardHeader>
              <Divider />
              <CardBody textAlign={"justify"} fontWeight={400}>
                {val.description}
              </CardBody>
            </Card>
          ))}
        </Box>
      ) : (
        <CircularProgress></CircularProgress>
      )}
    </>
  );
};

export default LatestNews;

import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { FaRegNewspaper } from "react-icons/fa6";
import { IoDocumentsSharp } from "react-icons/io5";
import { GoGitCompare } from "react-icons/go";
import { FaLink } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { MdSummarize } from "react-icons/md";
import { MdRecordVoiceOver } from "react-icons/md";
import { MdOutlineTranslate } from "react-icons/md";
import { SiChatbot } from "react-icons/si";
import { FaWpexplorer } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AiFillAlert } from "react-icons/ai";

const Servies = () => {
  const navigate = useNavigate();
  const cardContent = [
    {
      icon: <FaRegNewspaper />,
      content: "Paste Your News article or News Website content",
    },
    {
      icon: <IoDocumentsSharp />,
      content: "Upload your News articles or News PDF",
    },
    {
      icon: <GoGitCompare />,
      content: "Compare your news between two websites",
      link: "/news",
    },
    {
      icon: <FaLink />,
      content: "Paste Your Social media Post Link",
      link: "/news",
    },
    {
      icon: <MdSummarize />,
      content: "Summaraize your News into Short Passage",
      link: "/summary",
    },
    {
      icon: <MdRecordVoiceOver />,
      content: "Enjoy Text to Speech Feature for your News",
      link: "/summary",
    },
    {
      icon: <SiChatbot />,
      content: "NewsGuard Provides more than 50+ Language support",
      link: "/news",
    },
    {
      icon: <FaWpexplorer />,
      content: "NewsGuard Also supports Live news all over the world",
      link: "/today_news",
    },
    {
      icon: <AiFillAlert />,
      content: "NewsGuard provides Report system for false information",
      link: "/report",
    },
  ];
  return (
    <>
      <SimpleGrid
        columns={{
          base: 1,
          md: 2,
        }}
        className="home_main"
        spacing={20}
        px={5}
        py={5}
      >
        {cardContent.map((val) => (
          <Card textAlign={"center"}>
            <CardHeader fontSize={"5rem"} mx={"auto"}>
              {val.icon}
            </CardHeader>
            <CardBody fontSize={"2rem"} fontWeight={600}>
              <Text>{val.content}</Text>
            </CardBody>
            <CardFooter>
              <Button mx={"auto"} bg={"green.400"} _hover={"none"}>
                <Link to={val.link}>Explore</Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </SimpleGrid>
    </>
  );
};

export default Servies;

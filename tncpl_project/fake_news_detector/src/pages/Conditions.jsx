import React, { useState } from "react";
import {
  Heading,
  Box,
  Card,
  Text,
  FormLabel,
  Input,
  Button,
  Checkbox,
  Spacer,
  HStack,
} from "@chakra-ui/react";
import { useNavigate } from "react-router";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";

const Conditions = () => {
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Box className="home_main" h={"100vh"} w={"100%"} color={"white"}>
        <Card
          w={"80%"}
          p={10}
          h={"100vh"}
          mx={"auto"}
          overflowY={"scroll"}
          position={"relative"}
        >
          <Heading textAlign={"center"}> Terms and Conditions</Heading>
          <Heading
            size={"md"}
            fontSize={"1.2rem"}
            textAlign={"justify"}
            my={5}
            fontWeight={600}
          >
            This website serves solely for ongoing research purposes. It should
            not be interpreted as a definitive measure of the accuracy,
            legitimacy, or any other characteristic of the text submitted to it.
          </Heading>

          <ul>
            <Heading size={"lg"} my={5}>
              Privacy Policy
            </Heading>
            <li>
              <Text fontWeight={600}>Website User Agreement</Text>
              <ul>
                <li>This website is open source for end users.</li>
                <li>
                  All information provided is collected from various sources,
                  including datasets such as Liar, News, Indian headlines, etc.
                </li>
              </ul>
            </li>
            <br />
            <li>
              <Text fontWeight={600}>Information We Collect</Text>
              <ul>
                <Text>
                  We may collect personal information that you provide to us
                  when you use our Site. This information may include:
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Contact information</li>
                </Text>
              </ul>
            </li>
            <br />
            <li>
              <Text fontWeight={600}> Terms of Acceptance</Text>
              <ul>
                <li>
                  The information provided on this website may not be entirely
                  accurate, as the project is still in development.
                </li>
                <li>
                  Users should exercise caution and critical thinking when
                  interpreting news predictions presented on this platform.
                </li>
                <li>
                  By using this website, you acknowledge and accept the terms
                  outlined above.
                </li>
              </ul>
              <br />
              <li>
                <HStack align={"baseline"}>
                  <Text fontWeight={500}>Contact US:-</Text>
                  <GrInstagram />
                  <FaGithub />
                  <FaXTwitter />
                </HStack>
              </li>
            </li>
          </ul>
          <Spacer />
          <Checkbox
            defaultChecked={isChecked}
            fontWeight={500}
            value={isChecked}
            onChange={() => setIsChecked(!isChecked)}
          >
            I have read all the terms and conditions
          </Checkbox>
          <Spacer />

          <Button
            my={5}
            p={5}
            bg={"green.400"}
            _hover={{
              bg: "green.600",
            }}
            disabled={isChecked}
            onClick={isChecked == true ? () => navigate("/news") : null}
          >
            I Agree
          </Button>
        </Card>
      </Box>
    </>
  );
};

export default Conditions;

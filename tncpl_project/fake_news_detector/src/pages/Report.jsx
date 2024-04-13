import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Spacer,
  Text,
  Textarea,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const Report = () => {
  useEffect(() => {
    const card = document.getElementById("flip-card");
    console.log(card);
    setInterval(() => {
      card.classList.toggle("flip-card-inner");
    }, 5000);
  });
  const [isSubmitted, SetSubmitted] = useState(false);
  return (
    <>
      <SimpleGrid
        className="home_main"
        columns={{
          base: 1,
          sm: 1,
          md: 1,
          lg: 2,
        }}
        placeItems={"center"}
      >
        <Box height={"70vh"} py={3} px={5}>
          <Card borderRadius={"0.5rem"} m={3} className="flip-card" h={"400px"}>
            <div id="flip-card">
              <div className="flip-card-front">
                <Image
                  src="src/assets/cybersecurity.jpg"
                  p={2}
                  h={"100%"}
                  w={"100%"}
                />
              </div>
              <div className="flip-card-back">
                <Text fontSize={"1.3rem"} fontWeight={500} px={2} my={3}>
                  What is NewsGuard Report System?
                </Text>
                <ul
                  style={{
                    textAlign: "start",
                  }}
                >
                  <li>Report to Cybersecurity measures</li>
                  <li>Prevent False Information Spreading</li>
                  <li>Complaint against Fake news Threat</li>
                  <li>Report to Cybersecurity measures</li>
                  <li>Report to Cybersecurity measures</li>
                </ul>
              </div>
            </div>
          </Card>
        </Box>
        <Box my={5}>
          <Card h={"100%"} py={5} bg={"whitesmoke"} mx={2}>
            <Heading textAlign={"center"} w={"100%"} color={"black"}>
              Report System
            </Heading>
            <br />
            <FormControl>
              <SimpleGrid columns={2} spacing={5}>
                <Box px={5}>
                  <FormLabel>First Name</FormLabel>
                  <Input type="text" border={"2px solid black"} required />
                </Box>
                <Box px={5}>
                  <FormLabel>Last Name</FormLabel>
                  <Input type="text" border={"2px solid black"} required />
                </Box>
              </SimpleGrid>
              <br />
              <SimpleGrid columns={2} spacing={5}>
                <Box px={5}>
                  <FormLabel>Email</FormLabel>
                  <Input type="email" border={"2px solid black"} required />
                </Box>
                <Box px={5}>
                  <FormLabel>Phone No</FormLabel>
                  <Input
                    type="number"
                    border={"2px solid black"}
                    maxLength={10}
                    required
                  />
                </Box>
              </SimpleGrid>
              <br />
              <Box px={5}>
                <FormLabel>News URL</FormLabel>
                <Input type="url" border={"2px solid black"} required />
              </Box>
              <br />
              <Box px={5}>
                <FormLabel>Reports regarding Fake News</FormLabel>
                <Textarea
                  size={"md"}
                  placeholder="Tell reason for Cybersecurity Measures"
                  border={"2px solid black"}
                />
              </Box>
            </FormControl>
            <Spacer />
            <Button
              type="submit"
              bg={"red"}
              mx={5}
              my={2}
              _hover={{
                boxShadow: "2px 2px 20px black",
              }}
              onClick={() => {
                SetSubmitted(!isSubmitted);
                setTimeout(() => {
                  SetSubmitted(false);
                }, 2500);
              }}
            >
              Report
            </Button>
          </Card>
        </Box>
      </SimpleGrid>
      {isSubmitted && (
        <Alert status="success">
          <AlertIcon />
          <AlertTitle>NewsGuard Report Form:</AlertTitle>
          <AlertDescription>
            Your report has successfully submitted
          </AlertDescription>
        </Alert>
      )}
    </>
  );
};

export default Report;

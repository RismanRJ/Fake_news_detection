import {
  Box,
  HStack,
  Heading,
  SimpleGrid,
  Text,
  VStack,
  Input,
  Button,
  FormLabel,
} from "@chakra-ui/react";
import React from "react";
import { FaCcMastercard } from "react-icons/fa";
import { FaCcVisa } from "react-icons/fa";
import { FaCcPaypal } from "react-icons/fa";
import { FaCopyright } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";
const Footer = () => {
  const headings = ["Our Solution", "Your Needs", "Offer"];
  const solution = [
    "Report to the Cybersecurity measures",
    "Translator",
    "Chatbot",
    "Summaraizer",
  ];

  return (
    <Box w={"100%"} color={"white"} bg={"black"} h={"max-content"}>
      <SimpleGrid columns={{ base: 2, sm: 2, lg: 4 }} spacing={10}>
        <VStack align={"start"} px={5} my={3}>
          <Heading size={"md"}>What is NewsGuard?</Heading>
          <Text textAlign={"justify"}>
            NewsGuard is an application which is used to identify the false
            information among the Internet
          </Text>
        </VStack>
        <VStack>
          <FormLabel>Subscribe to NewsGuard</FormLabel>
          <VStack>
            <Input color={"white"} />
            <Button>Subscribe</Button>
          </VStack>
        </VStack>
        <VStack align={"start"} px={5} my={3}>
          <Heading fontSize={"1.5rem"}>Our Solution</Heading>

          {solution.map((val, titleindex) => (
            <HStack align={"center"} key={titleindex}>
              <FaArrowRight />
              <Text color={"gray"} fontWeight={600} m={0}>
                {val}
              </Text>
            </HStack>
          ))}
        </VStack>

        <VStack align={"start"} px={5} mb={5}>
          <Heading
            fontSize={"1rem"}
            color={"whitesmoke"}
            my={2}
            fontWeight={900}
          >
            TNCPL 122
          </Heading>
          <VStack align={"start"}>
            <Text m={0}>Presented BY:-</Text>
            <Text m={0} fontWeight={600}>
              Risman J
            </Text>

            <Text m={0} fontWeight={600}>
              Kavitha sree V
            </Text>
          </VStack>
        </VStack>
      </SimpleGrid>
    </Box>
  );
};

export default Footer;

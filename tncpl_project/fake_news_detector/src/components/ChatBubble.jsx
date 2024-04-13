import { Box } from "@chakra-ui/react";
import React from "react";

const ChatBubble = ({ value, pos }) => {
  return (
    <Box
      bg={pos == "sender" ? "green.500" : "blue"}
      color={"white"}
      p={3}
      my={1}
      py={2}
      px={2}
      mx={1}
      borderRadius={"1.5rem"}
      w={"fit-content"}
    >
      {value}
    </Box>
  );
};

export default ChatBubble;

import {
  Box,
  Button,
  Card,
  Heading,
  SimpleGrid,
  Text,
  Textarea,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import axios from "axios";
import React, { useState } from "react";
import wordsCount from "words-count";
import { FaMicrophoneAlt } from "react-icons/fa";
import { BsFillMicMuteFill } from "react-icons/bs";
import { motion } from "framer-motion";
const Summarizer = () => {
  const [textloading, setTextLoading] = useState(false);
  const [text, setText] = useState("");
  const [responseText, setResponseText] = useState("");
  const [isSpeechOn, setIsSpeech] = useState(false);
  const handleSpeech = () => {
    setIsSpeech(!isSpeechOn);
    if (responseText.length > 1) {
      let utterance = new SpeechSynthesisUtterance(responseText);
      window.speechSynthesis.speak(utterance);
    } else {
      return alert("paste some Text for Text-to-Speech");
    }
  };
  const stopspeech = () => {
    setIsSpeech(!isSpeechOn);
    speechSynthesis.cancel();
  };
  return (
    <motion.div>
      <SimpleGrid
        className="home_main"
        columns={{
          base: 1,
          sm: 1,
          md: 2,
        }}
        spacing={10}
        px={5}
        py={5}
      >
        <motion.div
          initial={{
            x: "100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: "200",
            damping: 20,
          }}
        >
          <Card h={"70vh"} w={"100%"} p={5} my={2} className="summary_content">
            <Heading fontSize={"1.2rem"}>Summaraize System</Heading>
            <Textarea
              h={"100%"}
              border={"2px dashed black"}
              color={"black"}
              placeholder="Paste Your Content Here"
              _hover={"none"}
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
            <Text textAlign={"end"}>{wordsCount(text)} words</Text>
            <Button
              bg={"green.400"}
              my={2}
              onClick={async () => {
                setTextLoading(true);
                var data = {
                  text: text,
                };
                const res = await axios.post(
                  "http://127.0.0.1:5000/text",
                  data
                );
                // console.log(data);
                console.log(res.data.text);
                setResponseText(res.data.text);
                setTextLoading(false);
              }}
            >
              Summaraize
            </Button>
          </Card>
        </motion.div>
        <motion.div
          initial={{
            x: "-100vw",
          }}
          animate={{
            x: 0,
          }}
          transition={{
            delay: 0.3,
            type: "spring",
            stiffness: "200",
            damping: 20,
          }}
        >
          <Card h={"70vh"} w={"100%"} p={5} bg={"white"} my={2}>
            <Textarea
              h={"100%"}
              border={"2px dashed black"}
              color={"black"}
              _hover={"none"}
              value={responseText}
              readOnly
            />
            <HStack align={"baseline"} justifyContent={"space-between"} my={2}>
              <IconButton
                icon={!isSpeechOn ? <FaMicrophoneAlt /> : <BsFillMicMuteFill />}
                onClick={isSpeechOn ? handleSpeech : stopspeech}
              />
              <Text textAlign={"end"}>{wordsCount(responseText)} words</Text>
            </HStack>
          </Card>
        </motion.div>
      </SimpleGrid>
    </motion.div>
  );
};

export default Summarizer;

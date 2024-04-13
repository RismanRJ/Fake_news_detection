import {
  Box,
  Button,
  Card,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  IconButton,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Progress,
  Select,
  SimpleGrid,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  Textarea,
  useDisclosure,
} from "@chakra-ui/react";

import React, { useEffect, useRef, useState } from "react";
import { MdCancel } from "react-icons/md";
import { useNavigate } from "react-router";
import { BsTranslate } from "react-icons/bs";
import { SiChatbot } from "react-icons/si";
import axios from "axios";
import Chatbot from "./Chatbot";
import UserData from "../Data/Data";
import ReviewChannel from "./ReviewChannel";
import ChannelData from "../Data/ChannelData";
import pdfToText from "react-pdftotext";
import ChannelData1 from "../Data/ChannelData1";

const News = () => {
  const [file, setFile] = useState("");

  const inputRef = useRef();
  let val = 0;
  const handleFileClick = () => {
    inputRef.current.click();
  };
  const [pdfText, setPdfText] = useState("");
  const handleFileChange = async (event) => {
    const fileObj = event.target.files[0];

    if (!fileObj && fileObj.type == "application/pdf") {
      return alert("Upload Valid PDF File");
    }
    const txt = await pdfToText(fileObj);
    await setPdfText(txt);
    setFile(fileObj.name);
    console.log(pdfText);

    console.log("Selected file:", fileObj.name);
    event.target.value = null; // Reset the file input
  };

  const navigate = useNavigate();

  const { isOpen, onOpen, onClose } = useDisclosure();

  const [isChatBot, setIsChaTBot] = useState(false);
  const [link, setLink] = useState("");
  const [text, setText] = useState("");
  const [textloading, setTextLoading] = useState(false);
  const [language, setlanguage] = useState([]);
  const [translatedText, setTranslatedText] = useState(text);
  const [load, setLoad] = useState(false);
  const lang = [
    { af: "Afrikaans" },
    { sq: "Albanian" },
    { am: "Amharic" },
    { ar: "Arabic" },
    { hy: "Armenian" },
    { az: "Azerbaijani" },
    { eu: "Basque" },
    { be: "Belarusian" },
    { bn: "Bengali" },
    { bs: "Bosnian" },
    { bg: "Bulgarian" },
    { ca: "Catalan" },
    { ceb: "Cebuano" },
    { ckb: "Chinese" },
    { co: "Corsian" },
    { hr: "Croatian" },
    { cs: "Czech" },
    { da: "Danish" },
    { nl: "Dutch" },
    { en: "English" },
    { eco: "Esperanto" },
    { et: "Estonian" },
    { fi: "Finnish" },
    { fr: "French" },
    { fy: "Frisian" },
    { gl: "Galician" },
    { ka: "Georgian" },
    { de: "German" },
    { el: "Greek" },
    { gu: "Gujarati" },
    { ht: "Haitian Creole" },
    { ha: "Hausa" },
    { haw: "Hawaiian" },
    { he: "Hebrew" },
    { hi: "Hindi" },
    { hmn: "Hmong" },
    { hu: "Hungarian" },
    { is: "Icelandic" },
    { ig: "Igbo" },
    { id: "Indonesian" },
    { ga: "Irish" },
    { it: "Italian" },
    { ja: "Japanese" },
    { jw: "Javanese" },
    { kn: "Kannada" },
    { kk: "Kazah" },
    { km: "Khmer" },
    { ko: "Korean" },
    { Ku: "Kurdish" },
    { ky: "Kyrgyz" },
    { lo: "Lao" },
    { la: "Latin" },
    { lv: "Latvian" },
    { lt: "Lithuanian" },
    { lb: "Luxembourgish" },
    { mk: "Macedonian" },
    { mg: "Malagasy" },
    { ms: "Malay" },
    { ml: "Malayalam" },
    { mt: "Maltese" },
    { mi: "Maori" },
    { mr: "Marathi" },
    { mn: "Mongolian" },
    { my: "Myanmar" },
    { ne: "Nepali" },
    { no: "Norwegian" },
    { ny: "Nyanja" },
    { ps: "Pashto" },
    { fa: "Persian" },
    { pl: "Polish" },
    { pt: "Portuguese" },
    { pa: "Punjabi" },
    { ro: "Romanian" },
    { ru: "Russian" },
    { sm: "Samoan" },
    { gd: "Scots Gaelic gd" },
    { sr: "Serbanian" },
    { st: "Sesotho" },
    { sn: "Shona" },
    { sd: "Sindhi" },
    { si: "Sinhala" },
    { sk: "Slovak" },
    { sl: "Slovenian" },
    { so: "Somali" },
    { es: "Spanish" },
    { su: "Sundanese" },
    { sw: "Swahili" },
    { sv: "Swedish" },
    { tl: "Tagalog" },
    { tg: "Tajik" },
    { ta: "Tamil" },
    { te: "Telugu" },
    { th: "Thai" },
    { tr: "Turkish" },
    { uk: "Ukrainian" },
    { ur: "Urdu" },
    { uz: "Uzbek" },
    { vi: "Vietnamese" },
    { cy: "Welsh" },
    { xh: "Xhosa" },
    { yi: "Yiddish" },
    { yo: "Yoruba" },
    { zu: "Zulu" },
  ];

  const handleTranslate = async () => {
    setLoad(true);
    try {
      const res = await axios.post("http://127.0.0.1:5000/translate", {
        text: text,
        target_language: language,
      });

      console.log(res.data);
      setTranslatedText(res.data.text);
      setLoad(false);
    } catch (error) {
      console.log(error);
      setLoad(false);
    }
    setLoad(false);
  };

  const handleTextAnalyze = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/analyze_text", {
        text: text,
      });
      let true_percentage = res.data.true;
      let false_percentage = res.data.false;
      console.log(true_percentage, false_percentage);
      await UserData.map((val) =>
        val.id == 1
          ? (val.userGain = true_percentage)
          : (val.userGain = false_percentage)
      );
      navigate("/review");
    } catch (error) {
      console.log(error);
    }
  };

  const [channel1, setChannel1] = useState("");
  const [channel2, setChannel2] = useState("");
  const [channel1Text, setChannel1Text] = useState("");
  const [channel2Text, setChannel2Text] = useState("");

  const handlenewsChannelCheck = async () => {
    ChannelData.map((val) =>
      val.id == 1 ? (val.name = channel1) : (val.name = channel1)
    );
    ChannelData1.map((val) =>
      val.id == 1 ? (val.name = channel2) : (val.name = channel2)
    );
    try {
      const res = await axios.post("http://127.0.0.1:5000/analyze_text", {
        text: channel1Text,
      });
      const res1 = await axios.post("http://127.0.0.1:5000/analyze_text", {
        text: channel2Text,
      });
      let true_percentage = res.data.true;
      let false_percentage = res.data.false;

      let true_percentage1 = res1.data.true;
      let false_percentage1 = res1.data.false;
      console.log(true_percentage, false_percentage);
      console.log(true_percentage1, false_percentage1);
      await ChannelData.map((val) =>
        val.id == 1
          ? (val.truthGain = true_percentage)
          : (val.truthGain = false_percentage)
      );
      await ChannelData1.map((val) =>
        val.id == 1
          ? (val.truthGain = true_percentage1)
          : (val.truthGain = false_percentage1)
      );
    } catch (error) {
      console.log(error);
    }

    navigate("/reviewchannel");
  };

  const handleFileAnalyze = async () => {
    try {
      const res = await axios.post("http://127.0.0.1:5000/analyze_text", {
        text: pdfText,
      });
      let true_percentage = res.data.true;
      let false_percentage = res.data.false;
      console.log(true_percentage, false_percentage);
      await UserData.map((val) =>
        val.id == 1
          ? (val.userGain = true_percentage)
          : (val.userGain = false_percentage)
      );
      navigate("/review");
    } catch (error) {
      console.log(error);
    }
  };

  const handleLinkAnalyze = async () => {
    const res = await axios.post("http://127.0.0.1:5000/linkanalyze", {
      link: link,
    });

    console.log(res.data);
  };

  return (
    <>
      <SimpleGrid
        className="home_main"
        columns={{ base: 1 }}
        placeItems={"center"}
        position={"relative"}
        h={"70vh"}
      >
        <IconButton
          position={"absolute"}
          bottom={0}
          right={0}
          mx={2}
          onClick={onOpen}
          zIndex={5}
          border={"2px solid black"}
        >
          <BsTranslate />
        </IconButton>
        <Tabs
          position="relative"
          variant="unstyled"
          w={{ base: "300px", sm: "500px", md: "600px", lg: "80%" }}
        >
          <TabList color={"white"} fontWeight={800}>
            {/* <Tab>Paste Link</Tab> */}
            <Tab>Paste Text</Tab>
            <Tab> Upload PDF</Tab>
            <Tab>Analayze Channel</Tab>
            <Tab>Paste URL</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="2px"
            bg="blue.500"
            borderRadius="1px"
          />
          <TabPanels>
            <TabPanel>
              <Box>
                <FormControl>
                  <FormLabel color={"white"} fontWeight={500}>
                    Paste Your Text here
                  </FormLabel>
                  <Textarea
                    size={"lg"}
                    color={"white"}
                    rows={10}
                    value={text}
                    onChange={(e) => {
                      setText(e.target.value);
                      setTranslatedText(e.target.value);
                    }}
                    maxLength={1200}
                  ></Textarea>
                  <Button my={2} w={"100%"} onClick={handleTextAnalyze}>
                    Analayze
                  </Button>
                </FormControl>
              </Box>
            </TabPanel>
            <TabPanel>
              <Box
                h={"300px"}
                border={"2px dashed white"}
                borderRadius={"0.5rem"}
                display={"grid"}
                placeItems={"center"}
              >
                <Input
                  type="file"
                  ref={inputRef}
                  onChange={handleFileChange}
                  display={"none"}
                  accept="application/pdf"
                />
                {!file && (
                  <Button onClick={handleFileClick}>Upload your PDF</Button>
                )}

                {file.length > 0 && (
                  <Box
                    alignItems={"start"}
                    display={"flex"}
                    flexDirection={{
                      base: "column",
                    }}
                  >
                    <Card
                      position={"relative"}
                      w={"fit-content"}
                      mx={{ base: 2, md: 0 }}
                      py={3}
                      px={5}
                    >
                      <Text fontSize={"1.5rem"} fontWeight={500}>
                        {file}
                        <MdCancel
                          fontSize={"1.2rem"}
                          color="black"
                          onClick={() => setFile("")}
                          style={{
                            position: "absolute",
                            right: "0",
                            top: "0",
                          }}
                        />
                      </Text>
                    </Card>

                    <Button
                      alignSelf={"center"}
                      mx={2}
                      my={{
                        base: 5,
                        md: 5,
                      }}
                      onClick={handleFileAnalyze}
                    >
                      Analayze
                    </Button>
                  </Box>
                )}
              </Box>
            </TabPanel>
            <TabPanel>
              <SimpleGrid
                columns={{
                  base: 2,
                  lg: 2,
                }}
                color={"white"}
                spacing={10}
              >
                <Box color={"white"}>
                  <FormLabel>Enter Channel name 1</FormLabel>
                  <Input
                    type="text"
                    value={channel1}
                    onChange={(e) => setChannel1(e.target.value)}
                  />
                  <br />
                  <br />
                  <Textarea
                    rows={10}
                    value={channel1Text}
                    onChange={(e) => setChannel1Text(e.target.value)}
                  ></Textarea>
                </Box>

                <Box color={"white"}>
                  <FormLabel>Enter Channel name 2</FormLabel>
                  <Input
                    type="text"
                    value={channel2}
                    onChange={(e) => setChannel2(e.target.value)}
                  />
                  <br />
                  <br />
                  <Textarea
                    rows={10}
                    value={channel2Text}
                    onChange={(e) => setChannel2Text(e.target.value)}
                  ></Textarea>
                </Box>
              </SimpleGrid>

              <Button w={"full"} my={5} onClick={handlenewsChannelCheck}>
                Compare
              </Button>
            </TabPanel>
            <TabPanel>
              <Box textAlign={"center"}>
                <FormControl>
                  <FormLabel color={"white"} fontWeight={500}>
                    Paste Your Link here
                  </FormLabel>
                  <Input
                    type="link"
                    value={link}
                    onChange={(e) => setLink(e.target.value)}
                    color={"white"}
                  />
                  <Button
                    my={5}
                    isLoading={textloading}
                    onClick={() => {
                      navigate("/review");
                    }}
                  >
                    Check Fact
                  </Button>
                </FormControl>
              </Box>
            </TabPanel>
          </TabPanels>
        </Tabs>
        <IconButton
          position={"absolute"}
          bottom={0}
          left={0}
          mx={5}
          onClick={() => setIsChaTBot(true)}
          border={"2px solid black"}
        >
          <SiChatbot />
        </IconButton>
        {isChatBot && <Chatbot chatbot={isChatBot} />}
      </SimpleGrid>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <HStack align={"baseline"}>
              <Text>Translator</Text>
              <BsTranslate />
            </HStack>
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <Select
                placeholder="Select language to translate"
                onChange={(e) => setlanguage(e.target.value)}
              >
                {lang.map((val, index) => (
                  <option key={index} value={Object.keys(val)}>
                    {Object.values(val)}
                  </option>
                ))}
              </Select>
              <div id="google_translate_element"></div>
            </FormControl>
            <Textarea
              rows={10}
              my={2}
              border={"2px dashed black"}
              value={translatedText}
              readOnly
            ></Textarea>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button
              colorScheme="blue"
              onClick={handleTranslate}
              isLoading={load}
            >
              Translate
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default News;

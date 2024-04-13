import {
  Box,
  Button,
  Card,
  HStack,
  Heading,
  Icon,
  Image,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { GrInstagram } from "react-icons/gr";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { motion } from "framer-motion";

const Home = () => {
  const navigate = useNavigate();

  return (
    <motion.div>
      <SimpleGrid
        columns={{ base: 1, sm: 1, md: 1, lg: 2 }}
        placeItems={"center"}
        className="home_main"
      >
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
          <Box
            color={"white"}
            w={{
              base: 200,
              md: 400,
            }}
          >
            <Heading size="2xl">
              <HStack align={"center"}>
                <Text>NewsGuard</Text>
                <Image
                  src="src/assets/logo.jpg"
                  h={50}
                  borderRadius={"2rem"}
                  border={"2px solid white"}
                />
              </HStack>
            </Heading>
            <Text fontSize="2xl" fontWeight={"400"}>
              Welcome to NewsGuard👨‍⚕️
            </Text>
            <Text fontWeight={700} textAlign={"justify"}>
              NewsGuard supports features like <b>chatbot</b> for real-time
              interactions, a <b>summarizer</b> to condense lengthy articles, a
              translator for <b>multilingual support</b>, and a mechanism to
              <b>report suspicious content</b> to enhance cybersecurity. 🌐🔍🚫
            </Text>
            <Heading as={"h6"} size={"lg"}>
              Contact
              <HStack py={5}>
                <GrInstagram />
                <FaGithub />
                <FaXTwitter />
              </HStack>
            </Heading>
          </Box>
        </motion.div>

        <motion.div
          initial={{
            x: "100vw",
            scale: 1,
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
          whileHover={{
            scale: 1.1,
            transition: {
              duration: 0.2,
              delay: 0.1,
            },
          }}
        >
          <Box boxSize={"lg"} w={"100%"} px={10} my={10}>
            <div
              id="carouselExampleCaptions"
              className="carousel slide carousel-fade"
              data-bs-ride="carousel"
            >
              <div className="carousel-indicators">
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="0"
                  className="active"
                  aria-current="true"
                  aria-label="Slide 1"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="1"
                  aria-label="Slide 2"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="2"
                  aria-label="Slide 3"
                ></button>
                <button
                  type="button"
                  data-bs-target="#carouselExampleCaptions"
                  data-bs-slide-to="3"
                  aria-label="Slide 4"
                ></button>
              </div>
              <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="1200">
                  <Image
                    src="src/assets/fake_news.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Fake News Classifier</h5>
                    <p>NewsGuard helps you detect fake news among internet</p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1200">
                  <Image
                    src="src/assets/chatbot_image.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Integrated Chatbot support</h5>
                    <p>
                      Users can clarify their doubts regarding their news
                      through our chatbot
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1200">
                  <Image
                    src="src/assets/translate.jpg"
                    className="d-block w-100"
                    alt="..."
                  />
                  <div className="carousel-caption d-none d-md-block">
                    <h5>Translator</h5>
                    <p>
                      NewsGuard supports more than 50+ language translation
                      support
                    </p>
                  </div>
                </div>
                <div className="carousel-item" data-bs-interval="1200">
                  <Image
                    src="src/assets/security.jpg"
                    className="d-block w-100"
                    alt="..."
                  />

                  <div className="carousel-caption d-none d-md-block">
                    <h5>Security Measures</h5>
                    <p>NewsGuard supports report system regarding fake news</p>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev"
              >
                <span
                  className="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next"
                type="button"
                data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next"
              >
                <span
                  className="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <Button w={"100%"} onClick={() => navigate("/terms")} my={2}>
              Get Started
            </Button>
          </Box>
        </motion.div>
      </SimpleGrid>
    </motion.div>
  );
};

export default Home;

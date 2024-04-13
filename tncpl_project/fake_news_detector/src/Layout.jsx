import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import News from "./pages/News";
import Footer from "./components/Footer";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Box w={"100%"} position={"relative"} bottom={0}>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;

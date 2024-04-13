import { useState } from "react";
import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import News from "./pages/News";
import Layout from "./Layout";
import Review from "./pages/Review";
import Report from "./pages/Report";
import Summarizer from "./pages/Summarizer";
import ReviewChannel from "./pages/ReviewChannel";
import Conditions from "./pages/Conditions";
import Servies from "./pages/Servies";
import LatestNews from "./pages/LatestNews";

function App() {
  const [count, setCount] = useState(0);

  return (
    <Layout>
      <Routes>
        <Route index element={<Home />} path="/" />
        <Route element={<News />} path="/news" />
        <Route element={<Review />} path="/review" />
        <Route element={<LatestNews />} path="/today_news" />
        <Route element={<Report />} path="/report" />
        <Route element={<Summarizer />} path="/summary" />
        <Route element={<ReviewChannel />} path="/reviewchannel" />
        <Route element={<Conditions />} path="/terms" />
        <Route element={<Servies />} path="/services" />
      </Routes>
    </Layout>
  );
}

export default App;

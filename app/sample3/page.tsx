import React from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import ProjectsSection from "./components/ProjectsSection";
import AwardsSection from "./components/AwardsSection";
import StatsSection from "./components/StatsSection";
import NewsSection from "./components/NewsSection";
import Footer from "./components/Footer";
import Box from "@mui/material/Box";

export default function MainPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh", bgcolor: "#111", color: "#fff" }}>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <AwardsSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </Box>
  );
}
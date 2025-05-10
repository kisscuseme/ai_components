"use client";

import React from "react";
import Box from "@mui/material/Box";
import Header from "../components/mongming/Header";
import Footer from "../components/mongming/Footer";
import HeroSection from "../components/mongming/HeroSection";
import AboutSection from "../components/mongming/AboutSection";
import ServicesSection from "../components/mongming/ServicesSection";
import ProjectsSection from "../components/mongming/ProjectsSection";
import NewsSection from "../components/mongming/NewsSection";
import ContactSection from "../components/mongming/ContactSection";

export default function IntroPage() {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
      <Header />
      <Box component="main" sx={{ flexGrow: 1 }}>
        <HeroSection />
        <AboutSection />
        <ServicesSection />
        <ProjectsSection />
        <NewsSection />
        <ContactSection />
      </Box>
      <Footer />
    </Box>
  );
}

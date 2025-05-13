import React from "react";
import { Container } from "@mui/material";
import Header from "./components/Header";
import ServiceGrid from "./components/ServiceGrid";
import ConnectSection from "./components/ConnectSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Container maxWidth="xl" sx={{ py: 4 }}>
        <ServiceGrid />
        <ConnectSection />
      </Container>
      <Footer />
    </main>
  );
}

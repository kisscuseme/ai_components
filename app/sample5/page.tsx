"use client";

import { Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import Banner from "./components/Banner";
import FeatureSection from "./components/FeatureSection";
import CardSection from "./components/CardSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Container maxWidth="lg" sx={{ py: 8 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography variant="h2" component="h2" gutterBottom>
            최고의 서비스를 제공합니다
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            저희는 고객의 니즈에 맞는 최적의 솔루션을 제공하기 위해 항상
            노력하고 있습니다. 혁신적인 기술과 창의적인 아이디어로 비즈니스의
            성장을 돕겠습니다.
          </Typography>
        </Box>

        <FeatureSection />
        <CardSection />
      </Container>
      <Footer />
    </main>
  );
}

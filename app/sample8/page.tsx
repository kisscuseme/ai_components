"use client";

import { Box, Container, Typography } from "@mui/material";
import Header from "./components/Header";
import CategorySection from "./components/CategorySection";
import Banner from "./components/Banner";
import ProductList from "./components/ProductList";
import PopularProducts from "./components/PopularProducts";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Header />
      <Banner />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <CategorySection />
        <Box sx={{ textAlign: "center", mb: 6, mt: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            인기 상품
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{ maxWidth: 700, mx: "auto" }}
          >
            고객들이 가장 많이 찾는 인기 상품들을 만나보세요. 최고의 품질과 성능을 보장합니다.
          </Typography>
        </Box>
        <ProductList />
        <Box sx={{ my: 6 }}>
          <Typography variant="h4" component="h2" gutterBottom align="center">
            추천 상품
          </Typography>
          <PopularProducts />
        </Box>
      </Container>
      <Footer />
    </main>
  );
}
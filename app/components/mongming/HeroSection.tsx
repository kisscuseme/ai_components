"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { alpha } from "@mui/material/styles";

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: "url(/mongming/hero-bg.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        py: { xs: 10, md: 20 },
        color: "white",
      }}
    >
      {/* 배경 오버레이 */}
      <Box
        sx={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: alpha("#000", 0.5),
          zIndex: 1,
        }}
      />

      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 8, lg: 7 }}>
            <Typography
              variant="h2"
              component="h1"
              sx={{
                fontWeight: 700,
                mb: 3,
                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                fontSize: { xs: "2.5rem", md: "3.5rem" },
              }}
            >
              목표는 완벽한 분양 시장을 만드는 것입니다
            </Typography>

            <Typography
              variant="h6"
              sx={{
                mb: 4,
                textShadow: "0 1px 5px rgba(0,0,0,0.3)",
                fontWeight: 400,
                lineHeight: 1.6,
              }}
            >
              철저한 교육을 바탕으로 양성된 전문가들에 움직이는 분양 시장을
              만들기 위해 MongMing는 분양 영업의 체계화에 나섰고, 독보적인 분양
              성과로 증명하였습니다.
            </Typography>

            <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                size="large"
                href="/intro#about"
                sx={{
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderRadius: 2,
                }}
              >
                회사 소개
              </Button>

              <Button
                variant="outlined"
                size="large"
                href="/intro#contact"
                sx={{
                  py: 1.5,
                  px: 3,
                  fontWeight: 600,
                  borderRadius: 2,
                  color: "white",
                  borderColor: "white",
                  "&:hover": {
                    borderColor: "white",
                    backgroundColor: alpha("#fff", 0.1),
                  },
                }}
              >
                문의하기
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;

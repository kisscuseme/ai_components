"use client";

import { Box, Button, Container, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "70vh", md: "80vh" },
        display: "flex",
        alignItems: "center",
        backgroundImage:
          "url(https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?fm=jpg&q=60&w=3000)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        "&::before": {
          content: '""',
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: "100%", md: "60%" }, color: "white" }}>
          <Typography
            variant="h1"
            component="h1"
            sx={{
              fontSize: { xs: "2.5rem", md: "3.5rem" },
              fontWeight: 700,
              mb: 2,
            }}
          >
            비즈니스의 성장을 위한 최고의 솔루션
          </Typography>
          <Typography
            variant="body1"
            sx={{
              fontSize: { xs: "1rem", md: "1.2rem" },
              mb: 4,
              opacity: 0.9,
            }}
          >
            혁신적인 기술과 창의적인 아이디어로 비즈니스의 성장을 돕습니다.
            고객의 니즈에 맞는 최적의 솔루션을 제공하기 위해 항상 노력하고
            있습니다.
          </Typography>
          <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
            <Button
              variant="contained"
              size="large"
              endIcon={<ArrowForwardIcon />}
              sx={{ px: 4, py: 1.5 }}
            >
              자세히 알아보기
            </Button>
            <Button
              variant="outlined"
              size="large"
              sx={{ px: 4, py: 1.5, color: "white", borderColor: "white" }}
            >
              문의하기
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

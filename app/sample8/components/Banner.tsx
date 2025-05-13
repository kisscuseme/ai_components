"use client";

import { Box, Button, Container, Paper, Typography } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#f5f5f5",
        py: 4,
      }}
    >
      <Container maxWidth="lg">
        <Paper
          elevation={0}
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            overflow: "hidden",
            borderRadius: 4,
            backgroundColor: "#2d3748",
            color: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              p: { xs: 3, md: 6 },
              width: { xs: "100%", md: "50%" },
            }}
          >
            <Typography
              variant="h3"
              component="h1"
              sx={{ fontWeight: 700, mb: 2 }}
            >
              최신 그래픽카드 할인 특가
            </Typography>
            <Typography variant="body1" sx={{ mb: 4, opacity: 0.8 }}>
              RTX 5060 Ti 16GB 최신 그래픽카드를 특별 할인된 가격으로 만나보세요.
              게이밍과 작업 모두를 위한 최고의 선택입니다.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              endIcon={<ArrowForwardIcon />}
              sx={{ alignSelf: "flex-start" }}
            >
              자세히 보기
            </Button>
          </Box>
          <Box
            sx={{
              width: { xs: "100%", md: "50%" },
              position: "relative",
            }}
          >
            <Box
              component="img"
              src="https://images.unsplash.com/photo-1618764400608-9e7115eede74?fm=jpg&q=60&w=3000"
              alt="RTX 그래픽카드"
              sx={{
                width: "100%",
                height: { xs: 200, sm: 300, md: "100%" },
                objectFit: "cover",
              }}
            />
          </Box>
        </Paper>
      </Container>
    </Box>
  );
};

export default Banner;
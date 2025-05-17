import React from "react";
import { Container, Box, Typography, Grid } from "@mui/material";
import TopicList from "./components/TopicList";
import PathButton from "./components/PathButton";

export default function HomeView() {
  return (
    <main>
      <Container maxWidth="lg" sx={{ py: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 4,
          }}
        >
          <Typography variant="h4" fontWeight={700} color="primary">
            인기 토픽
          </Typography>
          <PathButton />
        </Box>
        <TopicList type="popular" />
        <Box sx={{ mt: 6, mb: 2 }}>
          <Typography variant="h4" fontWeight={700} color="primary">
            최신 토픽
          </Typography>
        </Box>
        <TopicList type="latest" />
      </Container>
    </main>
  );
}

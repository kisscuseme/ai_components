import React from "react";
import { Container, Typography, Box } from "@mui/material";
import TopicTree from "../components/TopicTree";
import SubtopicCreateButton from "../components/SubtopicCreateButton";

export default function TopicsPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 4,
        }}
      >
        <Typography variant="h4" fontWeight={700} color="primary">
          토픽 계층 구조
        </Typography>
        <SubtopicCreateButton />
      </Box>
      <TopicTree />
    </Container>
  );
}

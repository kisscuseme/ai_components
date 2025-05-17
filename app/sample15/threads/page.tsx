"use client";

import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ThreadList from "../components/ThreadList";
import { useSearchParams } from "next/navigation";

export default function ThreadsPage() {
  const searchParams = useSearchParams();
  const topicId = searchParams.get("topicId");
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
          {topicId ? `토픽 #${topicId}의 스레드` : "전체 스레드"}
        </Typography>
      </Box>
      <ThreadList topicId={topicId ? Number(topicId) : undefined} />
    </Container>
  );
}

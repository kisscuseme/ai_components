import React from "react";
import { Container, Typography, Box } from "@mui/material";
import ThreadDetail from "../../components/ThreadDetail";
import CommentList from "../../components/CommentList";

export default async function ThreadDetailPage({
  params,
}: {
  params: Promise<{ threadId: string }>;
}) {
  const { threadId } = await params;
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <ThreadDetail threadId={threadId} />
      <Box sx={{ mt: 4 }}>
        <Typography variant="h6" fontWeight={600} color="primary" gutterBottom>
          댓글
        </Typography>
        <CommentList threadId={threadId} />
      </Box>
    </Container>
  );
}

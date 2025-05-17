import React from "react";
import { Box } from "@mui/material";
import ThreadCard from "./ThreadCard";
import { threads } from "../data/dummyData";

export default function ThreadList({ topicId }: { topicId?: number }) {
  const filtered = topicId
    ? threads.filter((t) => t.topicId === topicId)
    : threads;
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
      {filtered.map((thread) => (
        <ThreadCard key={thread.id} thread={thread} />
      ))}
    </Box>
  );
}

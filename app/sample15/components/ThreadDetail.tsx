import React from "react";
import { Card, CardContent, Typography, Box, Chip } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";

const dummyThreads = [
  {
    id: 1,
    title: "AI 윤리의 미래는?",
    content: "AI가 사회에 미치는 영향과 윤리적 쟁점에 대해 토론해요.",
    likes: 12,
    comments: 5,
  },
  {
    id: 2,
    title: "ChatGPT 활용법 공유",
    content: "여러분은 ChatGPT를 어떻게 활용하고 계신가요?",
    likes: 8,
    comments: 3,
  },
  {
    id: 3,
    title: "Next.js 15의 변화점",
    content: "최신 프론트엔드 트렌드와 Next.js 15의 주요 기능을 이야기해요.",
    likes: 5,
    comments: 2,
  },
];

export default function ThreadDetail({ threadId }: { threadId: string }) {
  const thread = dummyThreads.find((t) => t.id.toString() === threadId);
  if (!thread) return <Typography>스레드를 찾을 수 없습니다.</Typography>;
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderLeft: 4,
        borderColor: "primary.main",
        mb: 2,
      }}
    >
      <CardContent>
        <Typography variant="h5" fontWeight={700} color="primary" gutterBottom>
          {thread.title}
        </Typography>
        <Typography variant="body1" color="text.secondary" sx={{ mb: 2 }}>
          {thread.content}
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Chip
            icon={<FavoriteIcon color="error" />}
            label={thread.likes}
            size="small"
          />
          <Chip
            icon={<CommentIcon color="primary" />}
            label={thread.comments}
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

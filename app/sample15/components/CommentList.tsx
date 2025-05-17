import React from "react";
import { Box, Card, CardContent, Typography, Avatar } from "@mui/material";

const dummyComments = [
  {
    id: 1,
    user: "damso_user",
    content: "좋은 의견 감사합니다!",
    image: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    id: 2,
    user: "ai_lover",
    content: "AI 윤리 정말 중요하죠.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
  },
];

export default function CommentList({ threadId }: { threadId: string }) {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {dummyComments.map((c) => (
        <Card key={c.id} sx={{ bgcolor: "background.paper" }}>
          <CardContent sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Avatar src={c.image} alt={c.user} />
            <Box>
              <Typography variant="subtitle2" fontWeight={600}>
                {c.user}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {c.content}
              </Typography>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

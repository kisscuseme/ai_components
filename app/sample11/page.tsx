"use client";

import { Box, Typography, Paper } from "@mui/material";
import CategorySection from "./components/CategorySection";
import AdSection from "./components/AdSection";

// 인기 주제 데이터
const popularTopics = [
  {
    id: 1,
    title: "이슈",
    icon: "✨",
    details: [
      { id: 1, title: "당소개신상" },
      { id: 2, title: "먹방자랑" },
      { id: 3, title: "아재개그" },
    ],
  },
  {
    id: 2,
    title: "생활",
    icon: "🌱",
    details: [
      { id: 1, title: "맛집자랑" },
      { id: 2, title: "여행후기" },
      { id: 3, title: "일상공유" },
    ],
  },
  {
    id: 3,
    title: "유머",
    icon: "😄",
    details: [
      { id: 1, title: "유머글" },
      { id: 2, title: "웃긴사진" },
      { id: 3, title: "짤방모음" },
    ],
  },
];

// 최근 주제 데이터
const recentTopics = [
  {
    id: 1,
    title: "종교",
    icon: "🙏",
    details: [
      { id: 1, title: "천주교" },
      { id: 2, title: "기독교" },
      { id: 3, title: "불교" },
    ],
  },
  {
    id: 2,
    title: "종교",
    icon: "🙏",
    details: [
      { id: 1, title: "천주교" },
      { id: 2, title: "기독교" },
      { id: 3, title: "불교" },
    ],
  },
  {
    id: 3,
    title: "종교",
    icon: "🙏",
    details: [
      { id: 1, title: "천주교" },
      { id: 2, title: "기독교" },
      { id: 3, title: "불교" },
    ],
  },
];

export default function Sample11Page() {
  return (
    <Box sx={{ width: "100%" }}>
      <Paper
        elevation={3}
        sx={{
          p: 3,
          mb: 4,
          background: "linear-gradient(135deg, #1e1e1e 0%, #2d2d2d 100%)",
          border: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography
          variant="h4"
          component="h1"
          gutterBottom
          sx={{ fontWeight: 600, color: "#90caf9" }}
        >
          커뮤니티 카테고리
        </Typography>
        <Typography variant="body1" sx={{ mb: 3, color: "#aaa" }}>
          다양한 주제별 커뮤니티에 참여하고 의견을 나눠보세요.
        </Typography>

        {/* 인기 주제 섹션 */}
        <CategorySection title="인기 주제" categories={popularTopics} />

        {/* 광고 섹션 */}
        <AdSection />

        {/* 최근 주제 섹션 */}
        <CategorySection title="최근 주제" categories={recentTopics} />
      </Paper>
    </Box>
  );
}

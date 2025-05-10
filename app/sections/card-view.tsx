"use client";

import { Container, Typography } from "@mui/material";
import GuideGrid from "../components/guide-grid";
import { Guide } from "../components/guide-card";

const guides: Guide[] = [
  {
    id: 1,
    title: "성장기 아이를 위한 튼튼 레시피",
    description: "영양소 쉽게! 제일 중요한 성장기 건강 간편 레시피!",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "영양식",
    count: 7,
  },
  {
    id: 2,
    title: "요리가 서툰 신혼부부를 위한 맞춤 레시피",
    description:
      "둘이 함께 만들어 더 맛있다! 신혼부부를 위한 초간단 요리만 모아봤어요.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "신혼",
    count: 8,
  },
  {
    id: 3,
    title: "양배추, 한 통 다먹기",
    description:
      "칼로리 낮고 포만감 최고, 금손레시피! 양배추 한 통 다 먹을 수 있는 특급 꿀팁!",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "다이어트",
    count: 8,
  },
  // ... 추가 카드 데이터 필요시 여기에 작성
];

export default function CardView() {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      <Typography variant="h4" fontWeight={700} mb={4}>
        요리초보가이드
      </Typography>
      <GuideGrid guides={guides} />
    </Container>
  );
}

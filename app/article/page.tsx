import type { Metadata } from "next";
import { Container, Box, Typography } from "@mui/material";
import Header from "../components/header";
import ArticleCard from "../components/article-card";

export const metadata: Metadata = {
  title: "Slack Design - 비밀이 아닌 다이어리",
  description: "슬랙 디자인 팀의 생각, 메시지 및 기타 콘텐츠",
};

// 샘플 아티클 데이터
const articles = [
  {
    id: 1,
    title: "Mentorship at Slack: Lessons from a Thriving Program",
    description:
      "슬랙에서의 멘토십 프로그램에서 배운 교훈과 성공 사례를 공유합니다.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "멘토십",
  },
  {
    id: 2,
    title: "How to say no to meetings without feeling guilty",
    description:
      "죄책감 없이 회의를 거절하는 방법과 효율적인 시간 관리 전략을 알아봅니다.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "시간 관리",
  },
  {
    id: 3,
    title:
      "Make things that people want (instead of what you want them to want)",
    description:
      "사용자 중심 디자인의 중요성과 실제 사용자 요구를 충족시키는 제품 만들기.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "디자인 철학",
  },
  {
    id: 4,
    title: "디자인 시스템 구축하기",
    description:
      "효율적인 디자인 시스템을 구축하고 유지하는 방법에 대한 인사이트를 공유합니다.",
    image:
      "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "디자인 시스템",
  },
  {
    id: 5,
    title: "원격 협업을 위한 최고의 도구들",
    description:
      "분산된 팀이 효과적으로 협업할 수 있는 도구와 방법론을 소개합니다.",
    image:
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "협업 도구",
  },
  {
    id: 6,
    title: "디자인 피드백 주고받기",
    description: "건설적인 디자인 피드백을 주고받는 방법과 팀 문화 조성하기.",
    image:
      "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8JUVDJTlEJThDJUVDJThCJTlEfGVufDB8fDB8fHww",
    badge: "팀 문화",
  },
];

export default function Home() {
  return (
    <main>
      <Header />

      <Container maxWidth="lg" sx={{ mt: 8, mb: 10 }}>
        <Box sx={{ textAlign: "center", mb: 6 }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 700,
              mb: 2,
              fontSize: { xs: "2.5rem", md: "3.5rem" },
            }}
          >
            Welcome to our
            <br />
            not-so-secret diary
          </Typography>
          <Typography
            variant="h5"
            component="p"
            sx={{
              color: "text.secondary",
              maxWidth: "700px",
              mx: "auto",
              fontSize: { xs: "1.2rem", md: "1.5rem" },
            }}
          >
            Musings, missives and more from Slack Design
          </Typography>
        </Box>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "1fr",
              sm: "repeat(2, 1fr)",
              md: "repeat(3, 1fr)",
            },
            gap: 4,
          }}
        >
          {articles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </Box>
      </Container>
    </main>
  );
}

"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface NewsCardProps {
  title: string;
  date: string;
  summary: string;
  imageUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  date,
  summary,
  imageUrl,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {date}
        </Typography>
        <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {summary}
        </Typography>
        <Button
          endIcon={<ArrowForwardIcon />}
          sx={{ mt: 2, fontWeight: 500, p: 0 }}
        >
          자세히 보기
        </Button>
      </CardContent>
    </Card>
  );
};

const NewsSection = () => {
  const newsItems = [
    {
      title: "MongMing, 2023년 상반기 분양실적 발표",
      date: "2023.06.15",
      summary:
        "MongMing가 2023년 상반기 분양실적을 발표했습니다. 전년 대비 30% 성장한 실적을 기록했습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1725379448168-e33c5e09d47e?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbCUyMGVzdGF0ZSUyMHNhbGVzJTIwYW5ub3VuY2VtZW50fGVufDB8fDB8fHww", // Unsplash 이미지로 교체
    },
    {
      title: "그린 레지던스 분양 성공적 완료",
      date: "2023.05.22",
      summary:
        "인천 송도의 그린 레지던스 분양이 성공적으로 완료되었습니다. 분양률 98%를 달성했습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1652878530627-cc6f063e3947?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8cmVhbCUyMGVzdGF0ZSUyMHNhbGVzJTIwYW5ub3VuY2VtZW50fGVufDB8fDB8fHww", // Unsplash 이미지로 교체
    },
    {
      title: "MongMing, 신규 분양 컨설팅 서비스 출시",
      date: "2023.04.10",
      summary:
        "MongMing가 부동산 개발사를 위한 신규 분양 컨설팅 서비스를 출시했습니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1569184825833-0b1b3ea211db?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cmVhbCUyMGVzdGF0ZSUyMHNhbGVzJTIwYW5ub3VuY2VtZW50fGVufDB8fDB8fHww", // Unsplash 이미지로 교체
    },
  ];

  return (
    <Box
      id="news"
      sx={{
        py: 10,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h6"
            component="p"
            color="primary"
            fontWeight={600}
            sx={{ mb: 2 }}
          >
            뉴스
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            MongMing 소식
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            MongMing의 최신 소식과 분양 시장 트렌드를 확인하세요.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {newsItems.map((item, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <NewsCard
                title={item.title}
                date={item.date}
                summary={item.summary}
                imageUrl={item.imageUrl}
              />
            </Grid>
          ))}
        </Grid>

        <Box sx={{ mt: 6, textAlign: "center" }}>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            endIcon={<ArrowForwardIcon />}
            sx={{ borderRadius: 2, py: 1, px: 3 }}
          >
            모든 소식 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSection;

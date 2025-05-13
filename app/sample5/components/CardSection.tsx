"use client";

import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  tag: string;
}

const ProjectCard = ({ image, title, description, tag }: ProjectCardProps) => {
  return (
    <Card sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
      <CardMedia component="img" height="200" image={image} alt={title} />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="overline" color="primary">
          {tag}
        </Typography>
        <Typography variant="h5" component="h3" gutterBottom>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">자세히 보기</Button>
      </CardActions>
    </Card>
  );
};

const projects = [
  {
    image:
      "https://images.unsplash.com/photo-1740933084056-078fac872bff?fm=jpg&q=60&w=3000",
    title: "기업 웹사이트 리뉴얼",
    description:
      "현대적인 디자인과 반응형 레이아웃으로 기업 이미지를 향상시킨 웹사이트 리뉴얼 프로젝트입니다.",
    tag: "웹 개발",
  },
  {
    image:
      "https://images.unsplash.com/photo-1746021535490-cd4d7fe7ab2a?fm=jpg&q=60&w=3000",
    title: "모바일 앱 개발",
    description:
      "사용자 경험을 최우선으로 고려한 직관적이고 편리한 모바일 애플리케이션을 개발했습니다.",
    tag: "앱 개발",
  },
  {
    image:
      "https://images.unsplash.com/photo-1744230011715-f261a5d42b8a?fm=jpg&q=60&w=3000",
    title: "브랜딩 & 마케팅",
    description:
      "브랜드 아이덴티티를 강화하고 시장 인지도를 높이기 위한 종합 마케팅 전략을 수립했습니다.",
    tag: "마케팅",
  },
];

const CardSection = () => {
  return (
    <Box component="section" id="portfolio" sx={{ py: 6 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        최근 프로젝트
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        다양한 산업 분야에서 성공적으로 완료한 프로젝트들을 소개합니다.
      </Typography>
      <Grid container spacing={4}>
        {projects.map((project, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={index}>
            <ProjectCard
              image={project.image}
              title={project.title}
              description={project.description}
              tag={project.tag}
            />
          </Grid>
        ))}
      </Grid>
      <Box sx={{ textAlign: "center", mt: 4 }}>
        <Button variant="outlined" size="large">
          더 많은 프로젝트 보기
        </Button>
      </Box>
    </Box>
  );
};

export default CardSection;

"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

interface ProjectCardProps {
  title: string;
  location: string;
  category: string;
  imageUrl: string;
  completed: boolean;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  location,
  category,
  imageUrl,
  completed,
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
      <Box sx={{ position: "relative" }}>
        <CardMedia component="img" height="240" image={imageUrl} alt={title} />
        <Chip
          label={completed ? "분양완료" : "분양중"}
          color={completed ? "default" : "primary"}
          sx={{
            position: "absolute",
            top: 16,
            right: 16,
            fontWeight: 600,
          }}
        />
      </Box>
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Typography variant="body2" color="text.secondary" gutterBottom>
          {category} | {location}
        </Typography>
        <Typography variant="h6" component="h3" fontWeight={600} gutterBottom>
          {title}
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

const ProjectsSection = () => {
  const projects = [
    {
      title: "그랜드 센트럴 아파트",
      location: "서울시 강남구",
      category: "아파트",
      imageUrl:
        "https://images.unsplash.com/photo-1678495846941-f4a0276834a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYXBhcnRtZW50JTIwa29yZWF8ZW58MHx8MHx8fDA%3D",
      completed: false,
    },
    {
      title: "리버사이드 테라스",
      location: "경기도 고양시",
      category: "주택",
      imageUrl:
        "https://images.unsplash.com/photo-1583842480471-c2c9b55ccfa3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2UlMjBrb3JlYXxlbnwwfHwwfHx8MA%3D%3D",
      completed: false,
    },
    {
      title: "스카이 비즈니스 센터",
      location: "서울시 영등포구",
      category: "상업시설",
      imageUrl:
        "https://images.unsplash.com/photo-1660602738577-7277a9354341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwa29yZWF8ZW58MHx8MHx8fDA%3D",
      completed: true,
    },
    {
      title: "그린 레지던스",
      location: "인천시 송도구",
      category: "아파트",
      imageUrl:
        "https://images.unsplash.com/photo-1678495846941-f4a0276834a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYXBhcnRtZW50JTIwa29yZWF8ZW58MHx8MHx8fDA%3D",
      completed: true,
    },
  ];

  return (
    <Box
      id="projects"
      sx={{
        py: 10,
        backgroundColor: "#f8f9fa",
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
            프로젝트
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            MongMing의 주요 프로젝트
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
            MongMing가 진행한 다양한 분양 프로젝트를 소개합니다. 각 프로젝트는
            MongMing의 전문성과 체계적인 분양 시스템을 바탕으로 성공적으로
            진행되었습니다.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {projects.map((project, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <ProjectCard
                title={project.title}
                location={project.location}
                category={project.category}
                imageUrl={project.imageUrl}
                completed={project.completed}
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
            모든 프로젝트 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;

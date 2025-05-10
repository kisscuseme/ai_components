import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: '서울 아파트먼트 프로젝트',
      image: 'https://images.unsplash.com/photo-1735320862374-92bd8d5e9181?fm=jpg&q=60&w=3000',
      description: '도심 속 최고급 주거 공간',
    },
    {
      id: 2,
      title: '부산 해안 레지던스',
      image: 'https://images.unsplash.com/photo-1651804279573-d6d6ee4be4a0?fm=jpg&q=60&w=3000',
      description: '바다가 보이는 프리미엄 주거 단지',
    },
    {
      id: 3,
      title: '인천 비즈니스 센터',
      image: 'https://images.unsplash.com/photo-1717326996020-5b3f20951b09?fm=jpg&q=60&w=3000',
      description: '최신 시설을 갖춘 비즈니스 공간',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: '#f5f5f5' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          A PLATFORM FOR SUCCESSFUL PARTNERSHIPS
        </Typography>

        <Grid container spacing={4}>
          {projects.map((project) => (
            <Grid size={{ xs: 12, md: 4 }} key={project.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 3,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-8px)',
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="240"
                  image={project.image}
                  alt={project.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography gutterBottom variant="h5" component="h3" sx={{ fontWeight: 'bold' }}>
                    {project.title}
                  </Typography>
                  <Typography variant="body1" color="text.secondary">
                    {project.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 6 }}>
          <Button
            variant="outlined"
            size="large"
            sx={{
              borderColor: '#000',
              color: '#000',
              px: 4,
              '&:hover': {
                borderColor: '#000',
                bgcolor: 'rgba(0, 0, 0, 0.04)',
              },
            }}
          >
            모든 프로젝트 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default ProjectsSection;
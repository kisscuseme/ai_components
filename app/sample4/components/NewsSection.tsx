import React from 'react';
import { Box, Typography, Container, Grid, Card, CardMedia, CardContent, Button } from '@mui/material';

const NewsSection = () => {
  const newsItems = [
    {
      id: 1,
      title: '키스큐즈미, 2024년 상반기 분양 실적 발표',
      date: '2024.06.15',
      image: 'https://images.unsplash.com/photo-1652105624260-eaf99135509b?fm=jpg&q=60&w=3000',
    },
    {
      id: 2,
      title: '서울 강남 프리미엄 주거단지 분양 성공',
      date: '2024.05.22',
      image: 'https://images.unsplash.com/photo-1735320861305-4cfa4876caff?fm=jpg&q=60&w=3000',
    },
    {
      id: 3,
      title: '키스큐즈미, 부동산 마케팅 혁신 포럼 개최',
      date: '2024.04.10',
      image: 'https://images.unsplash.com/photo-1734456061630-87babdefd904?fm=jpg&q=60&w=3000',
    },
  ];

  return (
    <Box sx={{ py: 8, bgcolor: 'white' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          sx={{ fontWeight: 'bold', mb: 6 }}
        >
          NEWS
        </Typography>

        <Grid container spacing={4}>
          {newsItems.map((news) => (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={news.id}>
              <Card
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: 1,
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'translateY(-5px)',
                    boxShadow: 3,
                  },
                }}
              >
                <CardMedia
                  component="img"
                  height="200"
                  image={news.image}
                  alt={news.title}
                />
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                    {news.date}
                  </Typography>
                  <Typography gutterBottom variant="h6" component="h3" sx={{ fontWeight: 'bold' }}>
                    {news.title}
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
            뉴스 더보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default NewsSection;
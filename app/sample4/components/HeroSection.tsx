import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';

const HeroSection = () => {
  return (
    <Box
      sx={{
        position: 'relative',
        height: { xs: '60vh', md: '80vh' },
        display: 'flex',
        alignItems: 'center',
        backgroundImage: 'url(https://images.unsplash.com/photo-1726003354173-a1152883ca69?fm=jpg&q=60&w=3000)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
          zIndex: 1,
        },
      }}
    >
      <Container maxWidth="xl" sx={{ position: 'relative', zIndex: 2 }}>
        <Box sx={{ maxWidth: { xs: '100%', md: '60%' } }}>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: 'white',
              mb: 2,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
          >
            WE CREATE THE PERFECT
          </Typography>
          <Typography
            variant="h2"
            component="h1"
            sx={{
              fontWeight: 'bold',
              color: '#f5a623',
              mb: 4,
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
            }}
          >
            REAL ESTATE MARKET
          </Typography>
          <Typography
            variant="h6"
            sx={{
              color: 'white',
              mb: 4,
              maxWidth: '600px',
              fontSize: { xs: '1rem', md: '1.2rem' },
            }}
          >
            A PLATFORM FOR SUCCESSFUL PARTNERSHIPS
          </Typography>
          <Button
            variant="contained"
            size="large"
            sx={{
              bgcolor: '#f5a623',
              color: 'white',
              px: 4,
              py: 1.5,
              '&:hover': {
                bgcolor: '#d48c1f',
              },
            }}
          >
            자세히 보기
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default HeroSection;
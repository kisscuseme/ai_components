import React from 'react';
import { Box, Typography, Container, Grid, Paper } from '@mui/material';

const StatsSection = () => {
  const stats = [
    { id: 1, value: '25년', label: '업계 경력' },
    { id: 2, value: '1970+', label: '완료된 프로젝트' },
    { id: 3, value: '5500억+', label: '누적 분양액' },
    { id: 4, value: '2000+', label: '파트너십' },
  ];

  return (
    <Box sx={{ py: 10, bgcolor: '#000', color: 'white' }}>
      <Container maxWidth="xl">
        <Typography
          variant="h4"
          component="h2"
          align="center"
          sx={{ fontWeight: 'bold', mb: 8, color: 'white' }}
        >
          키스큐즈미는 최고의 부동산 마케팅 전문가입니다
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {stats.map((stat) => (
            <Grid size={{ xs: 6, sm: 3 }} key={stat.id}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  bgcolor: 'transparent',
                  border: 'none',
                }}
              >
                <Typography
                  variant="h3"
                  component="p"
                  sx={{ fontWeight: 'bold', mb: 1, color: '#f5a623' }}
                >
                  {stat.value}
                </Typography>
                <Typography variant="h6" component="p" align="center" sx={{ color: 'white' }}>
                  {stat.label}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default StatsSection;
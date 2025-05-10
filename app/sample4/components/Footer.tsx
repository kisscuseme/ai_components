import React from 'react';
import { Box, Typography, Container, Grid, Link, Divider } from '@mui/material';

const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#111', color: 'white', pt: 6, pb: 4 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 2 }}>
              KISSCUSEME
            </Typography>
            <Typography variant="body2" sx={{ mb: 2, color: '#aaa' }}>
              목표는 완벽한 분양 시장을 만드는 것입니다
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              서울특별시 마포구 마포대로 123 키스큐즈미빌딩 37층
            </Typography>
            <Typography variant="body2" sx={{ color: '#aaa' }}>
              TEL: 02-1234-5678 | FAX: 02-1234-5679
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              회사소개
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              회사개요
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              연혁
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              조직도
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              프로젝트
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              주거시설
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              상업시설
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              업무시설
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              고객센터
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              문의하기
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              채용정보
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              오시는 길
            </Link>
          </Grid>

          <Grid size={{ xs: 12, md: 2 }}>
            <Typography variant="subtitle1" sx={{ fontWeight: 'bold', mb: 2 }}>
              법적 고지
            </Typography>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              개인정보처리방침
            </Link>
            <Link href="#" underline="hover" color="inherit" sx={{ display: 'block', mb: 1, color: '#aaa' }}>
              이용약관
            </Link>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: 'rgba(255,255,255,0.1)' }} />

        <Typography variant="body2" align="center" sx={{ color: '#aaa' }}>
          © {new Date().getFullYear()} KISSCUSEME. All Rights Reserved.
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
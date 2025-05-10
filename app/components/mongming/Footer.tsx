"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Link from "@mui/material/Link";
import Divider from "@mui/material/Divider";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        py: 6,
        px: 2,
        mt: "auto",
        backgroundColor: "#f5f5f5",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={3}>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              주식회사 MongMing
            </Typography>
            <Typography variant="body2" color="text.secondary">
              목표는 완벽한 분양 시장을 만드는 것입니다
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              연락처
            </Typography>
            <Typography variant="body2" color="text.secondary">
              이메일: admin@mongming.co.kr
            </Typography>
            <Typography variant="body2" color="text.secondary">
              전화: 02-1234-5678
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              바로가기
            </Typography>
            <Link
              href="/intro#about"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              회사소개
            </Link>
            <Link
              href="/intro#services"
              color="inherit"
              sx={{ display: "block", mb: 1 }}
            >
              사업분야
            </Link>
            <Link
              href="/intro#contact"
              color="inherit"
              sx={{ display: "block" }}
            >
              문의하기
            </Link>
          </Grid>
        </Grid>
        <Divider sx={{ my: 3 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} 주식회사 MongMing. All rights reserved.
          </Typography>
          <Box>
            <Link href="/privacy" color="inherit" sx={{ mr: 2 }}>
              개인정보처리방침
            </Link>
            <Link href="/terms" color="inherit">
              이용약관
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

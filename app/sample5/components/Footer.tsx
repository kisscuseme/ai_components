"use client";

import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Link,
  Typography,
} from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "background.paper",
        py: 6,
        borderTop: "1px solid",
        borderColor: "divider",
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              COMPANY
            </Typography>
            <Typography variant="body2" color="text.secondary">
              혁신적인 기술과 창의적인 아이디어로 비즈니스의 성장을 돕는
              기업입니다.
            </Typography>
            <Box sx={{ mt: 2, display: "flex", gap: 1 }}>
              <IconButton
                aria-label="facebook"
                size="small"
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#1877F2",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <FacebookIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="twitter"
                size="small"
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#1DA1F2",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <TwitterIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="instagram"
                size="small"
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#E4405F",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <InstagramIcon fontSize="small" />
              </IconButton>
              <IconButton
                aria-label="linkedin"
                size="small"
                sx={{
                  transition: "all 0.3s",
                  "&:hover": {
                    color: "#0A66C2",
                    transform: "translateY(-3px)",
                  },
                }}
              >
                <LinkedInIcon fontSize="small" />
              </IconButton>
            </Box>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              서비스
            </Typography>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              웹 개발
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              모바일 앱 개발
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              UI/UX 디자인
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              브랜딩 & 마케팅
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              회사 정보
            </Typography>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              회사 소개
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              팀 소개
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              채용 정보
            </Link>
            <Link
              href="#"
              color="text.secondary"
              display="block"
              sx={{
                mb: 1,
                transition: "color 0.3s",
                "&:hover": { color: "primary.main" },
              }}
            >
              블로그
            </Link>
          </Grid>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" color="text.primary" gutterBottom>
              연락처
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              서울특별시 강남구 테헤란로 123
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              Email: info@company.com
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
              전화: 02-123-4567
            </Typography>
          </Grid>
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            © {new Date().getFullYear()} COMPANY. All rights reserved.
          </Typography>
          <Box>
            <Link
              href="#"
              color="text.secondary"
              sx={{ mr: 2, "&:hover": { color: "primary.main" } }}
            >
              개인정보처리방침
            </Link>
            <Link
              href="#"
              color="text.secondary"
              sx={{ "&:hover": { color: "primary.main" } }}
            >
              이용약관
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

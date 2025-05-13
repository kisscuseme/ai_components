"use client";

import { Box, Container, Divider, Grid, IconButton, Link, Typography } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: "#2d3748",
        color: "white",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              KISSCUSEME
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)" }}>
              최고의 컴퓨터 부품을 가장 합리적인 가격으로 만나보세요.
              20년 이상의 노하우로 고객님께 최상의 서비스를 제공합니다.
            </Typography>
            <Box sx={{ mt: 2 }}>
              <IconButton color="inherit" aria-label="페이스북">
                <FacebookIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="인스타그램">
                <InstagramIcon />
              </IconButton>
              <IconButton color="inherit" aria-label="트위터">
                <TwitterIcon />
              </IconButton>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              쇼핑 카테고리
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {["CPU/프로세서", "메인보드", "그래픽카드", "메모리", "SSD/HDD", "케이스", "파워서플라이", "쿨러/튜닝"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ py: 0.5 }}>
                    <Link href="#" color="inherit" underline="hover" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              고객 지원
            </Typography>
            <Box component="ul" sx={{ p: 0, m: 0, listStyle: "none" }}>
              {["주문 조회", "배송 정보", "반품 및 교환", "FAQ", "1:1 문의", "이용약관", "개인정보처리방침"].map(
                (item) => (
                  <Box component="li" key={item} sx={{ py: 0.5 }}>
                    <Link href="#" color="inherit" underline="hover" sx={{ color: "rgba(255,255,255,0.7)" }}>
                      {item}
                    </Link>
                  </Box>
                )
              )}
            </Box>
          </Grid>

          <Grid size={{ xs: 12, sm: 6, md: 3 }}>
            <Typography variant="h6" gutterBottom>
              고객센터
            </Typography>
            <Typography variant="h5" gutterBottom sx={{ color: "#ff6600" }}>
              1588-1234
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)" }}>
              평일 09:00 - 18:00
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)" }}>
              점심시간 12:00 - 13:00
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)" }}>
              토/일/공휴일 휴무
            </Typography>
          </Grid>
        </Grid>

        <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

        <Box sx={{ display: "flex", justifyContent: "space-between", flexDirection: { xs: "column", sm: "row" } }}>
          <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)" }}>
            © {new Date().getFullYear()} KISSCUSEME. All rights reserved.
          </Typography>
          <Typography variant="body2" color="text.secondary" sx={{ color: "rgba(255,255,255,0.7)", mt: { xs: 1, sm: 0 } }}>
            사업자등록번호: 123-45-67890 | 통신판매업신고: 제2023-서울강남-12345호
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
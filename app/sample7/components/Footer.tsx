"use client";

import React from "react";
import {
  Box,
  Container,
  Divider,
  Grid,
  Link,
  Typography,
  useTheme,
} from "@mui/material";

// 소셜 미디어 아이콘 컴포넌트
const SocialIcon = ({ children }: { children: React.ReactNode }) => {
  return (
    <Box
      sx={{
        width: 36,
        height: 36,
        borderRadius: "50%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "rgba(0, 0, 0, 0.1)",
        color: "text.secondary",
        mr: 1,
        "&:hover": {
          bgcolor: "primary.main",
          color: "secondary.main",
        },
      }}
    >
      {children}
    </Box>
  );
};

const Footer = () => {
  const theme = useTheme();

  // 푸터 링크 섹션 정의
  const footerSections = [
    {
      title: "서비스",
      links: [
        { name: "카카오", href: "#" },
        { name: "카카오톡", href: "#" },
        { name: "카카오페이", href: "#" },
        { name: "카카오뱅크", href: "#" },
        { name: "카카오맵", href: "#" },
      ],
    },
    {
      title: "개발자",
      links: [
        { name: "API 문서", href: "#" },
        { name: "개발자 포털", href: "#" },
        { name: "개발자 블로그", href: "#" },
        { name: "오픈소스", href: "#" },
      ],
    },
    {
      title: "회사",
      links: [
        { name: "회사소개", href: "#" },
        { name: "채용", href: "#" },
        { name: "뉴스룸", href: "#" },
        { name: "윤리경영", href: "#" },
        { name: "투자정보", href: "#" },
      ],
    },
    {
      title: "고객지원",
      links: [
        { name: "고객센터", href: "#" },
        { name: "문의하기", href: "#" },
        { name: "자주 묻는 질문", href: "#" },
        { name: "공지사항", href: "#" },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        bgcolor: "#F6F6F6",
        py: 6,
        mt: 8,
      }}
    >
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={section.title}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              <Box>
                {section.links.map((link) => (
                  <Link
                    href={link.href}
                    key={link.name}
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      display: "block",
                      mb: 1,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.name}
                  </Link>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4 }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: { xs: "flex-start", md: "center" },
          }}
        >
          <Box>
            <Typography variant="body2" color="text.secondary">
              © {new Date().getFullYear()} Kakao Corp. 모든 권리 보유.
            </Typography>
            <Box sx={{ mt: 1, display: "flex", gap: 2 }}>
              <Link href="#" color="text.secondary" underline="hover">
                <Typography variant="body2">개인정보처리방침</Typography>
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                <Typography variant="body2">이용약관</Typography>
              </Link>
              <Link href="#" color="text.secondary" underline="hover">
                <Typography variant="body2">법적고지</Typography>
              </Link>
            </Box>
          </Box>

          <Box sx={{ display: "flex", mt: { xs: 3, md: 0 } }}>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M18 2H15C13.6739 2 12.4021 2.52678 11.4645 3.46447C10.5268 4.40215 10 5.67392 10 7V10H7V14H10V22H14V14H17L18 10H14V7C14 6.73478 14.1054 6.48043 14.2929 6.29289C14.4804 6.10536 14.7348 6 15 6H18V2Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M23 3.00005C22.0424 3.67552 20.9821 4.19216 19.86 4.53005C19.2577 3.83756 18.4573 3.34674 17.567 3.12397C16.6767 2.90121 15.7395 2.95724 14.8821 3.2845C14.0247 3.61176 13.2884 4.19445 12.773 4.95376C12.2575 5.71308 11.9877 6.61238 12 7.53005V8.53005C10.2426 8.57561 8.50127 8.18586 6.93101 7.39549C5.36074 6.60513 4.01032 5.43868 3 4.00005C3 4.00005 -1 13 8 17C5.94053 18.398 3.48716 19.099 1 19C10 24 21 19 21 7.50005C20.9991 7.2215 20.9723 6.94364 20.92 6.67005C21.9406 5.66354 22.6608 4.39276 23 3.00005Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path
                  d="M16 8C17.5913 8 19.1174 8.63214 20.2426 9.75736C21.3679 10.8826 22 12.4087 22 14V21H18V14C18 13.4696 17.7893 12.9609 17.4142 12.5858C17.0391 12.2107 16.5304 12 16 12C15.4696 12 14.9609 12.2107 14.5858 12.5858C14.2107 12.9609 14 13.4696 14 14V21H10V14C10 12.4087 10.6321 10.8826 11.7574 9.75736C12.8826 8.63214 14.4087 8 16 8Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M6 9H2V21H6V9Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M4 6C5.10457 6 6 5.10457 6 4C6 2.89543 5.10457 2 4 2C2.89543 2 2 2.89543 2 4C2 5.10457 2.89543 6 4 6Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </SocialIcon>
            <SocialIcon>
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <rect
                  x="2"
                  y="2"
                  width="20"
                  height="20"
                  rx="5"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M16 11.37C16.1234 12.2022 15.9813 13.0522 15.5938 13.799C15.2063 14.5458 14.5931 15.1514 13.8416 15.5297C13.0901 15.9079 12.2384 16.0396 11.4078 15.9059C10.5771 15.7723 9.80976 15.3801 9.21484 14.7852C8.61992 14.1902 8.22773 13.4229 8.09407 12.5922C7.9604 11.7615 8.09207 10.9099 8.47033 10.1584C8.84859 9.40685 9.45419 8.79374 10.201 8.40624C10.9478 8.01874 11.7978 7.87659 12.63 8C13.4789 8.12588 14.2649 8.52146 14.8717 9.12831C15.4785 9.73515 15.8741 10.5211 16 11.37Z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="16.5" cy="7.5" r="1.5" fill="currentColor" />
              </svg>
            </SocialIcon>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;

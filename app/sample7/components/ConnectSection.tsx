"use client";

import React from "react";
import { Box, Typography, Grid, Paper, Button, useTheme } from "@mui/material";

// 원형 아이콘 컴포넌트
const CircleIcon = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 1,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          width: 60,
          height: 60,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          bgcolor: "primary.main",
          color: "secondary.main",
        }}
      >
        {icon}
      </Paper>
      <Typography variant="body2" fontWeight="medium">
        {label}
      </Typography>
    </Box>
  );
};

const ConnectSection = () => {
  const theme = useTheme();

  // 서비스 아이콘 정의
  const services = [
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M20 4H4C2.9 4 2 4.9 2 6V18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M2 8H22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오페이",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M12 6V12L16 14"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오뱅크",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M17 8L12 3L7 8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 3V15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M3 15H21V21H3V15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오톡",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 12C14.2091 12 16 10.2091 16 8C16 5.79086 14.2091 4 12 4C9.79086 4 8 5.79086 8 8C8 10.2091 9.79086 12 12 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M20 21C20 16.5817 16.4183 13 12 13C7.58172 13 4 16.5817 4 21"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오계정",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M9 22V12H15V22"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오홈",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M2 12H22" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 2C14.5013 4.73835 15.9228 8.29203 16 12C15.9228 15.708 14.5013 19.2616 12 22C9.49872 19.2616 8.07725 15.708 8 12C8.07725 8.29203 9.49872 4.73835 12 2Z"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
      ),
      label: "카카오맵",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M4 19.5C4 18.837 4.26339 18.2011 4.73223 17.7322C5.20107 17.2634 5.83696 17 6.5 17H20"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M6.5 2H20V22H6.5C5.83696 22 5.20107 21.7366 4.73223 21.2678C4.26339 20.7989 4 20.163 4 19.5V4.5C4 3.83696 4.26339 3.20107 4.73223 2.73223C5.20107 2.26339 5.83696 2 6.5 2Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오스토리",
    },
    {
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path
            d="M16 4H8C5.79086 4 4 5.79086 4 8V16C4 18.2091 5.79086 20 8 20H16C18.2091 20 20 18.2091 20 16V8C20 5.79086 18.2091 4 16 4Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 8V16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M8 12H16"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      label: "카카오소셜",
    },
  ];

  return (
    <Box sx={{ py: 8 }}>
      <Box sx={{ mb: 6, textAlign: "center" }}>
        <Typography variant="h2" fontWeight="bold" gutterBottom>
          Connect Everything
        </Typography>
        <Typography variant="h5" color="text.secondary" sx={{ mb: 4 }}>
          지금 카카오로 연결되고 있습니다
        </Typography>
      </Box>

      {/* 원형 아이콘 그리드 */}
      <Box sx={{ mb: 6 }}>
        <Grid container spacing={3} justifyContent="center">
          {services.map((service, index) => (
            <Grid key={index}>
              <CircleIcon icon={service.icon} label={service.label} />
            </Grid>
          ))}
        </Grid>
      </Box>

      {/* 파트너 정보 */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 4,
        }}
      >
        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            파트너와 함께 성장하세요
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            카카오의 다양한 서비스와 연결하여 비즈니스를 성장시키세요. API와
            개발 도구를 활용하여 혁신적인 서비스를 만들 수 있습니다.
          </Typography>
          <Button variant="contained" color="primary" sx={{ mt: 2 }}>
            파트너 신청하기
          </Button>
        </Box>

        <Box sx={{ maxWidth: 500 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            카카오클라우드로 확장하세요
          </Typography>
          <Typography variant="body1" color="text.secondary" paragraph>
            안정적이고 확장 가능한 인프라로 서비스를 운영하세요. 카카오의
            기술력으로 더 빠르고 안전한 서비스를 제공할 수 있습니다.
          </Typography>
          <Button variant="outlined" color="secondary" sx={{ mt: 2 }}>
            자세히 알아보기
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default ConnectSection;

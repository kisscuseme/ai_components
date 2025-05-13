"use client";

import React from "react";
import {
  Box,
  Card,
  CardContent,
  Grid,
  Typography,
  useTheme,
} from "@mui/material";
import Image from "next/image";

// 카카오 캐릭터 컴포넌트
const KakaoCharacter = () => (
  <Box
    sx={{
      width: "100%",
      height: "100%",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    }}
  >
    <Image
      src="https://images.unsplash.com/photo-1641306456194-9bd2580bb855?fm=jpg&q=60&w=3000"
      alt="카카오 캐릭터"
      width={150}
      height={150}
      style={{ objectFit: "contain" }}
    />
  </Box>
);

// 메시지 아이콘 컴포넌트
const MessageIcon = () => (
  <svg
    width="60"
    height="60"
    viewBox="0 0 60 60"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="30" cy="30" r="30" fill="#000000" />
    <path
      d="M30 15C21 15 14 21 14 28C14 33 17 37 22 39L20 45C20 45.5 20.5 46 21 45.5L29 41C29.5 41 30 41 30 41C39 41 46 35 46 28C46 21 39 15 30 15Z"
      fill="#FEE500"
    />
  </svg>
);

// DX 로고 컴포넌트
const DXLogo = () => (
  <Typography
    variant="h2"
    sx={{
      fontWeight: 800,
      fontSize: "4rem",
      color: "#3C64FF",
      textShadow: "2px 2px 0 #000",
    }}
  >
    DX
  </Typography>
);

const ServiceGrid = () => {
  const theme = useTheme();

  // 그리드 아이템 정의
  const gridItems = [
    {
      id: 1,
      title: "kakao i",
      bgColor: theme.palette.primary.main,
      textColor: theme.palette.secondary.main,
      height: 200,
      width: 12,
      content: (
        <Typography variant="h3" fontWeight="bold">
          kakao i
        </Typography>
      ),
    },
    {
      id: 2,
      title: "메시지",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      height: 200,
      width: 6,
      content: <MessageIcon />,
    },
    {
      id: 3,
      title: "캐릭터",
      bgColor: "#FEE500",
      textColor: "#000000",
      height: 200,
      width: 6,
      content: <KakaoCharacter />,
    },
    {
      id: 4,
      title: "채팅",
      bgColor: "#FFFFFF",
      textColor: "#000000",
      height: 200,
      width: 6,
      content: (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            채팅
          </Typography>
          <Typography variant="body2">
            카카오톡으로 쉽고 빠르게 커뮤니케이션하세요
          </Typography>
        </Box>
      ),
    },
    {
      id: 5,
      title: "한국어 지원",
      bgColor: "#3C3C3C",
      textColor: "#FFFFFF",
      height: 200,
      width: 6,
      content: (
        <Box sx={{ p: 2 }}>
          <Typography
            variant="h6"
            fontWeight="bold"
            gutterBottom
            color="#FEE500"
          >
            한국어 지원
          </Typography>
          <Typography variant="body2" color="#FFFFFF">
            자연스러운 한국어 처리 기술
          </Typography>
        </Box>
      ),
    },
    {
      id: 6,
      title: "DX",
      bgColor: "#000000",
      textColor: "#FFFFFF",
      height: 200,
      width: 4,
      content: <DXLogo />,
    },
    {
      id: 7,
      title: "개발자",
      bgColor: "#FFFFFF",
      textColor: "#000000",
      height: 200,
      width: 4,
      content: (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            개발자
          </Typography>
          <Typography variant="body2">다양한 API와 개발 도구 제공</Typography>
        </Box>
      ),
    },
    {
      id: 8,
      title: "클라우드",
      bgColor: "#4FC3F7",
      textColor: "#FFFFFF",
      height: 200,
      width: 4,
      content: (
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" fontWeight="bold" gutterBottom>
            클라우드
          </Typography>
          <Typography variant="body2">안정적이고 확장 가능한 인프라</Typography>
        </Box>
      ),
    },
  ];

  return (
    <Box sx={{ flexGrow: 1, py: 4 }}>
      <Grid container spacing={2}>
        {gridItems.map((item) => (
          <Grid
            size={{
              xs: 12,
              sm: item.width >= 8 ? 12 : 6,
              md: item.width,
            }}
            key={item.id}
          >
            <Card
              sx={{
                height: item.height,
                bgcolor: item.bgColor,
                color: item.textColor,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 2,
                overflow: "hidden",
                boxShadow: "none",
              }}
            >
              <CardContent sx={{ height: "100%", width: "100%", p: 2 }}>
                {item.content}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default ServiceGrid;

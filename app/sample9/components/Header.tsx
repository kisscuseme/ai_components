"use client";

// 상단 메뉴(자유 게시판, 유머, 정보) 및 로고를 포함한 Header 컴포넌트
// 각 메뉴 클릭 시 해당 게시판 리스트 페이지로 이동
import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";

const menuItems = [
  { label: "자유 게시판", path: "/sample9/board/free" },
  { label: "유머", path: "/sample9/board/humor" },
  { label: "정보", path: "/sample9/board/info" },
];

export default function Header() {
  const router = useRouter();
  return (
    <AppBar position="static" color="default" elevation={1}>
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* 로고/사이트명 */}
          <Typography
            variant="h6"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
          >
            <Link
              href="/sample9"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              게시판 샘플9
            </Link>
          </Typography>
          {/* 메뉴 */}
          <Box>
            {menuItems.map((item) => (
              <Button
                key={item.path}
                color="inherit"
                sx={{ mx: 1, fontWeight: "bold" }}
                component={Link}
                href={item.path}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}

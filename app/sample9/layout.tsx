// 게시판 사이트 전체 레이아웃 컴포넌트
// 상단 Header, children 영역, MUI Container, 글로벌 스타일 등 적용
import React from "react";
import Header from "./components/Header";
import { Container, Box, Grid } from "@mui/material";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  );
}

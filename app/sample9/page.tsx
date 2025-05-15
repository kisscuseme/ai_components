"use client";

// sample10 게시판 메인 페이지
// 최신글, 인기글, 사용자 리스트를 표시하며, 각 게시판 메뉴로 이동 가능
import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import UserList from "./components/UserList";
import PostCard from "./components/PostCard";

export default function MainPage() {
  return (
    <Grid container spacing={3}>
      {/* 좌측 사용자 리스트 */}
      <Grid size={{ xs: 12, md: 3 }}>
        <Typography variant="h6" sx={{ mb: 2, fontWeight: "bold" }}>
          사용자 리스트
        </Typography>
        <UserList />
      </Grid>

      {/* 우측 게시글 섹션 */}
      <Grid size={{ xs: 12, md: 9 }}>
        {/* 최신글 섹션 */}
        <Typography variant="h5" sx={{ mb: 2, fontWeight: "bold" }}>
          최신글
        </Typography>
        <Grid container spacing={2}>
          {/* 최신글 목록 */}
          <PostCard type="latest" />
        </Grid>

        {/* 인기글 섹션 */}
        <Typography variant="h5" sx={{ mt: 4, mb: 2, fontWeight: "bold" }}>
          인기글
        </Typography>
        <Grid container spacing={2}>
          {/* 인기글 목록 */}
          <PostCard type="popular" />
        </Grid>
      </Grid>
    </Grid>
  );
}

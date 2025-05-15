"use client";

// 동적 라우트: /sample10/board/[category]
// 각 게시판 카테고리별 리스트 페이지
import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Paper, Divider, Button } from "@mui/material";
import PostList from "../../components/PostList";

export default function BoardCategoryPage() {
  const params = useParams();
  const category = params?.category as string;

  // 카테고리별 제목 설정
  const getCategoryTitle = () => {
    switch (category) {
      case "free":
        return "자유 게시판";
      case "humor":
        return "유머 게시판";
      case "info":
        return "정보 게시판";
      default:
        return `${category} 게시판`;
    }
  };

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography variant="h4" fontWeight="bold">
            {getCategoryTitle()}
          </Typography>
          <Button variant="contained" color="primary" href="/sample9/write">
            글쓰기
          </Button>
        </Box>
        <Divider sx={{ mb: 3 }} />
        <PostList category={category} />
      </Paper>
    </Box>
  );
}

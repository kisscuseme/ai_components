"use client";

import React from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { getPostsByCategory } from "../../data";
import { useRouter } from "next/navigation";
import AddIcon from "@mui/icons-material/Add";

// 카테고리 이름 변환 함수
const getCategoryName = (category: string): string => {
  switch (category) {
    case "free":
      return "자유 게시판";
    case "humor":
      return "유머";
    case "info":
      return "정보";
    default:
      return "게시판";
  }
};

// 게시판 리스트 페이지
export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const router = useRouter();
  const { category } = await params;
  const posts = getPostsByCategory(category);

  const handleWriteClick = () => {
    router.push(`/sample10/write?category=${category}`);
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
          {getCategoryName(category)}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          startIcon={<AddIcon />}
          onClick={handleWriteClick}
        >
          글 작성
        </Button>
      </Box>

      <Divider sx={{ mb: 3 }} />

      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell width="5%">번호</TableCell>
              <TableCell width="55%">제목</TableCell>
              <TableCell width="15%">작성자</TableCell>
              <TableCell width="15%">작성일</TableCell>
              <TableCell width="5%" align="right">
                조회
              </TableCell>
              <TableCell width="5%" align="right">
                좋아요
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {posts.length > 0 ? (
              posts.map((post) => (
                <TableRow
                  key={post.id}
                  hover
                  sx={{
                    "&:hover": { cursor: "pointer" },
                  }}
                  onClick={() =>
                    router.push(`/sample10/board/${category}/${post.id}`)
                  }
                >
                  <TableCell>{post.id}</TableCell>
                  <TableCell>{post.title}</TableCell>
                  <TableCell>{post.author}</TableCell>
                  <TableCell>{post.createdAt}</TableCell>
                  <TableCell align="right">{post.views}</TableCell>
                  <TableCell align="right">{post.likes}</TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6} align="center">
                  게시글이 없습니다.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

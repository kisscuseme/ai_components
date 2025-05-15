"use client";

// 동적 라우트: /sample10/board/[category]/[id]
// 게시글 상세 페이지 - 게시글 내용과 댓글 표시
import React from "react";
import { useParams } from "next/navigation";
import { Box, Typography, Paper, Divider, Avatar, Chip } from "@mui/material";
import CommentSection from "../../../components/CommentSection";

interface Post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  likes: number;
  category: string;
  content: string;
  image?: string;
}

export default function PostDetailPage() {
  const params = useParams();
  const category = params?.category as string;
  const id = params?.id as string;

  // 실제 데이터 fetch/SSR/ISR 적용 위치(임시 데이터)
  const post: Post = {
    id: parseInt(id),
    title: `${category} 게시판의 ${id}번 게시글`,
    author: "user1",
    createdAt: "2024-06-01 14:30",
    views: 123,
    likes: 15,
    category: category,
    content: `이 게시글은 ${category} 게시판의 ${id}번 게시글입니다. 상세 내용이 여기에 표시됩니다.\n\n게시글의 내용은 여러 줄로 구성될 수 있으며, 다양한 정보를 포함할 수 있습니다.\n\n이 예시 게시글은 단순히 레이아웃을 보여주기 위한 것입니다.`,
    image:
      id === "1"
        ? "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80"
        : undefined,
  };

  // 카테고리별 색상 설정
  const getCategoryColor = () => {
    switch (category) {
      case "free":
        return "primary";
      case "humor":
        return "secondary";
      case "info":
        return "info";
      default:
        return "default";
    }
  };

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 3, mb: 3, borderRadius: 2 }}>
        {/* 게시글 헤더 */}
        <Box sx={{ mb: 3 }}>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <Chip
              label={
                category === "free"
                  ? "자유"
                  : category === "humor"
                  ? "유머"
                  : "정보"
              }
              size="small"
              color={getCategoryColor() as any}
              sx={{ mr: 2 }}
            />
            <Typography variant="h4" fontWeight="bold">
              {post.title}
            </Typography>
          </Box>

          <Box sx={{ display: "flex", alignItems: "center", mt: 2 }}>
            <Avatar
              src={`https://randomuser.me/api/portraits/men/1.jpg`}
              sx={{ width: 36, height: 36, mr: 1.5 }}
            />
            <Box>
              <Typography variant="subtitle1">{post.author}</Typography>
              <Typography variant="caption" color="text.secondary">
                {post.createdAt} · 조회 {post.views} · 좋아요 {post.likes}
              </Typography>
            </Box>
          </Box>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* 게시글 내용 */}
        <Box sx={{ mb: 4 }}>
          {post.image && (
            <Box sx={{ mb: 3, textAlign: "center" }}>
              <img
                src={post.image}
                alt={post.title}
                style={{
                  maxWidth: "100%",
                  maxHeight: "500px",
                  borderRadius: "8px",
                  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                }}
              />
            </Box>
          )}

          <Typography variant="body1" sx={{ whiteSpace: "pre-line" }}>
            {post.content}
          </Typography>
        </Box>

        <Divider sx={{ mb: 3 }} />

        {/* 댓글 섹션 */}
        <Box>
          <Typography variant="h6" fontWeight="bold" sx={{ mb: 2 }}>
            댓글
          </Typography>
          <CommentSection postId={parseInt(id)} />
        </Box>
      </Paper>
    </Box>
  );
}

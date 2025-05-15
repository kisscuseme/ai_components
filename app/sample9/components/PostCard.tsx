"use client";

// 게시글 카드(PostCard) 컴포넌트
// type에 따라 최신글/인기글을 구분하여 posts 배열을 받아 카드 형태로 렌더링
// 각 게시글 클릭 시 상세 페이지로 이동
import React from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  CardActionArea,
  Box,
  Grid,
  Chip,
  Avatar,
} from "@mui/material";
import { useRouter } from "next/navigation";

interface Post {
  id: number;
  title: string;
  author: string;
  createdAt: string;
  views: number;
  comments: number;
  category: string;
  image?: string;
  excerpt?: string;
}

export default function PostCard({ type }: { type: "latest" | "popular" }) {
  const router = useRouter();

  // 실제 데이터 fetch/SSR/ISR 적용 위치(임시 데이터)
  const posts: Post[] = [
    {
      id: 1,
      title: type === "latest" ? "최신글 예시1" : "인기글 예시1",
      author: "user1",
      createdAt: "2024-06-01",
      views: 123,
      comments: 4,
      category: "free",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 2,
      title: type === "latest" ? "최신글 예시2" : "인기글 예시2",
      author: "user2",
      createdAt: "2024-06-02",
      views: 99,
      comments: 2,
      category: "humor",
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 3,
      title: type === "latest" ? "최신글 예시3" : "인기글 예시3",
      author: "user3",
      createdAt: "2024-06-03",
      views: 78,
      comments: 1,
      category: "info",
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
  ];

  return (
    <>
      {posts.map((post) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={post.id}>
          <Card
            elevation={2}
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "translateY(-4px)",
              },
            }}
          >
            <CardActionArea
              onClick={() =>
                router.push(
                  `/sample9/board/${post.category.toLowerCase()}/${post.id}`
                )
              }
              sx={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                alignItems: "stretch",
              }}
            >
              {post.image && (
                <CardMedia
                  component="img"
                  height="140"
                  image={post.image}
                  alt={post.title}
                />
              )}
              <CardContent sx={{ flexGrow: 1 }}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    mb: 1,
                  }}
                >
                  <Chip
                    label={post.category}
                    size="small"
                    color={
                      post.category === "free"
                        ? "primary"
                        : post.category === "humor"
                        ? "secondary"
                        : "info"
                    }
                    sx={{ height: 24 }}
                  />
                </Box>
                <Typography variant="h6" component="div" gutterBottom noWrap>
                  {post.title}
                </Typography>
                {post.excerpt && (
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {post.excerpt.length > 60
                      ? `${post.excerpt.substring(0, 60)}...`
                      : post.excerpt}
                  </Typography>
                )}
                <Box sx={{ display: "flex", alignItems: "center", mt: "auto" }}>
                  <Avatar
                    src={`https://randomuser.me/api/portraits/${
                      post.author === "user1"
                        ? "men/1"
                        : post.author === "user2"
                        ? "women/2"
                        : "men/3"
                    }.jpg`}
                    sx={{ width: 24, height: 24, mr: 1 }}
                  />
                  <Typography variant="caption" color="text.secondary">
                    {post.author}
                  </Typography>
                  <Box sx={{ flexGrow: 1 }} />
                  <Typography variant="caption" color="text.secondary">
                    조회 {post.views} · 댓글 {post.comments}
                  </Typography>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </>
  );
}

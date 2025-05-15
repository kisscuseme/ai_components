"use client";

// 게시글 리스트(PostList) 컴포넌트
// 카테고리별 게시글 목록을 표시하고, 페이지네이션 기능 제공
import React from "react";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Typography,
  Grid,
  Avatar,
  Chip,
  Pagination,
  Divider,
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

export default function PostList({ category }: { category: string }) {
  const router = useRouter();
  const [page, setPage] = React.useState(1);

  // 실제 데이터 fetch/SSR/ISR 적용 위치(임시 데이터)
  const posts: Post[] = [
    {
      id: 1,
      title: "게시글 제목 예시1",
      author: "user1",
      createdAt: "2024-06-01",
      views: 123,
      comments: 4,
      category: category,
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 2,
      title: "게시글 제목 예시2",
      author: "user2",
      createdAt: "2024-06-02",
      views: 99,
      comments: 2,
      category: category,
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 3,
      title: "게시글 제목 예시3",
      author: "user3",
      createdAt: "2024-06-03",
      views: 78,
      comments: 1,
      category: category,
      image:
        "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 4,
      title: "게시글 제목 예시4",
      author: "user4",
      createdAt: "2024-06-04",
      views: 45,
      comments: 0,
      category: category,
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
    {
      id: 5,
      title: "게시글 제목 예시5",
      author: "user1",
      createdAt: "2024-06-05",
      views: 32,
      comments: 3,
      category: category,
      image:
        "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80",
      excerpt:
        "이 게시글은 예시 내용입니다. 클릭하면 상세 페이지로 이동합니다.",
    },
  ];

  const handleChangePage = (
    event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
  };

  return (
    <Box>
      <Grid container spacing={2}>
        {posts.map((post) => (
          <Grid size={{ xs: 12 }} key={post.id}>
            <Card
              variant="outlined"
              sx={{
                mb: 1,
                transition: "all 0.2s",
                "&:hover": {
                  boxShadow: 2,
                  bgcolor: "rgba(0, 0, 0, 0.01)",
                },
              }}
            >
              <CardActionArea
                onClick={() =>
                  router.push(`/sample9/board/${category}/${post.id}`)
                }
              >
                <CardContent>
                  <Grid container spacing={2} alignItems="center">
                    {/* 썸네일 이미지 (있는 경우) */}
                    {post.image && (
                      <Grid size={{ xs: 12, sm: 2 }}>
                        <Avatar
                          variant="rounded"
                          src={post.image}
                          sx={{ width: 80, height: 80 }}
                          alt={post.title}
                        />
                      </Grid>
                    )}

                    {/* 게시글 정보 */}
                    <Grid size={{ xs: 12, sm: post.image ? 10 : 12 }}>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 1 }}
                      >
                        <Typography variant="h6" fontWeight="bold" noWrap>
                          {post.title}
                        </Typography>
                        <Box sx={{ ml: 2 }}>
                          <Chip
                            label={`댓글 ${post.comments}`}
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ height: 20, fontSize: "0.7rem" }}
                          />
                        </Box>
                      </Box>

                      {post.excerpt && (
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{ mb: 1 }}
                        >
                          {post.excerpt.length > 100
                            ? `${post.excerpt.substring(0, 100)}...`
                            : post.excerpt}
                        </Typography>
                      )}

                      <Box sx={{ display: "flex", alignItems: "center" }}>
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
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ mx: 1, my: 0.5 }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          {post.createdAt}
                        </Typography>
                        <Divider
                          orientation="vertical"
                          flexItem
                          sx={{ mx: 1, my: 0.5 }}
                        />
                        <Typography variant="caption" color="text.secondary">
                          조회 {post.views}
                        </Typography>
                      </Box>
                    </Grid>
                  </Grid>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      {/* 페이지네이션 */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
        <Pagination
          count={5}
          page={page}
          onChange={handleChangePage}
          color="primary"
          size="large"
          showFirstButton
          showLastButton
        />
      </Box>
    </Box>
  );
}

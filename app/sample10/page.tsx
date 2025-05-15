"use client";

import React from "react";
import {
  Box,
  Grid,
  Typography,
  Paper,
  Divider,
  Avatar,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import {
  getLatestPosts,
  getPopularPosts,
  getUsersByPostCount,
  Post,
  User,
} from "./data";
import Link from "next/link";

// 게시글 카드 컴포넌트
const PostCard = ({ post }: { post: Post }) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        mb: 2,
        transition: "transform 0.2s",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: 3,
        },
      }}
    >
      <Link
        href={`/sample10/board/${post.category}/${post.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <Typography variant="h6" gutterBottom noWrap>
          {post.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 1,
          }}
        >
          <Typography variant="body2" color="text.secondary">
            {post.author} • {post.createdAt}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            조회 {post.views} • 좋아요 {post.likes}
          </Typography>
        </Box>
        <Typography variant="body2" noWrap>
          {post.content}
        </Typography>
        {post.image && (
          <Box
            sx={{
              mt: 2,
              height: 140,
              backgroundImage: `url(${post.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              borderRadius: 1,
            }}
          />
        )}
      </Link>
    </Paper>
  );
};

// 사용자 리스트 컴포넌트
const UserList = ({ users }: { users: User[] }) => {
  return (
    <Paper elevation={1} sx={{ p: 2, height: "100%" }}>
      <Typography variant="h6" gutterBottom>
        사용자 리스트
      </Typography>
      <Divider sx={{ mb: 2 }} />
      <List sx={{ p: 0 }}>
        {users.map((user) => (
          <ListItem key={user.id} sx={{ px: 0 }}>
            <ListItemAvatar>
              <Avatar src={user.profileImage} alt={user.name} />
            </ListItemAvatar>
            <ListItemText
              primary={user.name}
              secondary={`게시글 ${user.postCount}개`}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

// 메인 페이지
export default function Home() {
  const latestPosts = getLatestPosts(5);
  const popularPosts = getPopularPosts(5);
  const users = getUsersByPostCount();

  return (
    <Grid container spacing={3}>
      {/* 사용자 리스트 (좌측) */}
      <Grid size={{ xs: 12, md: 3 }}>
        <UserList users={users} />
      </Grid>

      {/* 게시글 섹션 (우측) */}
      <Grid size={{ xs: 12, md: 9 }}>
        {/* 최신글 섹션 */}
        <Box sx={{ mb: 4 }}>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            최신글
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {latestPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>

        {/* 인기글 섹션 */}
        <Box>
          <Typography variant="h5" gutterBottom sx={{ fontWeight: "bold" }}>
            인기글
          </Typography>
          <Divider sx={{ mb: 2 }} />
          {popularPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </Box>
      </Grid>
    </Grid>
  );
}

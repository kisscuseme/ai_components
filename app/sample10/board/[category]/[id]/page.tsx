"use client";

import React, { useState } from "react";
import {
  Box,
  Typography,
  Paper,
  Divider,
  Avatar,
  Button,
  TextField,
  Chip,
} from "@mui/material";
import { getPostById, getCommentsByPostId, Comment } from "../../../data";
import { useRouter } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import VisibilityIcon from "@mui/icons-material/Visibility";

// 댓글 컴포넌트
const CommentItem = ({ comment }: { comment: Comment }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
        <Avatar sx={{ width: 32, height: 32, mr: 1 }}>
          {comment.author.charAt(0)}
        </Avatar>
        <Typography variant="subtitle2" sx={{ fontWeight: "bold" }}>
          {comment.author}
        </Typography>
        <Typography variant="caption" sx={{ ml: 1, color: "text.secondary" }}>
          {comment.createdAt}
        </Typography>
      </Box>
      <Typography variant="body2" sx={{ ml: 5 }}>
        {comment.content}
      </Typography>
    </Box>
  );
};

// 댓글 섹션 컴포넌트
const CommentSection = ({ postId }: { postId: number }) => {
  const [commentText, setCommentText] = useState("");
  const comments = getCommentsByPostId(postId);

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (commentText.trim()) {
      // 실제 구현에서는 API 호출로 댓글 저장
      alert("댓글이 등록되었습니다.");
      setCommentText("");
    }
  };

  return (
    <Box sx={{ mt: 4 }}>
      <Typography variant="h6" gutterBottom>
        댓글 {comments.length}개
      </Typography>
      <Divider sx={{ mb: 3 }} />

      {/* 댓글 목록 */}
      <Box sx={{ mb: 3 }}>
        {comments.length > 0 ? (
          comments.map((comment) => (
            <CommentItem key={comment.id} comment={comment} />
          ))
        ) : (
          <Typography variant="body2" color="text.secondary">
            첫 번째 댓글을 작성해보세요.
          </Typography>
        )}
      </Box>

      {/* 댓글 작성 폼 */}
      <Paper elevation={0} sx={{ p: 2, bgcolor: "background.paper" }}>
        <form onSubmit={handleCommentSubmit}>
          <TextField
            fullWidth
            multiline
            rows={3}
            placeholder="댓글을 작성하세요"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
            variant="outlined"
            sx={{ mb: 2 }}
          />
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <Button type="submit" variant="contained" color="primary">
              댓글 작성
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
};

// 게시글 상세 페이지
export default async function PostDetailPage({
  params,
}: {
  params: Promise<{ category: string; id: string }>;
}) {
  const router = useRouter();
  const { category, id } = await params;
  const post = getPostById(parseInt(id));

  if (!post) {
    return (
      <Box sx={{ textAlign: "center", py: 5 }}>
        <Typography variant="h5">게시글을 찾을 수 없습니다.</Typography>
        <Button
          startIcon={<ArrowBackIcon />}
          onClick={() => router.back()}
          sx={{ mt: 2 }}
        >
          돌아가기
        </Button>
      </Box>
    );
  }

  return (
    <Box>
      <Button
        startIcon={<ArrowBackIcon />}
        onClick={() => router.back()}
        sx={{ mb: 2 }}
      >
        목록으로
      </Button>

      <Paper sx={{ p: 3, mb: 4 }}>
        {/* 게시글 헤더 */}
        <Typography variant="h4" gutterBottom>
          {post.title}
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Avatar sx={{ mr: 1 }}>{post.author.charAt(0)}</Avatar>
            <Typography variant="subtitle1">{post.author}</Typography>
            <Typography variant="body2" color="text.secondary" sx={{ ml: 2 }}>
              {post.createdAt}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Chip
              icon={<VisibilityIcon fontSize="small" />}
              label={post.views}
              variant="outlined"
              size="small"
              sx={{ mr: 1 }}
            />
            <Chip
              icon={<ThumbUpIcon fontSize="small" />}
              label={post.likes}
              variant="outlined"
              size="small"
              color="primary"
            />
          </Box>
        </Box>
        <Divider sx={{ mb: 3 }} />

        {/* 게시글 내용 */}
        <Box sx={{ mb: 3 }}>
          <Typography variant="body1" sx={{ whiteSpace: "pre-line", mb: 3 }}>
            {post.content}
          </Typography>

          {post.image && (
            <Box
              component="img"
              src={post.image}
              alt="게시글 이미지"
              sx={{
                width: "100%",
                maxHeight: 500,
                objectFit: "contain",
                borderRadius: 1,
              }}
            />
          )}
        </Box>

        {/* 좋아요 버튼 */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
          <Button
            variant="outlined"
            color="primary"
            startIcon={<ThumbUpIcon />}
            onClick={() => alert("좋아요를 눌렀습니다.")}
          >
            좋아요
          </Button>
        </Box>
      </Paper>

      {/* 댓글 섹션 */}
      <CommentSection postId={post.id} />
    </Box>
  );
}

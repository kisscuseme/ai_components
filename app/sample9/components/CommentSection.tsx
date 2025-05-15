"use client";

// 댓글 섹션(CommentSection) 컴포넌트
// 게시글에 대한 댓글 목록 표시 및 댓글 작성 폼 제공
import React, { useState } from "react";
import {
  Box,
  Typography,
  Avatar,
  TextField,
  Button,
  List,
  ListItem,
  Divider,
  Paper,
  Grid,
} from "@mui/material";

interface Comment {
  id: number;
  postId: number;
  author: string;
  content: string;
  createdAt: string;
  avatar?: string;
}

export default function CommentSection({ postId }: { postId: number }) {
  // 댓글 입력 상태 관리
  const [commentText, setCommentText] = useState("");

  // 실제 데이터 fetch/SSR/ISR 적용 위치(임시 데이터)
  const [comments, setComments] = useState<Comment[]>([
    {
      id: 1,
      postId: postId,
      author: "user2",
      content: "좋은 정보 감사합니다!",
      createdAt: "2024-06-01 15:30",
      avatar: "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 2,
      postId: postId,
      author: "user3",
      content: "이 내용 정말 유용하네요. 다음에도 좋은 글 부탁드립니다.",
      createdAt: "2024-06-01 16:45",
      avatar: "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ]);

  // 댓글 작성 처리
  const handleSubmitComment = (e: React.FormEvent) => {
    e.preventDefault();

    if (commentText.trim() === "") return;

    // 새 댓글 추가 (실제로는 API 호출)
    const newComment: Comment = {
      id: comments.length + 1,
      postId: postId,
      author: "user1", // 현재 로그인한 사용자 (예시)
      content: commentText,
      createdAt: new Date().toLocaleString(),
      avatar: "https://randomuser.me/api/portraits/men/1.jpg",
    };

    setComments([...comments, newComment]);
    setCommentText("");
  };

  return (
    <Box>
      {/* 댓글 목록 */}
      <List sx={{ mb: 4 }}>
        {comments.length === 0 ? (
          <Typography
            color="text.secondary"
            sx={{ py: 2, textAlign: "center" }}
          >
            첫 번째 댓글을 작성해보세요!
          </Typography>
        ) : (
          comments.map((comment, index) => (
            <React.Fragment key={comment.id}>
              <ListItem alignItems="flex-start" sx={{ px: 0 }}>
                <Grid container spacing={2}>
                  <Grid
                    size={{ xs: 12, sm: 2 }}
                    sx={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Avatar src={comment.avatar} alt={comment.author} />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 10 }} sx={{ pl: { xs: 0, sm: 2 } }}>
                    <Box>
                      <Box
                        sx={{ display: "flex", alignItems: "center", mb: 0.5 }}
                      >
                        <Typography variant="subtitle2" fontWeight="bold">
                          {comment.author}
                        </Typography>
                        <Typography
                          variant="caption"
                          color="text.secondary"
                          sx={{ ml: 1 }}
                        >
                          {comment.createdAt}
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        color="text.primary"
                        sx={{ whiteSpace: "pre-line" }}
                      >
                        {comment.content}
                      </Typography>
                    </Box>
                  </Grid>
                </Grid>
              </ListItem>
              {index < comments.length - 1 && <Divider component="li" />}
            </React.Fragment>
          ))
        )}
      </List>

      {/* 댓글 작성 폼 */}
      <Paper elevation={0} sx={{ p: 2, bgcolor: "#f5f5f5", borderRadius: 2 }}>
        <form onSubmit={handleSubmitComment}>
          <Box sx={{ display: "flex", alignItems: "flex-start" }}>
            <Avatar
              src="https://randomuser.me/api/portraits/men/1.jpg"
              sx={{ mr: 2, mt: 1 }}
            />
            <Box sx={{ flexGrow: 1 }}>
              <TextField
                fullWidth
                multiline
                rows={3}
                placeholder="댓글을 작성해주세요"
                variant="outlined"
                value={commentText}
                onChange={(e) => setCommentText(e.target.value)}
                sx={{ mb: 1 }}
              />
              <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={commentText.trim() === ""}
                >
                  댓글 작성
                </Button>
              </Box>
            </Box>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

"use client";

// 게시글 작성 페이지
// 제목, 내용, 카테고리 선택 등 게시글 작성 폼 제공
import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  Paper,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid,
  Alert,
  Snackbar,
} from "@mui/material";
import { useRouter } from "next/navigation";

export default function WritePage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleCategoryChange = (e: any) => {
    setFormData({
      ...formData,
      category: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // 유효성 검사
    if (!formData.title.trim()) {
      setError("제목을 입력해주세요.");
      return;
    }

    if (!formData.content.trim()) {
      setError("내용을 입력해주세요.");
      return;
    }

    if (!formData.category) {
      setError("카테고리를 선택해주세요.");
      return;
    }

    // 실제로는 API 호출하여 게시글 저장
    console.log("게시글 작성:", formData);

    // 성공 메시지 표시 후 리디렉션
    setSuccess(true);
    setTimeout(() => {
      router.push(`/sample10/board/${formData.category}`);
    }, 1500);
  };

  const handleCloseError = () => {
    setError("");
  };

  return (
    <Box>
      <Paper elevation={1} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h4" fontWeight="bold" gutterBottom>
          게시글 작성
        </Typography>

        <form onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            {/* 카테고리 선택 */}
            <Grid size={{ xs: 12 }}>
              <FormControl fullWidth required>
                <InputLabel id="category-label">카테고리</InputLabel>
                <Select
                  labelId="category-label"
                  id="category"
                  value={formData.category}
                  label="카테고리"
                  onChange={handleCategoryChange}
                >
                  <MenuItem value="free">자유 게시판</MenuItem>
                  <MenuItem value="humor">유머 게시판</MenuItem>
                  <MenuItem value="info">정보 게시판</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            {/* 제목 입력 */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="제목"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
                variant="outlined"
              />
            </Grid>

            {/* 내용 입력 */}
            <Grid size={{ xs: 12 }}>
              <TextField
                fullWidth
                label="내용"
                name="content"
                value={formData.content}
                onChange={handleChange}
                required
                multiline
                rows={10}
                variant="outlined"
              />
            </Grid>

            {/* 버튼 영역 */}
            <Grid size={{ xs: 12 }}>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Button
                  variant="outlined"
                  color="inherit"
                  onClick={() => router.back()}
                >
                  취소
                </Button>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  size="large"
                >
                  게시글 등록
                </Button>
              </Box>
            </Grid>
          </Grid>
        </form>
      </Paper>

      {/* 에러 메시지 */}
      <Snackbar
        open={!!error}
        autoHideDuration={6000}
        onClose={handleCloseError}
      >
        <Alert
          onClose={handleCloseError}
          severity="error"
          sx={{ width: "100%" }}
        >
          {error}
        </Alert>
      </Snackbar>

      {/* 성공 메시지 */}
      <Snackbar open={success} autoHideDuration={6000}>
        <Alert severity="success" sx={{ width: "100%" }}>
          게시글이 성공적으로 등록되었습니다!
        </Alert>
      </Snackbar>
    </Box>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  SelectChangeEvent,
} from "@mui/material";
import { useRouter, useSearchParams } from "next/navigation";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

// 게시글 작성 페이지
export default function WritePage() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const initialCategory = searchParams?.get("category") || "free";

  const [formData, setFormData] = useState({
    title: "",
    content: "",
    category: initialCategory,
  });

  useEffect(() => {
    if (initialCategory) {
      setFormData((prev) => ({ ...prev, category: initialCategory }));
    }
  }, [initialCategory]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCategoryChange = (e: SelectChangeEvent<string>) => {
    setFormData((prev) => ({ ...prev, category: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.title.trim() || !formData.content.trim()) {
      alert("제목과 내용을 모두 입력해주세요.");
      return;
    }

    // 실제 구현에서는 API 호출로 게시글 저장
    alert("게시글이 등록되었습니다.");
    router.push(`/sample10/board/${formData.category}`);
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
          게시글 작성
        </Typography>
        <Button startIcon={<ArrowBackIcon />} onClick={() => router.back()}>
          취소
        </Button>
      </Box>

      <Paper sx={{ p: 3 }}>
        <form onSubmit={handleSubmit}>
          <FormControl fullWidth sx={{ mb: 3 }}>
            <InputLabel id="category-label">카테고리</InputLabel>
            <Select
              labelId="category-label"
              id="category"
              value={formData.category}
              label="카테고리"
              onChange={handleCategoryChange}
            >
              <MenuItem value="free">자유 게시판</MenuItem>
              <MenuItem value="humor">유머</MenuItem>
              <MenuItem value="info">정보</MenuItem>
            </Select>
          </FormControl>

          <TextField
            fullWidth
            label="제목"
            name="title"
            value={formData.title}
            onChange={handleChange}
            variant="outlined"
            sx={{ mb: 3 }}
            required
          />

          <TextField
            fullWidth
            label="내용"
            name="content"
            value={formData.content}
            onChange={handleChange}
            variant="outlined"
            multiline
            rows={10}
            sx={{ mb: 3 }}
            required
          />

          <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
            <Button
              type="button"
              variant="outlined"
              onClick={() => router.back()}
              sx={{ minWidth: 120 }}
            >
              취소
            </Button>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              sx={{ minWidth: 120 }}
            >
              등록
            </Button>
          </Box>
        </form>
      </Paper>
    </Box>
  );
}

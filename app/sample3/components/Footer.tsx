import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function Footer() {
  return (
    <Box sx={{ bgcolor: "#111", py: 6, textAlign: "center", borderTop: "1px solid #222" }}>
      <Typography variant="body2" color="#bbb" sx={{ mb: 1 }}>
        KISSCUSEME Inc.
      </Typography>
      <Typography variant="caption" color="#666">
        © 2024 KISSCUSEME. All rights reserved. | 사업자등록번호 123-45-67890 | 대표 홍길동 | 서울특별시 마포구 마포대로 123
      </Typography>
    </Box>
  );
}
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function AwardsSection() {
  return (
    <Box sx={{ bgcolor: "#181818", py: 8, borderBottom: "1px solid #222", px: { xs: 2, md: 8 } }}>
      <Typography variant="h4" fontWeight={700} color="#fff" sx={{ mb: 4 }}>
        수상 및 주요 이력
      </Typography>
      <Box sx={{ display: "flex", flexDirection: { xs: "column", md: "row" }, gap: 4 }}>
        <Box sx={{ flex: 1, bgcolor: "#222", borderRadius: 2, p: 3, mb: { xs: 2, md: 0 } }}>
          <Typography variant="h6" color="#c9a86a" fontWeight={600}>
            2023 대한민국 부동산대상
          </Typography>
          <Typography variant="body2" color="#bbb" sx={{ mt: 1 }}>
            혁신 부동산 서비스 부문 대상 수상
          </Typography>
        </Box>
        <Box sx={{ flex: 1, bgcolor: "#222", borderRadius: 2, p: 3 }}>
          <Typography variant="h6" color="#c9a86a" fontWeight={600}>
            2022 AI 부동산 컨설팅 어워드
          </Typography>
          <Typography variant="body2" color="#bbb" sx={{ mt: 1 }}>
            AI 기반 부동산 컨설팅 혁신상 수상
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
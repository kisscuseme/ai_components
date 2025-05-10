import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const newsList = [
  {
    title: "2021 K-소비자브랜드 대상 수상",
    image: "https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&w=600&q=80",
    desc: "KISSCUSEME가 2021 K-소비자브랜드 대상을 수상하였습니다.",
  },
  {
    title: "신규 프로젝트 런칭",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
    desc: "서울 하이파크 리버포레 프로젝트가 성공적으로 런칭되었습니다.",
  },
  {
    title: "사회공헌 활동",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
    desc: "KISSCUSEME 임직원이 함께한 사회공헌 활동 현장.",
  },
];

export default function NewsSection() {
  return (
    <Box sx={{ bgcolor: "#181818", py: 8, borderBottom: "1px solid #222", px: { xs: 2, md: 8 } }}>
      <Typography variant="h4" fontWeight={700} color="#fff" sx={{ mb: 4 }}>
        NEWS
      </Typography>
      <Grid container spacing={3}>
        {newsList.map((news, idx) => (
          <Grid size={{ xs: 12, md: 4 }} key={idx}>
            <Box sx={{ bgcolor: "#222", borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
              <Box component="img" src={news.image} alt={news.title} sx={{ width: "100%", height: 180, objectFit: "cover" }} />
              <Box sx={{ p: 2 }}>
                <Typography variant="subtitle1" color="#fff" fontWeight={600}>
                  {news.title}
                </Typography>
                <Typography variant="body2" color="#bbb" sx={{ mt: 1 }}>
                  {news.desc}
                </Typography>
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
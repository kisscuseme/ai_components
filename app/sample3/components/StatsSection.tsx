import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const stats = [
  { label: "운영기간", value: "25년" },
  { label: "계약액", value: "1조원" },
  { label: "누적분양", value: "5600세대+" },
  { label: "협력업체", value: "200개+" },
];

export default function StatsSection() {
  return (
    <Box sx={{ bgcolor: "#181818", py: 8, borderBottom: "1px solid #222", px: { xs: 2, md: 8 } }}>
      <Grid container spacing={4}>
        {stats.map((stat, idx) => (
          <Grid size={{ xs: 6, md: 3 }} key={idx}>
            <Box sx={{ textAlign: "center" }}>
              <Typography variant="h4" color="#c9a86a" fontWeight={700}>
                {stat.value}
              </Typography>
              <Typography variant="body1" color="#bbb" sx={{ mt: 1 }}>
                {stat.label}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
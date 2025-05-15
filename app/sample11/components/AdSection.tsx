"use client";

import { Box, Typography, Paper } from "@mui/material";

const AdSection = () => {
  return (
    <Paper
      elevation={2}
      sx={{
        mb: 4,
        p: 3,
        backgroundColor: "rgba(25, 25, 25, 0.7)",
        borderRadius: 2,
        border: "1px solid rgba(255, 255, 255, 0.08)",
        textAlign: "center",
      }}
    >
      <Typography
        variant="h6"
        component="h3"
        sx={{
          mb: 1,
          fontWeight: 500,
          color: "#bbb",
        }}
      >
        Google Adsense
      </Typography>
      <Box
        sx={{
          height: 120,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(40, 40, 40, 0.5)",
          borderRadius: 1,
          border: "1px dashed rgba(255, 255, 255, 0.1)",
        }}
      >
        <Typography variant="body2" color="text.secondary">
          광고 영역
        </Typography>
      </Box>
    </Paper>
  );
};

export default AdSection;

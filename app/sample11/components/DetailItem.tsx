"use client";

import { Box, Typography, Paper } from "@mui/material";

interface DetailItemProps {
  title: string;
}

const DetailItem = ({ title }: DetailItemProps) => {
  return (
    <Paper
      elevation={1}
      sx={{
        p: 2,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "rgba(50, 50, 50, 0.5)",
        borderRadius: 2,
        cursor: "pointer",
        transition: "all 0.2s ease",
        border: "1px solid rgba(255, 255, 255, 0.05)",
        "&:hover": {
          backgroundColor: "rgba(70, 70, 70, 0.7)",
          transform: "scale(1.02)",
          boxShadow: 3,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          fontWeight: 500,
          textAlign: "center",
          color: "#e0e0e0",
        }}
      >
        {title}
      </Typography>
    </Paper>
  );
};

export default DetailItem;

"use client";

import { Box, Typography, Avatar } from "@mui/material";

interface CategoryItemProps {
  title: string;
  icon: string;
}

const CategoryItem = ({ title, icon }: CategoryItemProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        p: 1,
        borderRadius: 2,
        transition: "all 0.2s ease",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.05)",
        },
      }}
    >
      <Avatar
        sx={{
          bgcolor: "primary.dark",
          width: 40,
          height: 40,
          fontSize: "1.2rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      >
        {icon}
      </Avatar>
      <Typography
        variant="h6"
        sx={{
          fontWeight: 500,
          color: "#fff",
        }}
      >
        {title}
      </Typography>
    </Box>
  );
};

export default CategoryItem;

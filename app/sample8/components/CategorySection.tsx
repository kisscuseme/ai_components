"use client";

import { Box, Grid, Paper, Typography } from "@mui/material";
import BestSellerIcon from "@mui/icons-material/EmojiEvents";
import CategoryIcon from "@mui/icons-material/Category";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";
import ComputerIcon from "@mui/icons-material/Computer";
import MemoryIcon from "@mui/icons-material/Memory";
import DeveloperBoardIcon from "@mui/icons-material/DeveloperBoard";
import SdStorageIcon from "@mui/icons-material/SdStorage";
import SettingsIcon from "@mui/icons-material/Settings";

interface CategoryItemProps {
  icon: React.ReactNode;
  title: string;
}

const CategoryItem = ({ icon, title }: CategoryItemProps) => {
  return (
    <Paper
      elevation={0}
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        p: 2,
        borderRadius: 2,
        transition: "all 0.3s",
        cursor: "pointer",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 3,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: 60,
          height: 60,
          borderRadius: "50%",
          backgroundColor: "primary.light",
          color: "white",
          mb: 1,
        }}
      >
        {icon}
      </Box>
      <Typography variant="body2" align="center">
        {title}
      </Typography>
    </Paper>
  );
};

const categories = [
  { icon: <BestSellerIcon fontSize="large" />, title: "베스트" },
  { icon: <CategoryIcon fontSize="large" />, title: "통합" },
  { icon: <LocalOfferIcon fontSize="large" />, title: "핫딜" },
  { icon: <ComputerIcon fontSize="large" />, title: "PC/노트북" },
  { icon: <MemoryIcon fontSize="large" />, title: "CPU/메인보드" },
  { icon: <DeveloperBoardIcon fontSize="large" />, title: "그래픽카드" },
  { icon: <SdStorageIcon fontSize="large" />, title: "SSD/HDD" },
  { icon: <SettingsIcon fontSize="large" />, title: "주변기기" },
];

const CategorySection = () => {
  return (
    <Box component="section" sx={{ mt: 4 }}>
      <Grid container spacing={2}>
        {categories.map((category, index) => (
          <Grid size={{ xs: 3, sm: 3, md: 1.5 }} key={index}>
            <CategoryItem icon={category.icon} title={category.title} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CategorySection;
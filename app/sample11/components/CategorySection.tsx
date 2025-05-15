"use client";

import { Box, Typography, Grid, Paper } from "@mui/material";
import CategoryItem from "./CategoryItem";
import DetailItem from "./DetailItem";

interface DetailItemType {
  id: number;
  title: string;
}

interface CategoryType {
  id: number;
  title: string;
  icon: string;
  details: DetailItemType[];
}

interface CategorySectionProps {
  title: string;
  categories: CategoryType[];
}

const CategorySection = ({ title, categories }: CategorySectionProps) => {
  return (
    <Box sx={{ mb: 4 }}>
      <Typography
        variant="h5"
        component="h2"
        sx={{
          mb: 2,
          fontWeight: 600,
          position: "relative",
          display: "inline-block",
          "&:after": {
            content: '""',
            position: "absolute",
            bottom: -5,
            left: 0,
            width: "100%",
            height: 2,
            backgroundColor: "primary.main",
            borderRadius: 1,
          },
        }}
      >
        # {title}
      </Typography>

      {categories.map((category) => (
        <Paper
          key={category.id}
          elevation={2}
          sx={{
            mb: 2,
            p: 2,
            backgroundColor: "rgba(30, 30, 30, 0.7)",
            transition: "all 0.3s ease",
            "&:hover": {
              backgroundColor: "rgba(40, 40, 40, 0.9)",
              transform: "translateY(-2px)",
              boxShadow: 4,
            },
          }}
        >
          <Grid container spacing={2}>
            {/* 카테고리 아이템 (왼쪽) */}
            <Grid size={{ xs: 12, sm: 4, md: 3 }}>
              <CategoryItem title={category.title} icon={category.icon} />
            </Grid>

            {/* 세부 항목 (오른쪽) */}
            <Grid size={{ xs: 12, sm: 8, md: 9 }}>
              <Grid container spacing={1}>
                {category.details.map((detail) => (
                  <Grid key={detail.id} size={{ xs: 12, sm: 6, md: 4 }}>
                    <DetailItem title={detail.title} />
                  </Grid>
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </Box>
  );
};

export default CategorySection;

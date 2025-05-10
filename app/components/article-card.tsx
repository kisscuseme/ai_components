"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  IconButton,
  Chip,
  CardActionArea,
  useTheme,
} from "@mui/material";

// 화살표 아이콘 SVG
const ArrowIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M12 4L10.59 5.41L16.17 11H4V13H16.17L10.59 18.59L12 20L20 12L12 4Z"
      fill="currentColor"
    />
  </svg>
);

interface Article {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
}

interface ArticleCardProps {
  article: Article;
}

export default function ArticleCard({ article }: ArticleCardProps) {
  const theme = useTheme();
  const [elevation, setElevation] = useState(1);

  // 이미지 URL이 상대 경로인 경우 기본 이미지로 대체
  const imageUrl = article.image.startsWith("/")
    ? `https://source.unsplash.com/random/600x400?${article.badge
        .toLowerCase()
        .replace(" ", ",")}`
    : article.image;

  return (
    <Card
      elevation={elevation}
      onMouseEnter={() => setElevation(4)}
      onMouseLeave={() => setElevation(1)}
      sx={{
        borderRadius: 4,
        overflow: "hidden",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        transition: "transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out",
        "&:hover": {
          transform: "translateY(-8px)",
          boxShadow: theme.shadows[8],
        },
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CardActionArea>
          <CardMedia
            component="div"
            image={imageUrl}
            title={article.title}
            sx={{
              height: { xs: 180, sm: 200, md: 220 },
              position: "relative",
              backgroundPosition: "center",
              backgroundSize: "cover",
            }}
          />
          <Chip
            label={article.badge}
            size="small"
            sx={{
              position: "absolute",
              top: theme.spacing(2),
              left: theme.spacing(2),
              backgroundColor: "rgba(255, 99, 97, 0.9)",
              color: "white",
              fontWeight: 600,
              borderRadius: 4,
              zIndex: 1,
              fontSize: "0.75rem",
              px: 1,
            }}
          />
        </CardActionArea>
        <IconButton
          aria-label="read more"
          sx={{
            position: "absolute",
            bottom: theme.spacing(2),
            right: theme.spacing(2),
            backgroundColor: "white",
            color: theme.palette.text.primary,
            transition: "transform 0.2s ease-in-out",
            "&:hover": {
              backgroundColor: "white",
              transform: "translateX(4px)",
            },
            zIndex: 1,
          }}
        >
          <ArrowIcon />
        </IconButton>
      </Box>
      <CardContent
        sx={{
          flexGrow: 1,
          p: 3,
          "&:last-child": { pb: 3 },
        }}
      >
        <Typography
          gutterBottom
          variant="h5"
          component="h2"
          sx={{
            fontWeight: 700,
            mb: 1,
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.title}
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
          }}
        >
          {article.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

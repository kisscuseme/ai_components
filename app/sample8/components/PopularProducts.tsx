"use client";

import { Box, Card, CardContent, CardMedia, Typography, Grid, Rating, Chip } from "@mui/material";

interface PopularProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  discount?: number;
  category: string;
}

const popularProducts: PopularProductProps[] = [
  {
    id: 1,
    title: "RTX 5060 Ti 16GB 그래픽카드",
    image: "https://images.unsplash.com/photo-1618764400608-9e7115eede74?fm=jpg&q=60&w=3000",
    price: 599000,
    originalPrice: 699000,
    rating: 4.8,
    reviewCount: 127,
    discount: 15,
    category: "그래픽카드",
  },
  {
    id: 2,
    title: "AMD 라이젠 9 7950X3D 프로세서",
    image: "https://images.unsplash.com/photo-1645225840957-1b789a6c81b0?fm=jpg&q=60&w=3000",
    price: 789000,
    rating: 4.9,
    reviewCount: 94,
    category: "CPU",
  },
  {
    id: 3,
    title: "ASUS ROG STRIX Z790-E 메인보드",
    image: "https://images.unsplash.com/photo-1640872005860-8a21cb5b05be?fm=jpg&q=60&w=3000",
    price: 459000,
    originalPrice: 499000,
    rating: 4.7,
    reviewCount: 56,
    discount: 8,
    category: "메인보드",
  },
  {
    id: 4,
    title: "삼성 980 PRO 2TB NVMe SSD",
    image: "https://images.unsplash.com/photo-1656610171681-382fccafe383?fm=jpg&q=60&w=3000",
    price: 329000,
    rating: 4.9,
    reviewCount: 203,
    category: "SSD",
  },
];

const formatPrice = (price: number) => {
  return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

const PopularProductCard = (props: PopularProductProps) => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        height: "100%",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 3,
        },
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: { xs: "100%", sm: 140 },
          height: { xs: 140, sm: "auto" },
          objectFit: "cover",
        }}
        image={props.image}
        alt={props.title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
          <Typography variant="subtitle2" color="text.secondary" gutterBottom>
            {props.category}
          </Typography>
          {props.discount && (
            <Chip
              label={`${props.discount}% OFF`}
              color="error"
              size="small"
              sx={{ height: 20, fontSize: "0.7rem" }}
            />
          )}
        </Box>
        <Typography variant="h6" component="h3" gutterBottom noWrap>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating value={props.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({props.reviewCount})
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "baseline" }}>
          <Typography variant="h6" component="span" color="primary.main" fontWeight="bold">
            {formatPrice(props.price)}원
          </Typography>
          {props.originalPrice && (
            <Typography
              variant="body2"
              component="span"
              color="text.secondary"
              sx={{ ml: 1, textDecoration: "line-through" }}
            >
              {formatPrice(props.originalPrice)}원
            </Typography>
          )}
        </Box>
      </CardContent>
    </Card>
  );
};

const PopularProducts = () => {
  return (
    <Grid container spacing={3}>
      {popularProducts.map((product) => (
        <Grid size={{ xs: 12, sm: 6 }} key={product.id}>
          <PopularProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default PopularProducts;
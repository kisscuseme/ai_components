"use client";

import { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Grid,
  IconButton,
  Rating,
  Typography,
  Button,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";

interface ProductProps {
  id: number;
  title: string;
  image: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewCount: number;
  isNew?: boolean;
  discount?: number;
}

const products: ProductProps[] = [
  {
    id: 1,
    title: "RTX 5060 Ti 16GB 그래픽카드",
    image: "https://images.unsplash.com/photo-1618764400608-9e7115eede74?fm=jpg&q=60&w=3000",
    price: 599000,
    originalPrice: 699000,
    rating: 4.8,
    reviewCount: 127,
    isNew: true,
    discount: 15,
  },
  {
    id: 2,
    title: "AMD 라이젠 9 7950X3D 프로세서",
    image: "https://images.unsplash.com/photo-1645225840957-1b789a6c81b0?fm=jpg&q=60&w=3000",
    price: 789000,
    rating: 4.9,
    reviewCount: 94,
    isNew: true,
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
  },
  {
    id: 4,
    title: "삼성 980 PRO 2TB NVMe SSD",
    image: "https://images.unsplash.com/photo-1656610171681-382fccafe383?fm=jpg&q=60&w=3000",
    price: 329000,
    rating: 4.9,
    reviewCount: 203,
  },
  {
    id: 5,
    title: "Corsair Vengeance RGB 32GB DDR5 RAM",
    image: "https://images.unsplash.com/photo-1645226065134-bd78d2107da7?fm=jpg&q=60&w=3000",
    price: 219000,
    originalPrice: 249000,
    rating: 4.6,
    reviewCount: 78,
    discount: 12,
  },
  {
    id: 6,
    title: "NZXT H7 Flow 미드타워 케이스",
    image: "https://images.unsplash.com/photo-1619097647550-0fe7f031c18b?fm=jpg&q=60&w=3000",
    price: 169000,
    rating: 4.5,
    reviewCount: 42,
  },
  {
    id: 7,
    title: "Corsair RM850x 850W 파워서플라이",
    image: "https://images.unsplash.com/photo-1540761567564-d7839d2611b5?fm=jpg&q=60&w=3000",
    price: 179000,
    originalPrice: 199000,
    rating: 4.7,
    reviewCount: 65,
    discount: 10,
  },
  {
    id: 8,
    title: "NOCTUA NH-D15 CPU 쿨러",
    image: "https://images.unsplash.com/photo-1522920192563-6df902920a8a?fm=jpg&q=60&w=3000",
    price: 129000,
    rating: 4.8,
    reviewCount: 112,
  },
];

const ProductCard = (props: ProductProps) => {
  const [isFavorite, setIsFavorite] = useState(false);

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const formatPrice = (price: number) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        position: "relative",
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      {props.isNew && (
        <Chip
          label="NEW"
          color="primary"
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            left: 10,
            zIndex: 1,
          }}
        />
      )}
      {props.discount && (
        <Chip
          label={`${props.discount}% OFF`}
          color="error"
          size="small"
          sx={{
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1,
          }}
        />
      )}
      <CardMedia
        component="img"
        height="200"
        image={props.image}
        alt={props.title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography variant="h6" component="h3" gutterBottom noWrap>
          {props.title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
          <Rating value={props.rating} precision={0.1} size="small" readOnly />
          <Typography variant="body2" color="text.secondary" sx={{ ml: 1 }}>
            ({props.reviewCount})
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "baseline", mb: 2 }}>
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
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Button
            variant="contained"
            startIcon={<ShoppingCartIcon />}
            size="small"
            sx={{ flexGrow: 1, mr: 1 }}
          >
            장바구니
          </Button>
          <IconButton
            aria-label="찜하기"
            onClick={toggleFavorite}
            color={isFavorite ? "error" : "default"}
            sx={{ border: 1, borderColor: "divider" }}
          >
            {isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />}
          </IconButton>
        </Box>
      </CardContent>
    </Card>
  );
};

const ProductList = () => {
  return (
    <Grid container spacing={3}>
      {products.map((product) => (
        <Grid size={{ xs: 12, sm: 6, md: 3 }} key={product.id}>
          <ProductCard {...product} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ProductList;
"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
  alpha,
  Badge,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import PersonIcon from "@mui/icons-material/Person";
import Link from "next/link";

const categories = [
  { name: "베스트/통합", path: "#best" },
  { name: "이벤트/특가", path: "#event" },
  { name: "공식사", path: "#official" },
  { name: "성능비교", path: "#compare" },
  { name: "뉴스/정보", path: "#news" },
  { name: "질문/토론", path: "#qna" },
  { name: "커뮤니티", path: "#community" },
  { name: "환급/장터", path: "#market" },
  { name: "온에어", path: "#onair" },
];

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ bgcolor: "white" }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 로고 (데스크탑) */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontWeight: 700,
              color: "#ff6600",
              textDecoration: "none",
            }}
          >
            KISSCUSEME
          </Typography>

          {/* 모바일 메뉴 */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="메뉴"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {categories.map((category) => (
                <MenuItem key={category.name} onClick={handleCloseNavMenu}>
                  <Link
                    href={category.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{category.name}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          {/* 로고 (모바일) */}
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              fontWeight: 700,
              color: "#ff6600",
              textDecoration: "none",
            }}
          >
            KISSCUSEME
          </Typography>

          {/* 검색창 */}
          <Box
            sx={{
              position: "relative",
              borderRadius: 1,
              backgroundColor: alpha(theme.palette.common.black, 0.05),
              "&:hover": {
                backgroundColor: alpha(theme.palette.common.black, 0.1),
              },
              marginRight: 2,
              marginLeft: 2,
              width: { xs: "100%", md: "50%" },
              display: { xs: "none", md: "block" },
            }}
          >
            <Box sx={{ padding: "0 16px", height: "100%", position: "absolute", display: "flex", alignItems: "center" }}>
              <SearchIcon />
            </Box>
            <InputBase
              placeholder="검색어를 입력하세요"
              sx={{
                color: "inherit",
                padding: "8px 8px 8px 56px",
                width: "100%",
              }}
            />
          </Box>

          {/* 데스크탑 메뉴 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {categories.map((category) => (
              <Button
                key={category.name}
                onClick={handleCloseNavMenu}
                sx={{ color: "text.primary", display: "block", mx: 0.5 }}
                component={Link}
                href={category.path}
              >
                {category.name}
              </Button>
            ))}
          </Box>

          {/* 아이콘 메뉴 */}
          <Box sx={{ display: "flex" }}>
            <IconButton color="inherit">
              <Badge badgeContent={4} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton color="inherit">
              <PersonIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
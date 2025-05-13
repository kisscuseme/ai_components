"use client";

import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Link from "next/link";

// 메뉴 아이콘 SVG
const MenuIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M3 12H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 6H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M3 18H21"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
    />
  </svg>
);

// 카카오 로고 SVG
const KakaoLogo = () => (
  <svg
    width="120"
    height="30"
    viewBox="0 0 120 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M30 15C30 6.75 23.25 0 15 0C6.75 0 0 6.75 0 15C0 23.25 6.75 30 15 30C23.25 30 30 23.25 30 15Z"
      fill="#000000"
    />
    <path
      d="M15 6C9.5 6 5 9.5 5 13.75C5 16.5 6.75 18.75 9.25 20.25L8.25 24C8.25 24.25 8.5 24.5 8.75 24.25L13.25 21.25C14 21.5 14.5 21.5 15 21.5C20.5 21.5 25 18 25 13.75C25 9.5 20.5 6 15 6Z"
      fill="#FEE500"
    />
    <path
      d="M40 10H45V20H47.5V10H52.5V7.5H40V10ZM55 20H57.5V15H62.5V12.5H57.5V10H65V7.5H55V20ZM67.5 20H70V15H75V12.5H70V10H77.5V7.5H67.5V20ZM80 20H82.5V15H87.5V12.5H82.5V10H90V7.5H80V20ZM92.5 7.5V20H95V16.25H97.5C100.75 16.25 103.25 14.75 103.25 11.75C103.25 8.75 100.75 7.5 97.5 7.5H92.5ZM95 10H97.5C99 10 100.5 10.25 100.5 11.75C100.5 13.25 99 13.75 97.5 13.75H95V10Z"
      fill="#000000"
    />
    <path
      d="M107.5 20H110V16.25H112.5C115.75 16.25 118.25 14.75 118.25 11.75C118.25 8.75 115.75 7.5 112.5 7.5H107.5V20ZM110 10H112.5C114 10 115.5 10.25 115.5 11.75C115.5 13.25 114 13.75 112.5 13.75H110V10Z"
      fill="#000000"
    />
  </svg>
);

const pages = [
  { name: "소개", path: "#intro" },
  { name: "서비스", path: "#services" },
  { name: "API", path: "#api" },
  { name: "파트너", path: "#partners" },
  { name: "고객지원", path: "#support" },
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
    <AppBar position="sticky" color="primary" elevation={0}>
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
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            <KakaoLogo />
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
              {pages.map((page) => (
                <MenuItem key={page.name} onClick={handleCloseNavMenu}>
                  <Link
                    href={page.path}
                    style={{ textDecoration: "none", color: "inherit" }}
                  >
                    <Typography textAlign="center">{page.name}</Typography>
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
              color: "secondary.main",
              textDecoration: "none",
            }}
          >
            <KakaoLogo />
          </Typography>

          {/* 데스크탑 메뉴 */}
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex" },
              justifyContent: "flex-end",
            }}
          >
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "secondary.main", display: "block", mx: 1 }}
                component={Link}
                href={page.path}
              >
                {page.name}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;

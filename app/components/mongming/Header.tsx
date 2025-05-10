"use client";

import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Link from "next/link";
import Image from "next/image";

const pages = [
  { name: "회사소개", path: "/intro#about" },
  { name: "사업분야", path: "/intro#services" },
  { name: "프로젝트", path: "/intro#projects" },
  { name: "뉴스", path: "/intro#news" },
  { name: "채용", path: "/intro#careers" },
  { name: "문의하기", path: "/intro#contact" },
];

const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ backgroundColor: "white" }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          {/* 로고 (데스크탑) */}
          <Box sx={{ display: { xs: "none", md: "flex" }, mr: 2 }}>
            <Link href="/intro">
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src="/mongming/logo.svg"
                  alt="MongMing 로고"
                  width={180}
                  height={45}
                  priority
                />
              </Box>
            </Link>
          </Box>

          {/* 모바일 메뉴 */}
          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="메뉴"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="primary"
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
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "center",
            }}
          >
            <Link href="/intro">
              <Box
                component="span"
                sx={{ display: "flex", alignItems: "center" }}
              >
                <Image
                  src="/mongming/logo.svg"
                  alt="MongMing 로고"
                  width={150}
                  height={40}
                  priority
                />
              </Box>
            </Link>
          </Box>

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
                sx={{
                  my: 2,
                  color: "#333",
                  display: "block",
                  fontWeight: 500,
                  mx: 1,
                }}
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

"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  Container,
  useMediaQuery,
  IconButton,
  Menu,
  MenuItem,
  useTheme,
} from "@mui/material";
import { useRouter } from "next/navigation";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";

const menuItems = [
  { label: "자유 게시판", path: "/sample10/board/free" },
  { label: "유머", path: "/sample10/board/humor" },
  { label: "정보", path: "/sample10/board/info" },
];

export default function Header() {
  const router = useRouter();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

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
      elevation={1}
      sx={{ bgcolor: "background.paper" }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {/* 로고/사이트명 */}
          <Typography
            variant="h6"
            sx={{
              fontWeight: "bold",
              cursor: "pointer",
              color: "primary.main",
            }}
          >
            <Link
              href="/sample10"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              KISSCUSEME
            </Link>
          </Typography>

          {/* 모바일 메뉴 */}
          {isMobile ? (
            <Box>
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
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {menuItems.map((item) => (
                  <MenuItem key={item.path} onClick={handleCloseNavMenu}>
                    <Link
                      href={item.path}
                      style={{ textDecoration: "none", color: "inherit" }}
                    >
                      <Typography textAlign="center">{item.label}</Typography>
                    </Link>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          ) : (
            /* 데스크탑 메뉴 */
            <Box>
              {menuItems.map((item) => (
                <Button
                  key={item.path}
                  color="inherit"
                  sx={{ mx: 1, fontWeight: "bold" }}
                  component={Link}
                  href={item.path}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

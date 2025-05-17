"use client";

import React from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  IconButton,
  Avatar,
} from "@mui/material";
import Link from "next/link";
import ThemeToggle from "./ThemeToggle";
import ProfileMenu from "./ProfileMenu";

export default function Header() {
  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: 1,
        borderColor: "divider",
        bgcolor: "background.paper",
      }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        {/* 로고 */}
        <Typography
          variant="h6"
          color="primary"
          fontWeight={700}
          component={Link}
          href="/sample15"
          sx={{ textDecoration: "none" }}
        >
          Damso
        </Typography>
        {/* 우측: 테마 토글, 프로필 메뉴 */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <ThemeToggle />
          <ProfileMenu />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

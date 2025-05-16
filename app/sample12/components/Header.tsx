"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Box,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Header = () => {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfile = () => {
    router.push("/sample12/profile/1");
    handleClose();
  };

  return (
    <AppBar
      position="static"
      sx={{
        bgcolor: "#66bb6a",
        backgroundImage: "linear-gradient(to right, #66bb6a, #81c784)",
        boxShadow: "0 2px 8px rgba(129, 199, 132, 0.3)",
      }}
    >
      <Toolbar sx={{ display: "flex", alignItems: "center" }}>
        <Typography
          variant="h6"
          component={Link}
          href="/sample12"
          sx={{ flexGrow: 1, textDecoration: "none", color: "white" }}
        >
          토론 사이트
        </Typography>
        <IconButton
          size="large"
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={handleMenu}
        >
          <MenuIcon />
        </IconButton>
        <Menu
          id="menu-appbar"
          anchorEl={anchorEl}
          anchorOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          keepMounted
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
          open={open}
          onClose={handleClose}
        >
          <MenuItem
            onClick={handleProfile}
            sx={{ display: "flex", alignItems: "center", gap: 2 }}
          >
            <Avatar src="https://tabler.io/avatars/avatar-1.png" />
            <Box>
              <Typography variant="subtitle1">사용자01</Typography>
              <Typography variant="body2" color="text.secondary">
                프로필 보기
              </Typography>
            </Box>
          </MenuItem>
        </Menu>
      </Toolbar>
    </AppBar>
  );
};

export default Header;

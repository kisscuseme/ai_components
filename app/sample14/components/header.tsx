"use client";

import type React from "react";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Divider,
  ListItemIcon,
} from "@mui/material";
import { AccountCircle, Logout, Settings, Person } from "@mui/icons-material";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Header() {
  const router = useRouter();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Mock user data - in a real app, this would come from authentication
  const user = {
    id: "1",
    name: "김민준",
    avatar: "/placeholder.svg?height=40&width=40",
  };

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleProfileClick = () => {
    router.push(`/profile/${user.id}`);
    handleClose();
  };

  return (
    <AppBar position="sticky" color="primary" elevation={0}>
      <Toolbar sx={{ maxWidth: "var(--max-width)", width: "100%", mx: "auto" }}>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <Link href="/sample14">토론 포럼</Link>
        </Typography>

        <Box>
          <IconButton
            size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            onClick={handleMenu}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
          <Menu
            id="menu-appbar"
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <Box
              sx={{
                px: 2,
                py: 1,
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
            >
              <Avatar src={user.avatar} alt={user.name} />
              <Typography variant="subtitle1">{user.name}</Typography>
            </Box>
            <Divider />
            <MenuItem onClick={handleProfileClick}>
              <ListItemIcon>
                <Person fontSize="small" />
              </ListItemIcon>
              프로필
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Settings fontSize="small" />
              </ListItemIcon>
              설정
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <ListItemIcon>
                <Logout fontSize="small" />
              </ListItemIcon>
              로그아웃
            </MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

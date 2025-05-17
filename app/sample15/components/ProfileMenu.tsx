"use client";

import React from "react";
import {
  IconButton,
  Menu,
  MenuItem,
  Avatar,
  Typography,
  Box,
} from "@mui/material";
import Link from "next/link";

const dummyUser = {
  nickname: "damso_user",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
};

export default function ProfileMenu() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) =>
    setAnchorEl(event.currentTarget);
  const handleClose = () => setAnchorEl(null);

  return (
    <>
      <IconButton onClick={handleClick} size="small" sx={{ ml: 1 }}>
        <Avatar
          src={dummyUser.image}
          alt={dummyUser.nickname}
          sx={{ width: 32, height: 32 }}
        />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        PaperProps={{ sx: { minWidth: 180 } }}
      >
        <Box
          sx={{ display: "flex", alignItems: "center", gap: 1, px: 2, py: 1 }}
        >
          <Avatar src={dummyUser.image} alt={dummyUser.nickname} />
          <Typography variant="subtitle1">{dummyUser.nickname}</Typography>
        </Box>
        <MenuItem component={Link} href="/sample15/profile">
          프로필 보기
        </MenuItem>
      </Menu>
    </>
  );
}

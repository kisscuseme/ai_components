"use client";

import { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Container,
  Box,
  IconButton,
  Menu,
  MenuItem,
  useMediaQuery,
  useTheme,
} from "@mui/material";

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

// 프로필 아이콘 SVG
const ProfileIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="12" cy="12" r="11" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
    <path
      d="M4 19.5C4 15.9101 7.58172 13 12 13C16.4183 13 20 15.9101 20 19.5"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

// Slack 로고 SVG
const SlackLogo = () => (
  <svg
    width="120"
    height="30"
    viewBox="0 0 120 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M55.0769 3H52V16.8H55.0769V3Z" fill="currentColor" />
    <path d="M63.1538 7.2H60.0769V16.8H63.1538V7.2Z" fill="currentColor" />
    <path d="M63.1538 3H60.0769V6H63.1538V3Z" fill="currentColor" />
    <path
      d="M71.2308 7.2H68.1538V8.4C67.3846 7.6 66.2308 7.2 64.6923 7.2C61.6154 7.2 59.3077 9.6 59.3077 12.6C59.3077 15.6 61.6154 18 64.6923 18C66.2308 18 67.3846 17.6 68.1538 16.8V18H71.2308V7.2ZM65.4615 15C63.9231 15 62.7692 14.0571 62.7692 12.6C62.7692 11.1429 63.9231 10.2 65.4615 10.2C67 10.2 68.1538 11.1429 68.1538 12.6C68.1538 14.0571 67 15 65.4615 15Z"
      fill="currentColor"
    />
    <path
      d="M80.0769 11.4C80.0769 9 78.5385 7.2 75.0769 7.2C71.6154 7.2 70.0769 9 70.0769 11.4C70.0769 13.8 71.6154 15.6 75.0769 15.6C78.5385 15.6 80.0769 13.8 80.0769 11.4ZM77 11.4C77 12.6 76.2308 13.2 75.0769 13.2C73.9231 13.2 73.1538 12.6 73.1538 11.4C73.1538 10.2 73.9231 9.6 75.0769 9.6C76.2308 9.6 77 10.2 77 11.4Z"
      fill="currentColor"
    />
    <path
      d="M89.6923 7.2H86.6154V8.4C85.8462 7.6 84.6923 7.2 83.1538 7.2C80.0769 7.2 77.7692 9.6 77.7692 12.6C77.7692 15.6 80.0769 18 83.1538 18C84.6923 18 85.8462 17.6 86.6154 16.8V18H89.6923V7.2ZM83.9231 15C82.3846 15 81.2308 14.0571 81.2308 12.6C81.2308 11.1429 82.3846 10.2 83.9231 10.2C85.4615 10.2 86.6154 11.1429 86.6154 12.6C86.6154 14.0571 85.4615 15 83.9231 15Z"
      fill="currentColor"
    />
    <path
      d="M98.5385 7.2H95.4615V8.4C94.6923 7.6 93.5385 7.2 92 7.2C88.9231 7.2 86.6154 9.6 86.6154 12.6C86.6154 15.6 88.9231 18 92 18C93.5385 18 94.6923 17.6 95.4615 16.8V18H98.5385V7.2ZM92.7692 15C91.2308 15 90.0769 14.0571 90.0769 12.6C90.0769 11.1429 91.2308 10.2 92.7692 10.2C94.3077 10.2 95.4615 11.1429 95.4615 12.6C95.4615 14.0571 94.3077 15 92.7692 15Z"
      fill="currentColor"
    />
    <path
      d="M107.385 7.2H104.308V8.4C103.538 7.6 102.385 7.2 100.846 7.2C97.7692 7.2 95.4615 9.6 95.4615 12.6C95.4615 15.6 97.7692 18 100.846 18C102.385 18 103.538 17.6 104.308 16.8V18H107.385V7.2ZM101.615 15C100.077 15 98.9231 14.0571 98.9231 12.6C98.9231 11.1429 100.077 10.2 101.615 10.2C103.154 10.2 104.308 11.1429 104.308 12.6C104.308 14.0571 103.154 15 101.615 15Z"
      fill="currentColor"
    />
    <path
      d="M116.231 7.2H113.154V8.4C112.385 7.6 111.231 7.2 109.692 7.2C106.615 7.2 104.308 9.6 104.308 12.6C104.308 15.6 106.615 18 109.692 18C111.231 18 112.385 17.6 113.154 16.8V18H116.231V7.2ZM110.462 15C108.923 15 107.769 14.0571 107.769 12.6C107.769 11.1429 108.923 10.2 110.462 10.2C112 10.2 113.154 11.1429 113.154 12.6C113.154 14.0571 112 15 110.462 15Z"
      fill="currentColor"
    />
    <path
      d="M10.5 21C9.11929 21 8 19.8807 8 18.5C8 17.1193 9.11929 16 10.5 16H13.5V19C13.5 20.1046 12.6046 21 11.5 21H10.5Z"
      fill="#E01E5A"
    />
    <path
      d="M10.5 8C9.11929 8 8 6.88071 8 5.5C8 4.11929 9.11929 3 10.5 3H18.5C19.8807 3 21 4.11929 21 5.5C21 6.88071 19.8807 8 18.5 8H10.5Z"
      fill="#36C5F0"
    />
    <path
      d="M23.5 18.5C23.5 19.8807 22.3807 21 21 21C19.6193 21 18.5 19.8807 18.5 18.5V10.5C18.5 9.11929 19.6193 8 21 8C22.3807 8 23.5 9.11929 23.5 10.5V18.5Z"
      fill="#2EB67D"
    />
    <path
      d="M36 18.5C36 19.8807 34.8807 21 33.5 21C32.1193 21 31 19.8807 31 18.5C31 17.1193 32.1193 16 33.5 16H36V18.5Z"
      fill="#ECB22E"
    />
    <path
      d="M23 18.5C23 19.8807 21.8807 21 20.5 21H13.5C12.1193 21 11 19.8807 11 18.5C11 17.1193 12.1193 16 13.5 16H20.5C21.8807 16 23 17.1193 23 18.5Z"
      fill="#ECB22E"
    />
    <path
      d="M33.5 8C34.8807 8 36 6.88071 36 5.5C36 4.11929 34.8807 3 33.5 3C32.1193 3 31 4.11929 31 5.5V8H33.5Z"
      fill="#E01E5A"
    />
    <path
      d="M33.5 13C34.8807 13 36 11.8807 36 10.5V5.5H33.5C32.1193 5.5 31 6.61929 31 8V10.5C31 11.8807 32.1193 13 33.5 13Z"
      fill="#36C5F0"
    />
    <path
      d="M13.5 3C12.1193 3 11 4.11929 11 5.5C11 6.88071 12.1193 8 13.5 8H16V5.5C16 4.11929 14.8807 3 13.5 3Z"
      fill="#2EB67D"
    />
  </svg>
);

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar
      position="static"
      color="transparent"
      elevation={0}
      sx={{
        borderBottom: "1px solid",
        borderColor: "divider",
        py: 1,
      }}
    >
      <Container maxWidth="lg">
        <Toolbar sx={{ justifyContent: "space-between", px: { xs: 0 } }}>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h6"
              component="div"
              sx={{
                mr: 2,
                display: "flex",
                alignItems: "center",
                color: "text.primary",
              }}
            >
              <SlackLogo />
              <Box component="span" sx={{ ml: 1, fontWeight: 700 }}>
                design
              </Box>
            </Typography>
          </Box>

          {isMobile ? (
            <>
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
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Articles</MenuItem>
                <MenuItem onClick={handleClose}>Our team</MenuItem>
              </Menu>
            </>
          ) : (
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Articles
              </Button>
              <Button
                color="inherit"
                sx={{
                  mr: 2,
                  fontWeight: 600,
                  "&:hover": {
                    backgroundColor: "transparent",
                    textDecoration: "underline",
                  },
                }}
              >
                Our team
              </Button>
              <IconButton color="inherit">
                <ProfileIcon />
              </IconButton>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

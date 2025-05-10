'use client';

import React from 'react';
import { AppBar, Toolbar, Container, Box, Button, Typography, useTheme, useMediaQuery } from '@mui/material';
import Link from 'next/link';

const Header = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const menuItems = [
    { name: '회사소개', href: '#' },
    { name: '프로젝트', href: '#' },
    { name: '서비스', href: '#' },
    { name: '뉴스', href: '#' },
    { name: '문의하기', href: '#' },
  ];

  return (
    <AppBar position="sticky" color="default" elevation={0} sx={{ bgcolor: 'black', color: 'white' }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography
            variant="h6"
            component="div"
            sx={{
              fontWeight: 'bold',
              fontSize: { xs: '1.2rem', md: '1.5rem' },
              color: 'white',
            }}
          >
            KISSCUSEME
          </Typography>

          {!isMobile && (
            <Box sx={{ display: 'flex', gap: 3 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.name}
                  component={Link}
                  href={item.href}
                  sx={{
                    color: 'white',
                    '&:hover': {
                      color: '#ddd',
                      backgroundColor: 'transparent',
                    },
                  }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
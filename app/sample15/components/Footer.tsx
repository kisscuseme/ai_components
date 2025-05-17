import React from "react";
import {
  Box,
  Container,
  Grid,
  Typography,
  Link as MuiLink,
  Divider,
} from "@mui/material";

const footerSections = [
  {
    title: "Damso",
    links: [
      { name: "홈", href: "/sample15" },
      { name: "토픽", href: "/sample15/topics" },
      { name: "스레드", href: "/sample15/threads" },
    ],
  },
  {
    title: "정책",
    links: [
      { name: "개인정보처리방침", href: "/sample15/policy/privacy" },
      { name: "이용약관", href: "/sample15/policy/terms" },
    ],
  },
];

export default function Footer() {
  return (
    <Box component="footer" sx={{ bgcolor: "background.paper", py: 6, mt: 8 }}>
      <Container maxWidth="xl">
        <Grid container spacing={4}>
          {footerSections.map((section) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={section.title}>
              <Typography variant="h6" fontWeight="bold" gutterBottom>
                {section.title}
              </Typography>
              <Box>
                {section.links.map((link) => (
                  <MuiLink
                    href={link.href}
                    key={link.name}
                    underline="hover"
                    color="text.secondary"
                    sx={{
                      display: "block",
                      mb: 1,
                      "&:hover": { color: "primary.main" },
                    }}
                  >
                    {link.name}
                  </MuiLink>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          © {new Date().getFullYear()} Damso. All rights reserved.
        </Typography>
      </Container>
    </Box>
  );
}

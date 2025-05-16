"use client";

import { Container } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#66bb6a",
      light: "#81c784",
      dark: "#43a047",
    },
    background: {
      default: "#f1f8e9",
      paper: "#ffffff",
    },
    text: {
      primary: "#2e7d32",
      secondary: "#558b2f",
    },
  },
  typography: {
    fontFamily: "'Noto Sans KR', sans-serif",
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
        },
      },
    },
  },
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg" sx={{ py: 3 }}>
        {children}
      </Container>
    </ThemeProvider>
  );
}

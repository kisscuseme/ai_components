"use client";

import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import Header from "./components/Header";

// 다크 테마 설정
const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ff9800",
    },
    secondary: {
      main: "#f44336",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
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
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          borderRadius: 8,
        },
      },
    },
  },
});

export default function SampleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Box
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          bgcolor: "background.default",
        }}
      >
        <Header />
        <Container maxWidth="lg" sx={{ mt: 3, mb: 5, flexGrow: 1 }}>
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}

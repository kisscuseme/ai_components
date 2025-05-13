"use client";

import {
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// 카카오 스타일 테마 생성
const theme = createTheme({
  palette: {
    primary: {
      main: "#FEE500", // 카카오 노란색
    },
    secondary: {
      main: "#000000", // 검은색
    },
    background: {
      default: "#FFFFFF",
      paper: "#F6F6F6",
    },
    text: {
      primary: "#000000",
      secondary: "#757575",
    },
  },
  typography: {
    fontFamily: inter.style.fontFamily,
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      marginBottom: "1rem",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      marginBottom: "0.75rem",
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
      marginBottom: "0.5rem",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderRadius: 8,
          fontWeight: 600,
        },
        containedPrimary: {
          color: "#000000",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none",
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
    <html lang="ko">
      <body className={inter.className}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}

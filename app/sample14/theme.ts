import { createTheme } from "@mui/material/styles"

// Create a custom theme with pastel green colors
const theme = createTheme({
  palette: {
    primary: {
      main: "#7FB77E", // Pastel green
      light: "#A7D7A6",
      dark: "#5A9359",
      contrastText: "#fff",
    },
    secondary: {
      main: "#B1D8B7", // Lighter pastel green
      light: "#D2EAD5",
      dark: "#8FB996",
      contrastText: "#333",
    },
    background: {
      default: "#F8FFF8",
      paper: "#FFFFFF",
    },
  },
  typography: {
    fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontWeight: 600,
    },
    h2: {
      fontWeight: 600,
    },
    h3: {
      fontWeight: 600,
    },
    h4: {
      fontWeight: 500,
    },
    h5: {
      fontWeight: 500,
    },
    h6: {
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          boxShadow: "0 4px 12px rgba(0, 0, 0, 0.05)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none",
          fontWeight: 500,
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 6,
        },
      },
    },
  },
})

export default theme

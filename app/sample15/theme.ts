export const lightPalette = {
  mode: "light" as const,
  primary: {
    main: "#7EC8E3",
    light: "#B3E5FC",
    dark: "#4BA3C7",
    contrastText: "#fff",
  },
  secondary: {
    main: "#5B7FA3",
    light: "#8FB3D3",
    dark: "#34506B",
    contrastText: "#fff",
  },
  background: {
    default: "#F4FAFF",
    paper: "#FFFFFF",
  },
  text: {
    primary: "#222",
    secondary: "#555",
  },
};

export const darkPalette = {
  mode: "dark" as const,
  primary: {
    main: "#7EC8E3",
    light: "#B3E5FC",
    dark: "#4BA3C7",
    contrastText: "#222",
  },
  secondary: {
    main: "#5B7FA3",
    light: "#8FB3D3",
    dark: "#34506B",
    contrastText: "#fff",
  },
  background: {
    default: "#181C20",
    paper: "#23272F",
  },
  text: {
    primary: "#F4FAFF",
    secondary: "#B3E5FC",
  },
};

export const baseThemeOptions = {
  typography: {
    fontFamily: '"Pretendard", "Roboto", "Helvetica", "Arial", sans-serif',
    h1: { fontWeight: 700 },
    h2: { fontWeight: 600 },
    h3: { fontWeight: 600 },
    h4: { fontWeight: 500 },
    h5: { fontWeight: 500 },
    h6: { fontWeight: 500 },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          borderRadius: 14,
          boxShadow: "0 4px 16px rgba(126,200,227,0.08)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          textTransform: "none" as const,
          fontWeight: 500,
        },
      },
    },
  },
};

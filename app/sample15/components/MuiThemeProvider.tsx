"use client";

import * as React from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { lightPalette, darkPalette, baseThemeOptions } from "../theme";

const ThemeModeContext = React.createContext({
  mode: "light",
  toggleMode: () => {},
});

export function useThemeMode() {
  return React.useContext(ThemeModeContext);
}

function getThemeWithMode(mode: "light" | "dark") {
  const palette = mode === "dark" ? darkPalette : lightPalette;
  return createTheme({ ...baseThemeOptions, palette });
}

export default function MuiThemeProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const toggleMode = () =>
    setMode((prev) => (prev === "light" ? "dark" : "light"));
  const theme = React.useMemo(() => getThemeWithMode(mode), [mode]);
  return (
    <ThemeModeContext.Provider value={{ mode, toggleMode }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeModeContext.Provider>
  );
}

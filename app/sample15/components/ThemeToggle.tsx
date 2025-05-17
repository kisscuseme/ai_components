"use client";

import React from "react";
import { IconButton, Tooltip } from "@mui/material";
import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import { useThemeMode } from "./MuiThemeProvider";

export default function ThemeToggle() {
  const { mode, toggleMode } = useThemeMode();
  return (
    <Tooltip title={mode === "light" ? "다크 모드" : "라이트 모드"}>
      <IconButton color="primary" onClick={toggleMode} aria-label="테마 변경">
        {mode === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </Tooltip>
  );
}

"use client";

import React from "react";
import { useTheme } from "@mui/material/styles";

export default function BodyWithBg({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useTheme();
  return (
    <body
      style={{
        backgroundColor: theme.palette.background.default,
        color: theme.palette.text.primary,
        minHeight: "100vh",
      }}
    >
      {children}
    </body>
  );
}

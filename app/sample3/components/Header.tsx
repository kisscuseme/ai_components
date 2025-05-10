import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export default function Header() {
  return (
    <AppBar position="static" color="transparent" elevation={0} sx={{ borderBottom: "1px solid #222", bgcolor: "#111" }}>
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight={700} color="#fff">
          KISSCUSEME
        </Typography>
        <Box>
          <Typography variant="body2" color="#bbb" sx={{ mx: 2, display: { xs: "none", md: "inline" } }}>Portfolio</Typography>
          <Typography variant="body2" color="#bbb" sx={{ mx: 2, display: { xs: "none", md: "inline" } }}>About</Typography>
          <Typography variant="body2" color="#bbb" sx={{ mx: 2, display: { xs: "none", md: "inline" } }}>News</Typography>
          <Typography variant="body2" color="#bbb" sx={{ mx: 2, display: { xs: "none", md: "inline" } }}>Contact</Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function HeroSection() {
  return (
    <Box sx={{
      width: "100%",
      minHeight: 400,
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-start",
      justifyContent: "center",
      bgcolor: "#181818",
      px: { xs: 2, md: 8 },
      py: { xs: 6, md: 10 },
      borderBottom: "1px solid #222"
    }}>
      <Typography variant="h3" fontWeight={700} color="#fff" gutterBottom>
        WE CREATE THE PERFECT
      </Typography>
      <Typography variant="h3" fontWeight={700} color="#c9a86a" gutterBottom sx={{ mb: 4 }}>
        REAL ESTATE MARKET
      </Typography>
      <Typography variant="subtitle1" color="#bbb" sx={{ mb: 3 }}>
        AI, FUNDING, CONSULTING, THE PERFECT SALES
      </Typography>
      <Box component="img" src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=900&q=80" alt="hero" sx={{ width: "100%", borderRadius: 2, mt: 2, boxShadow: 3 }} />
    </Box>
  );
}
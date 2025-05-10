import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";

const projects = [
  {
    title: "프로젝트 1",
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "프로젝트 2",
    image: "https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "프로젝트 3",
    image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "프로젝트 4",
    image: "https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "프로젝트 5",
    image: "https://images.unsplash.com/photo-1572177812156-58036aae439c?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "프로젝트 6",
    image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
  },
];

export default function ProjectsSection() {
  return (
    <Box sx={{ bgcolor: "#181818", py: 8, borderBottom: "1px solid #222" }}>
      <Typography variant="h4" fontWeight={700} color="#fff" sx={{ mb: 4, px: { xs: 2, md: 8 } }}>
        프로젝트 포트폴리오
      </Typography>
      <Grid container spacing={3} sx={{ px: { xs: 2, md: 8 } }}>
        {projects.map((project, idx) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
            <Box sx={{ bgcolor: "#222", borderRadius: 2, overflow: "hidden", boxShadow: 2 }}>
              <Box component="img" src={project.image} alt={project.title} sx={{ width: "100%", height: 180, objectFit: "cover" }} />
              <Typography variant="subtitle1" color="#fff" sx={{ p: 2, fontWeight: 600 }}>
                {project.title}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
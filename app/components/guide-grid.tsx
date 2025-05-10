"use client";
import * as React from "react";
import Grid from "@mui/material/Grid";
import GuideCard, { Guide } from "./guide-card";

interface GuideGridProps {
  guides: Guide[];
}

const GuideGrid: React.FC<GuideGridProps> = ({ guides }) => (
  <Grid container spacing={3}>
    {guides.map((guide) => (
      <Grid size={{ xs: 12, sm: 6, md: 4 }} key={guide.id}>
        <GuideCard guide={guide} />
      </Grid>
    ))}
  </Grid>
);

export default GuideGrid;

"use client";

import React from "react";
import { Card, CardContent, Typography, Box, Chip, Grid } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { topics } from "../data/dummyData";

export default function TopicList({ type }: { type: "popular" | "latest" }) {
  // 더미 데이터 분리
  const topicData =
    type === "popular" ? topics.slice(0, 3) : topics.slice(1, 4);
  const router = useRouter();
  return (
    <Grid container spacing={3} justifyContent="flex-start">
      {topicData.map((topic) => (
        <Grid size={{ xs: 12, sm: 6, md: 4 }} key={topic.id}>
          <Card
            sx={{
              bgcolor: "background.paper",
              borderLeft: 4,
              borderColor: "primary.main",
              cursor: "pointer",
              transition: "box-shadow .2s",
              "&:hover": { boxShadow: 6 },
            }}
            onClick={() => router.push(`/sample15/threads?topicId=${topic.id}`)}
            component="div"
          >
            <CardContent>
              <Typography variant="h6" fontWeight={600} color="primary">
                {topic.title}
              </Typography>
              <Box sx={{ mt: 1, display: "flex", gap: 1, flexWrap: "wrap" }}>
                {topic.subtopics?.map((sub, idx) => (
                  <Chip
                    key={idx}
                    label={sub.title}
                    size="small"
                    color="secondary"
                  />
                ))}
              </Box>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

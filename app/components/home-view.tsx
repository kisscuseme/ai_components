"use client";

import { Button, Stack, Typography } from "@mui/material";

export const HomeView = () => {
  return (
    <Stack sx={{ overflowY: "scroll", p: 2 }}>
      <Typography
        variant="h1"
        color="common.white"
        sx={{ fontSize: "40px", fontWeight: 600, mx: "auto", p: 4 }}
      >
        AI 생성 템플릿
      </Typography>
      <Stack width={0.5} mx="auto" gap={0.5}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((i) => {
          return (
            <Button
              key={i}
              fullWidth
              size="large"
              variant="outlined"
              color="inherit"
              sx={{
                fontSize: "20px",
                color: "common.white",
                ":hover": {
                  opacity: 0.7,
                },
              }}
              onClick={() => {
                location.href = `/sample${i}`;
              }}
            >
              {`Sample${i}`}
            </Button>
          );
        })}
      </Stack>
    </Stack>
  );
};

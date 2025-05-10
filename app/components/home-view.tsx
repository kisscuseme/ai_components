"use client";

import { Button, Stack, Typography } from "@mui/material";

export const HomeView = () => {
  return (
    <Stack sx={{ backgroundColor: "common.black", height: "100vh", width: "100vw", overflow: "hidden" }}>
      <Typography variant="h1" color="success.light" sx={{ fontSize: "40px", fontWeight: 600, mx: "auto", p: 4 }}>
        AI 생성 컴포넌트 샘플
      </Typography>
      <Stack gap={2} width={0.5} mx="auto">
        <Button size="large" variant="outlined" color="success" sx={{ fontSize: "30px" }} onClick={() => {
          location.href = "/sample1";
        }}>Sample1</Button>
        <Button size="large" variant="outlined" color="success" sx={{ fontSize: "30px" }} onClick={() => {
          location.href = "/sample2";
        }}>Sample2</Button>
        <Button size="large" variant="outlined" color="success" sx={{ fontSize: "30px" }} onClick={() => {
          location.href = "/sample3";
        }}>Sample3</Button>
        <Button size="large" variant="outlined" color="success" sx={{ fontSize: "30px" }} onClick={() => {
          location.href = "/sample4";
        }}>Sample4</Button>
      </Stack>
    </Stack>
  );
}
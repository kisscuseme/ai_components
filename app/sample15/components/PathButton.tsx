"use client";

import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useRouter } from "next/navigation";

export default function PathButton() {
  const router = useRouter();
  return (
    <Button
      variant="contained"
      color="primary"
      startIcon={<AddIcon />}
      onClick={() => router.push("/sample15/topics/new")}
      sx={{ borderRadius: 6, fontWeight: 600 }}
    >
      새 토픽 만들기
    </Button>
  );
}

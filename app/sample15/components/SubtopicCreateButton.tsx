import React from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

export default function SubtopicCreateButton() {
  return (
    <Button
      variant="outlined"
      color="primary"
      startIcon={<AddIcon />}
      sx={{ borderRadius: 6, fontWeight: 600 }}
    >
      서브토픽 추가
    </Button>
  );
}

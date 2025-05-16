"use client";

import { useState } from "react";
import { Box, TextField, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

interface MessageFormProps {
  onSubmit: (content: string) => void;
}

const MessageForm = ({ onSubmit }: MessageFormProps) => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSubmit(message);
      setMessage("");
    }
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        gap: 1,
        p: 2,
        bgcolor: "#f1f8e9",
        borderTop: "1px solid #c8e6c9",
        position: "sticky",
        bottom: 0,
        zIndex: 1,
      }}
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        placeholder="메시지를 입력하세요"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{
          "& .MuiOutlinedInput-root": {
            bgcolor: "#ffffff",
            borderRadius: 2,
            "&.Mui-focused fieldset": {
              borderColor: "#66bb6a",
              borderWidth: 2,
            },
          },
        }}
      />
      <IconButton
        type="submit"
        disabled={!message.trim()}
        sx={{
          bgcolor: "#66bb6a",
          color: "white",
          "&:hover": {
            bgcolor: "#43a047",
          },
          "&.Mui-disabled": {
            bgcolor: "#c8e6c9",
            color: "#81c784",
          },
        }}
      >
        <SendIcon />
      </IconButton>
    </Box>
  );
};

export default MessageForm;

"use client"

import type React from "react"

import { useState } from "react"
import { TextField, Button, Paper } from "@mui/material"
import { Send } from "@mui/icons-material"

interface MessageInputProps {
  discussionId: string
}

export default function MessageInput({ discussionId }: MessageInputProps) {
  const [message, setMessage] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (message.trim()) {
      // In a real app, this would send the message to the server
      console.log("Sending message:", message, "to discussion:", discussionId)
      setMessage("")
    }
  }

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      elevation={0}
      sx={{
        p: 2,
        display: "flex",
        alignItems: "center",
        gap: 1,
        border: 1,
        borderColor: "divider",
        borderRadius: 3,
      }}
    >
      <TextField
        fullWidth
        multiline
        maxRows={4}
        placeholder="메시지를 입력하세요..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        variant="outlined"
        sx={{
          "& .MuiOutlinedInput-root": {
            borderRadius: 2,
            "& fieldset": {
              borderColor: "transparent",
            },
            "&:hover fieldset": {
              borderColor: "transparent",
            },
            "&.Mui-focused fieldset": {
              borderColor: "transparent",
            },
          },
        }}
      />
      <Button
        type="submit"
        variant="contained"
        color="primary"
        disabled={!message.trim()}
        sx={{ borderRadius: "50%", minWidth: 0, width: 48, height: 48 }}
      >
        <Send />
      </Button>
    </Paper>
  )
}

"use client";

import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Paper,
  TextField,
  Button,
  Avatar,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import {
  getDiscussionById,
  getMessagesByDiscussionId,
  getUserById,
  messages,
} from "../../data/dummyData";

const DiscussionPage = () => {
  const params = useParams();
  const discussionId = Number(params.id);
  const [newMessage, setNewMessage] = useState("");
  const [discussionMessages, setDiscussionMessages] = useState(
    getMessagesByDiscussionId(discussionId)
  );
  const discussion = getDiscussionById(discussionId);

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return;

    // 새 메시지 생성 (실제로는 API 호출이 필요)
    const newMessageObj = {
      id: messages.length + 1,
      discussionId,
      authorId: 1, // 현재 사용자 ID (고정)
      content: newMessage,
      createdAt: new Date().toISOString(),
    };

    // 메시지 목록 업데이트
    setDiscussionMessages([...discussionMessages, newMessageObj]);
    setNewMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!discussion) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" align="center">
          토론을 찾을 수 없습니다.
        </Typography>
      </Container>
    );
  }

  return (
    <Container
      maxWidth="md"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 150px)",
        background:
          "linear-gradient(180deg, rgba(232, 245, 233, 0.2) 0%, rgba(232, 245, 233, 0.8) 100%)",
        borderRadius: 4,
      }}
    >
      <Paper
        elevation={0}
        sx={{
          p: 3,
          mb: 2,
          borderRadius: 2,
          bgcolor: "#e8f5e9",
          border: "1px solid #81c784",
          boxShadow: "0 4px 6px rgba(129, 199, 132, 0.2)",
        }}
      >
        <Typography
          variant="h5"
          component="h1"
          gutterBottom
          sx={{ color: "#2e7d32", fontWeight: 600 }}
        >
          {discussion.title}
        </Typography>
        <Typography variant="body2" color="#558b2f">
          작성일: {discussion.createdAt} | 메시지: {discussionMessages.length}개
        </Typography>
      </Paper>
      <Paper
        elevation={1}
        sx={{
          p: 2,
          flexGrow: 1,
          mb: 2,
          borderRadius: 2,
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          gap: 2,
          bgcolor: "#f1f8e9",
          backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100"><path d="M20,50 L50,20 L80,50 L50,80 Z" fill="none" stroke="%23c8e6c9" stroke-width="1"/></svg>')`,
          backgroundSize: "30px 30px",
        }}
      >
        {discussionMessages.map((message) => {
          const user = getUserById(message.authorId);
          const isCurrentUser = message.authorId === 1; // 현재 사용자 ID (고정)

          return (
            <Box
              key={message.id}
              sx={{
                display: "flex",
                flexDirection: isCurrentUser ? "row-reverse" : "row",
                alignItems: "flex-start",
                gap: 1,
              }}
            >
              <Avatar src={user?.avatar} alt={user?.name} />
              <Box
                sx={{
                  maxWidth: "70%",
                  p: 2,
                  borderRadius: 2,
                  bgcolor: isCurrentUser ? "#a5d6a7" : "#e8f5e9",
                  color: isCurrentUser ? "#1b5e20" : "#2e7d32",
                  border: isCurrentUser
                    ? "1px solid #81c784"
                    : "1px solid #c8e6c9",
                  boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                  position: "relative",
                  "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 10,
                    [isCurrentUser ? "right" : "left"]: -10,
                    width: 0,
                    height: 0,
                    borderStyle: "solid",
                    borderWidth: isCurrentUser
                      ? "10px 10px 0 0"
                      : "10px 0 0 10px",
                    borderColor: isCurrentUser
                      ? "transparent #a5d6a7 transparent transparent"
                      : "transparent transparent transparent #e8f5e9",
                  },
                }}
              >
                <Typography variant="subtitle2">{user?.name}</Typography>
                <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
                  {message.content}
                </Typography>
                <Typography
                  variant="caption"
                  sx={{
                    display: "block",
                    mt: 1,
                    textAlign: isCurrentUser ? "left" : "right",
                  }}
                >
                  {new Date(message.createdAt).toLocaleTimeString([], {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </Typography>
              </Box>
            </Box>
          );
        })}
      </Paper>

      <Paper
        elevation={1}
        component="form"
        sx={{
          p: 2,
          borderRadius: 2,
          display: "flex",
          alignItems: "center",
          gap: 1,
          bgcolor: "#e8f5e9",
          border: "1px solid #81c784",
          boxShadow: "0 4px 6px rgba(129, 199, 132, 0.2)",
        }}
        onSubmit={(e) => {
          e.preventDefault();
          handleSendMessage();
        }}
      >
        <TextField
          fullWidth
          multiline
          maxRows={4}
          placeholder="메시지를 입력하세요..."
          variant="outlined"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={handleKeyPress}
          sx={{
            "& .MuiOutlinedInput-root": {
              borderRadius: 2,
              bgcolor: "white",
              "&.Mui-focused fieldset": {
                borderColor: "#66bb6a",
              },
            },
          }}
        />
        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={handleSendMessage}
          disabled={newMessage.trim() === ""}
          sx={{
            borderRadius: 2,
            px: 3,
            py: 1.5,
            bgcolor: "#66bb6a",
            "&:hover": {
              bgcolor: "#43a047",
            },
          }}
        >
          전송
        </Button>
      </Paper>
    </Container>
  );
};

export default DiscussionPage;

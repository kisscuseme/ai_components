"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  IconButton,
  Avatar,
  Divider,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import {
  getDiscussionById,
  getMessagesByDiscussionId,
  getUserById,
  Message,
  User,
} from "../../data/dummyData";
import MessageBubble from "../../components/MessageBubble";
import MessageForm from "../../components/MessageForm";
import { useRouter } from "next/navigation";

export default function DiscussionPage() {
  const params = useParams();
  const router = useRouter();
  const discussionId = Number(params.id);
  const discussion = getDiscussionById(discussionId);
  const [messages, setMessages] = useState<Message[]>([]);
  const [currentUser] = useState<User | undefined>(() => getUserById(1));

  useEffect(() => {
    if (discussionId) {
      const discussionMessages = getMessagesByDiscussionId(discussionId);
      setMessages(discussionMessages);
    }
  }, [discussionId]);

  const handleSubmit = (content: string) => {
    if (!currentUser) return;

    const newMessage: Message = {
      id: messages.length + 1,
      discussionId,
      authorId: currentUser.id,
      content,
      createdAt: new Date().toISOString(),
    };

    setMessages((prev) => [...prev, newMessage]);
  };

  if (!discussion) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>토론을 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  const author = getUserById(discussion.authorId);

  return (
    <Container
      maxWidth="lg"
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        height: "calc(100vh - 48px)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <IconButton
          onClick={() => router.push("/sample13")}
          sx={{
            color: "#2e7d32",
            bgcolor: "#f1f8e9",
            "&:hover": {
              bgcolor: "#e8f5e9",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ flex: 1 }}>
          <Typography
            variant="h5"
            component="h1"
            sx={{ color: "#2e7d32", fontWeight: 600 }}
          >
            {discussion.title}
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mt: 1 }}>
            <Avatar
              src={author?.avatar}
              alt={author?.name}
              sx={{ width: 24, height: 24 }}
            />
            <Typography variant="body2" sx={{ color: "#558b2f" }}>
              {author?.name}
            </Typography>
            <Typography variant="body2" sx={{ color: "#558b2f" }}>
              · {discussion.createdAt}
            </Typography>
          </Box>
        </Box>
      </Box>
      <Divider sx={{ borderColor: "#c8e6c9", mb: 3 }} />
      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          px: 2,
          mb: 2,
          "&::-webkit-scrollbar": {
            width: 8,
          },
          "&::-webkit-scrollbar-track": {
            bgcolor: "#f1f8e9",
            borderRadius: 4,
          },
          "&::-webkit-scrollbar-thumb": {
            bgcolor: "#81c784",
            borderRadius: 4,
            "&:hover": {
              bgcolor: "#66bb6a",
            },
          },
        }}
      >
        {messages.map((message) => {
          const messageAuthor = getUserById(message.authorId);
          if (!messageAuthor) return null;

          return (
            <MessageBubble
              key={message.id}
              content={message.content}
              createdAt={message.createdAt}
              author={messageAuthor}
              isCurrentUser={messageAuthor.id === currentUser?.id}
            />
          );
        })}
      </Box>
      <MessageForm onSubmit={handleSubmit} />
    </Container>
  );
}

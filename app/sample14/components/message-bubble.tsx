import { Message } from "@/app/sample14/types";
import { Box, Typography, Avatar, Paper } from "@mui/material";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";

interface MessageBubbleProps {
  message: Message;
  isAuthor: boolean; // Whether the message is from the current user
}

export default function MessageBubble({
  message,
  isAuthor,
}: MessageBubbleProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isAuthor ? "row" : "row-reverse",
        alignItems: "flex-start",
        gap: 1.5,
      }}
    >
      <Avatar
        src={message.author.avatar}
        alt={message.author.name}
        sx={{ width: 40, height: 40 }}
      />

      <Box
        sx={{
          maxWidth: "70%",
          display: "flex",
          flexDirection: "column",
          alignItems: isAuthor ? "flex-start" : "flex-end",
        }}
      >
        <Typography
          variant="caption"
          color="text.secondary"
          sx={{ mb: 0.5, ml: isAuthor ? 1.5 : 0, mr: isAuthor ? 0 : 1.5 }}
        >
          {message.author.name} •{" "}
          {formatDistanceToNow(new Date(message.createdAt), {
            addSuffix: true,
            locale: ko,
          })}
        </Typography>

        <Paper
          elevation={0}
          sx={{
            p: 2,
            borderRadius: 3,
            bgcolor: isAuthor ? "primary.light" : "grey.100",
            color: isAuthor ? "primary.contrastText" : "text.primary",
            position: "relative",
            "&::after": {
              content: '""',
              position: "absolute",
              top: 10,
              [isAuthor ? "left" : "right"]: -8,
              width: 0,
              height: 0,
              borderTop: "8px solid transparent",
              borderBottom: "8px solid transparent",
              [isAuthor ? "borderRight" : "borderLeft"]: `8px solid ${
                isAuthor ? "primary.light" : "grey.100"
              }`,
              transform: isAuthor ? "rotate(180deg)" : "none",
            },
          }}
        >
          <Typography variant="body1">{message.content}</Typography>
        </Paper>
      </Box>
    </Box>
  );
}

"use client";

import { Box, Typography, Avatar } from "@mui/material";
import { User } from "../data/dummyData";

interface MessageBubbleProps {
  content: string;
  createdAt: string;
  author: User;
  isCurrentUser?: boolean;
}

const MessageBubble = ({
  content,
  createdAt,
  author,
  isCurrentUser = false,
}: MessageBubbleProps) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isCurrentUser ? "row-reverse" : "row",
        alignItems: "flex-start",
        gap: 1.5,
        mb: 2,
      }}
    >
      <Avatar
        src={author.avatar}
        alt={author.name}
        sx={{
          width: 36,
          height: 36,
          border: "2px solid #81c784",
        }}
      />
      <Box sx={{ maxWidth: "70%" }}>
        {!isCurrentUser && (
          <Typography
            variant="subtitle2"
            sx={{ color: "#2e7d32", mb: 0.5, fontWeight: 500 }}
          >
            {author.name}
          </Typography>
        )}
        <Box
          sx={{
            display: "flex",
            flexDirection: isCurrentUser ? "row-reverse" : "row",
            alignItems: "flex-end",
            gap: 1,
          }}
        >
          <Box
            sx={{
              bgcolor: isCurrentUser ? "#81c784" : "#ffffff",
              color: isCurrentUser ? "#ffffff" : "#2e7d32",
              p: 1.5,
              borderRadius: 2,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              border: isCurrentUser ? "none" : "1px solid #c8e6c9",
              position: "relative",
              "&::before": {
                content: '""',
                position: "absolute",
                top: 10,
                [isCurrentUser ? "right" : "left"]: -6,
                width: 0,
                height: 0,
                borderStyle: "solid",
                borderWidth: isCurrentUser ? "6px 0 6px 6px" : "6px 6px 6px 0",
                borderColor: isCurrentUser
                  ? `transparent transparent transparent #81c784`
                  : `transparent #ffffff transparent transparent`,
              },
            }}
          >
            <Typography variant="body1" sx={{ whiteSpace: "pre-wrap" }}>
              {content}
            </Typography>
          </Box>
          <Typography
            variant="caption"
            sx={{ color: "#558b2f", whiteSpace: "nowrap" }}
          >
            {new Date(createdAt).toLocaleTimeString("ko-KR", {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default MessageBubble;

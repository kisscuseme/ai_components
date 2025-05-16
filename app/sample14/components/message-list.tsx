import { Box } from "@mui/material";
import MessageBubble from "./message-bubble";
import { Discussion } from "@/app/sample14/types";

interface MessageListProps {
  discussion: Discussion;
}

export default function MessageList({ discussion }: MessageListProps) {
  // Combine the initial post and replies into a single array of messages
  const messages = [
    {
      id: "initial",
      content: discussion.content,
      author: discussion.author,
      createdAt: discussion.createdAt,
    },
    ...discussion.replies,
  ];

  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
      {messages.map((message, index) => (
        <MessageBubble
          key={message.id}
          message={message}
          isAuthor={index % 2 === 0} // Alternate between left and right
        />
      ))}
    </Box>
  );
}

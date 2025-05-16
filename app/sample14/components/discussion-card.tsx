"use client";

import {
  Card,
  CardContent,
  Typography,
  Box,
  Avatar,
  Chip,
} from "@mui/material";
import { ChatBubbleOutline, AccessTime } from "@mui/icons-material";
import { formatDistanceToNow } from "date-fns";
import { ko } from "date-fns/locale";
import Link from "next/link";
import { Discussion } from "@/app/sample14/types";

interface DiscussionCardProps {
  discussion: Discussion;
}

export default function DiscussionCard({ discussion }: DiscussionCardProps) {
  return (
    <Link href={`/sample14/discussion/${discussion.id}`} passHref>
      <Card
        sx={{
          cursor: "pointer",
          transition: "transform 0.2s, box-shadow 0.2s",
          "&:hover": {
            transform: "translateY(-2px)",
            boxShadow: "0 8px 16px rgba(0, 0, 0, 0.1)",
          },
        }}
      >
        <CardContent>
          <Typography variant="h6" component="h3" gutterBottom>
            {discussion.title}
          </Typography>

          <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
            <Avatar
              src={discussion.author.avatar}
              alt={discussion.author.name}
              sx={{ width: 24, height: 24, mr: 1 }}
            />
            <Typography variant="body2" color="text.secondary">
              {discussion.author.name}
            </Typography>
          </Box>

          <Typography
            variant="body2"
            color="text.secondary"
            sx={{
              mb: 2,
              display: "-webkit-box",
              overflow: "hidden",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 2,
            }}
          >
            {discussion.content}
          </Typography>

          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Chip
                icon={<ChatBubbleOutline fontSize="small" />}
                label={`댓글 ${discussion.replies.length}개`}
                size="small"
                variant="outlined"
              />

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  color: "text.secondary",
                }}
              >
                <AccessTime fontSize="small" sx={{ mr: 0.5 }} />
                <Typography variant="caption">
                  {formatDistanceToNow(new Date(discussion.createdAt), {
                    addSuffix: true,
                    locale: ko,
                  })}
                </Typography>
              </Box>
            </Box>

            {discussion.tags && discussion.tags.length > 0 && (
              <Chip label={discussion.tags[0]} size="small" color="secondary" />
            )}
          </Box>
        </CardContent>
      </Card>
    </Link>
  );
}

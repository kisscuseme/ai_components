import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Box,
  IconButton,
  Chip,
} from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CommentIcon from "@mui/icons-material/Comment";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";

export default function ThreadCard({ thread }: { thread: any }) {
  const [expanded, setExpanded] = React.useState(false);
  const isLong = thread.content.length > 30;
  return (
    <Card
      sx={{
        bgcolor: "background.paper",
        borderLeft: 4,
        borderColor: "primary.main",
      }}
    >
      <CardContent>
        <Typography variant="h6" fontWeight={600} color="primary">
          {thread.title}
        </Typography>
        <Box sx={{ mt: 1, mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {isLong && !expanded
              ? thread.content.slice(0, 30) + "..."
              : thread.content}
          </Typography>
          {isLong && (
            <IconButton size="small" onClick={() => setExpanded((e) => !e)}>
              {expanded ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          )}
        </Box>
        <Box sx={{ display: "flex", gap: 2 }}>
          <Chip
            icon={<FavoriteIcon color="error" />}
            label={thread.likes}
            size="small"
          />
          <Chip
            icon={<CommentIcon color="primary" />}
            label={thread.comments}
            size="small"
          />
        </Box>
      </CardContent>
    </Card>
  );
}

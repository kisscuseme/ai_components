import { Box, Typography } from "@mui/material";
import DiscussionCard from "./discussion-card";
import { Discussion } from "@/app/sample14/types";

interface DiscussionListProps {
  title: string;
  discussions: Discussion[];
}

export default function DiscussionList({
  title,
  discussions,
}: DiscussionListProps) {
  return (
    <Box>
      <Typography variant="h5" component="h2" sx={{ mb: 2, fontWeight: 600 }}>
        {title}
      </Typography>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        {discussions.map((discussion) => (
          <DiscussionCard key={discussion.id} discussion={discussion} />
        ))}
      </Box>
    </Box>
  );
}

import MessageInput from "@/app/sample14/components/message-input";
import MessageList from "@/app/sample14/components/message-list";
import { mockDiscussions } from "@/app/sample14/data/mock-data";
import { Box, Container, Typography, Divider, Paper } from "@mui/material";
import { notFound } from "next/navigation";

interface DiscussionPageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function DiscussionPage({ params }: DiscussionPageProps) {
  const { id } = await params;
  const discussion = mockDiscussions.find((d) => d.id === id);

  if (!discussion) {
    notFound();
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{ p: 3, border: 1, borderColor: "divider", borderRadius: 2 }}
      >
        <Typography variant="h4" component="h1" gutterBottom>
          {discussion.title}
        </Typography>

        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
          <Typography variant="body2" color="text.secondary">
            {discussion.author.name}님이 시작 •{" "}
            {new Date(discussion.createdAt).toLocaleDateString("ko-KR")}
          </Typography>
        </Box>

        <Divider sx={{ my: 2 }} />

        <Box sx={{ mb: 2 }}>
          <MessageList discussion={discussion} />
        </Box>

        <MessageInput discussionId={discussion.id} />
      </Paper>
    </Container>
  );
}

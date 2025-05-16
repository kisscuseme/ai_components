import DiscussionList from "@/app/sample14/components/discussion-list";
import { mockDiscussions, mockUsers } from "@/app/sample14/data/mock-data";
import { Message } from "@/app/sample14/types";
import {
  Container,
  Paper,
  Box,
  Typography,
  Avatar,
  Grid,
  Chip,
} from "@mui/material";
import { notFound } from "next/navigation";

interface ProfilePageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ProfilePage({ params }: ProfilePageProps) {
  const { id } = await params;
  const user = mockUsers.find((u) => u.id === id);

  if (!user) {
    notFound();
  }

  // Get discussions started by this user
  const userDiscussions = mockDiscussions.filter(
    (d) => d.author.id === user.id
  );

  // Get discussions where the user has replied
  const participatedDiscussions = mockDiscussions.filter((d) =>
    d.replies.some((r: Message) => r.author.id === user.id)
  );

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Paper
        elevation={0}
        sx={{ p: 3, border: 1, borderColor: "divider", borderRadius: 2, mb: 4 }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 3, mb: 3 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 100, height: 100 }}
          />

          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.name}
            </Typography>

            <Box sx={{ display: "flex", gap: 2 }}>
              <Chip
                label={`게시물 ${user.posts}개`}
                color="primary"
                variant="outlined"
              />
              <Chip
                label={`댓글 ${user.replies}개`}
                color="secondary"
                variant="outlined"
              />
              <Chip
                label={`가입일: ${new Date(user.joinedAt).toLocaleDateString(
                  "ko-KR"
                )}`}
                variant="outlined"
              />
            </Box>
          </Box>
        </Box>

        <Typography variant="body1">
          {user.bio || "소개가 없습니다."}
        </Typography>
      </Paper>

      <Grid container spacing={4}>
        {userDiscussions.length > 0 && (
          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              시작한 토론
            </Typography>
            <DiscussionList title="" discussions={userDiscussions} />
          </Grid>
        )}

        {participatedDiscussions.length > 0 && (
          <Grid size={{ xs: 12 }}>
            <Typography variant="h5" component="h2" sx={{ mb: 2 }}>
              참여한 토론
            </Typography>
            <DiscussionList title="" discussions={participatedDiscussions} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

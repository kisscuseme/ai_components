import DiscussionList from "@/app/sample14/components/discussion-list";
import UserList from "@/app/sample14/components/user-list";
import { mockDiscussions } from "@/app/sample14/data/mock-data";
import { Box, Container, Grid } from "@mui/material";

export default function Home() {
  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 3 }}>
          <UserList />
        </Grid>
        <Grid size={{ xs: 12, md: 9 }}>
          <Box sx={{ mb: 3 }}>
            <DiscussionList
              title="최신 토론"
              discussions={mockDiscussions
                .sort(
                  (a, b) =>
                    new Date(b.createdAt).getTime() -
                    new Date(a.createdAt).getTime()
                )
                .slice(0, 5)}
            />
          </Box>
          <Box>
            <DiscussionList
              title="인기 토론"
              discussions={mockDiscussions
                .sort((a, b) => b.replies.length - a.replies.length)
                .slice(0, 5)}
            />
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

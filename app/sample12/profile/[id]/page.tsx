"use client";

import { useParams } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Paper,
  Avatar,
  Divider,
  Grid,
  Card,
  CardContent,
} from "@mui/material";
import {
  getUserById,
  getDiscussionById,
  discussions,
} from "../../data/dummyData";

const ProfilePage = () => {
  const params = useParams();
  const userId = Number(params.id);
  const user = getUserById(userId);

  // 사용자가 참여한 토론 목록
  const userDiscussions = discussions.filter(
    (discussion) => discussion.authorId === userId
  );

  if (!user) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Typography variant="h5" component="h1" align="center">
          사용자를 찾을 수 없습니다.
        </Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Paper elevation={1} sx={{ p: 4, borderRadius: 2, mb: 4 }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: 3 }}>
          <Avatar
            src={user.avatar}
            alt={user.name}
            sx={{ width: 100, height: 100 }}
          />
          <Box>
            <Typography variant="h4" component="h1" gutterBottom>
              {user.name}
            </Typography>
            <Typography variant="body1" color="text.secondary">
              참여 횟수: {user.participationCount}
            </Typography>
          </Box>
        </Box>
      </Paper>

      <Typography variant="h5" component="h2" gutterBottom>
        참여한 토론
      </Typography>

      {userDiscussions.length === 0 ? (
        <Typography variant="body1" sx={{ py: 2 }}>
          참여한 토론이 없습니다.
        </Typography>
      ) : (
        <Grid container spacing={2}>
          {userDiscussions.map((discussion) => (
            <Grid size={{ xs: 12 }} key={discussion.id}>
              <Card sx={{ borderRadius: 2 }}>
                <CardContent>
                  <Typography variant="h6" component="div">
                    {discussion.title}
                  </Typography>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 1,
                    }}
                  >
                    <Typography variant="body2" color="text.secondary">
                      작성일: {discussion.createdAt}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      메시지: {discussion.messageCount}개
                    </Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  );
};

export default ProfilePage;

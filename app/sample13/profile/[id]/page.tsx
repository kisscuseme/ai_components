"use client";

import { useParams, useRouter } from "next/navigation";
import {
  Box,
  Container,
  Typography,
  Avatar,
  IconButton,
  Divider,
  Card,
  CardContent,
} from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ForumIcon from "@mui/icons-material/Forum";
import { getUserById, discussions } from "../../data/dummyData";
import DiscussionList from "../../components/DiscussionList";

export default function ProfilePage() {
  const params = useParams();
  const router = useRouter();
  const userId = Number(params.id);
  const user = getUserById(userId);

  const userDiscussions = discussions.filter(
    (discussion) => discussion.authorId === userId
  );

  if (!user) {
    return (
      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography>사용자를 찾을 수 없습니다.</Typography>
      </Container>
    );
  }

  return (
    <Container maxWidth="lg" sx={{ py: 4 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 2,
          mb: 3,
        }}
      >
        <IconButton
          onClick={() => router.push("/sample13")}
          sx={{
            color: "#2e7d32",
            bgcolor: "#f1f8e9",
            "&:hover": {
              bgcolor: "#e8f5e9",
            },
          }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Typography
          variant="h5"
          component="h1"
          sx={{ color: "#2e7d32", fontWeight: 600 }}
        >
          프로필
        </Typography>
      </Box>

      <Card
        sx={{
          mb: 4,
          borderRadius: 2,
          border: "1px solid #c8e6c9",
          bgcolor: "#f1f8e9",
          boxShadow: "0 4px 12px rgba(129, 199, 132, 0.2)",
        }}
      >
        <CardContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              alignItems: { xs: "center", sm: "flex-start" },
              gap: 3,
              textAlign: { xs: "center", sm: "left" },
            }}
          >
            <Avatar
              src={user.avatar}
              alt={user.name}
              sx={{
                width: 120,
                height: 120,
                border: "4px solid #81c784",
              }}
            />
            <Box>
              <Typography
                variant="h4"
                component="h2"
                sx={{ color: "#2e7d32", fontWeight: 600, mb: 2 }}
              >
                {user.name}
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  color: "#558b2f",
                }}
              >
                <ForumIcon />
                <Typography variant="h6">
                  {user.participationCount}회 토론 참여
                </Typography>
              </Box>
            </Box>
          </Box>
        </CardContent>
      </Card>

      <Typography
        variant="h5"
        component="h2"
        gutterBottom
        sx={{
          color: "#2e7d32",
          borderLeft: "4px solid #66bb6a",
          pl: 2,
          py: 1,
          bgcolor: "rgba(129, 199, 132, 0.1)",
          borderRadius: "0 4px 4px 0",
          mb: 3,
        }}
      >
        참여한 토론
      </Typography>

      <DiscussionList discussions={userDiscussions} />
    </Container>
  );
}

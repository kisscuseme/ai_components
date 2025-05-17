import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
} from "@mui/material";

const dummyUser = {
  nickname: "damso_user",
  image: "https://randomuser.me/api/portraits/men/32.jpg",
  bio: "AI와 토론을 사랑하는 Damso 커뮤니티 유저입니다.",
};

export default function ProfilePage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
      <Card
        sx={{
          bgcolor: "background.paper",
          borderLeft: 4,
          borderColor: "primary.main",
        }}
      >
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: 2,
          }}
        >
          <Avatar
            src={dummyUser.image}
            alt={dummyUser.nickname}
            sx={{ width: 80, height: 80 }}
          />
          <Typography variant="h5" fontWeight={700} color="primary">
            {dummyUser.nickname}
          </Typography>
          <Typography variant="body1" color="text.secondary" align="center">
            {dummyUser.bio}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";

export default function PrivacyPolicyPage() {
  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Card
        sx={{
          bgcolor: "background.paper",
          borderLeft: 4,
          borderColor: "primary.main",
        }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            개인정보처리방침
          </Typography>
          <Typography variant="body1" color="text.secondary">
            본 서비스는 회원님의 개인정보를 소중히 다루며, 관련 법령을
            준수합니다. (더미 텍스트)
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

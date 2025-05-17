import React from "react";
import { Container, Card, CardContent, Typography } from "@mui/material";

export default function TermsPage() {
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
            이용약관
          </Typography>
          <Typography variant="body1" color="text.secondary">
            본 서비스의 이용약관입니다. (더미 텍스트)
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
}

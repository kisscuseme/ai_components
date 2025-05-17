import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
} from "@mui/material";

export default function NewTopicPage() {
  return (
    <Container maxWidth="sm" sx={{ py: 6 }}>
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
            새 토픽 만들기
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField label="토픽명" fullWidth required />
            <Button variant="contained" color="primary" sx={{ mt: 2 }}>
              생성
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

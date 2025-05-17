import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  TextField,
  Button,
  Box,
  Link as MuiLink,
} from "@mui/material";
import Link from "next/link";

export default function LoginPage() {
  return (
    <Container maxWidth="xs" sx={{ py: 6 }}>
      <Card
        sx={{ bgcolor: "#F4FAFF", borderLeft: 4, borderColor: "primary.main" }}
      >
        <CardContent>
          <Typography
            variant="h5"
            fontWeight={700}
            color="primary"
            gutterBottom
          >
            로그인
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField label="이메일" type="email" fullWidth required />
            <TextField label="비밀번호" type="password" fullWidth required />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              로그인
            </Button>
          </Box>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <MuiLink
              component={Link}
              href="/sample15/auth/register"
              underline="hover"
            >
              회원가입
            </MuiLink>
            <MuiLink
              component={Link}
              href="/sample15/policy/privacy"
              underline="hover"
            >
              개인정보처리방침
            </MuiLink>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

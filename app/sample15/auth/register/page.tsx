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

export default function RegisterPage() {
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
            회원가입
          </Typography>
          <Box
            component="form"
            sx={{ display: "flex", flexDirection: "column", gap: 2, mt: 2 }}
          >
            <TextField label="닉네임" fullWidth required />
            <TextField label="이메일" type="email" fullWidth required />
            <TextField label="비밀번호" type="password" fullWidth required />
            <Button
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              회원가입
            </Button>
          </Box>
          <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
            <MuiLink
              component={Link}
              href="/sample15/auth/login"
              underline="hover"
            >
              로그인
            </MuiLink>
            <MuiLink
              component={Link}
              href="/sample15/policy/terms"
              underline="hover"
            >
              이용약관
            </MuiLink>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
}

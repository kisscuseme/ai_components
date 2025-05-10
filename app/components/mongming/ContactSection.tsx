"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Paper from "@mui/material/Paper";
import EmailIcon from "@mui/icons-material/Email";
import PhoneIcon from "@mui/icons-material/Phone";
import LocationOnIcon from "@mui/icons-material/LocationOn";

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content }) => {
  return (
    <Box sx={{ display: "flex", mb: 3 }}>
      <Box
        sx={{
          mr: 2,
          p: 1,
          borderRadius: "50%",
          backgroundColor: "primary.light",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: 40,
          width: 40,
        }}
      >
        {icon}
      </Box>
      <Box>
        <Typography variant="h6" component="h3" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {content}
        </Typography>
      </Box>
    </Box>
  );
};

const ContactSection = () => {
  return (
    <Box
      id="contact"
      sx={{
        py: 10,
        backgroundColor: "#f8f9fa",
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h6"
            component="p"
            color="primary"
            fontWeight={600}
            sx={{ mb: 2 }}
          >
            문의하기
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            MongMing에 문의하세요
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            sx={{
              maxWidth: 800,
              mx: "auto",
              fontSize: "1.1rem",
              lineHeight: 1.7,
            }}
          >
            분양 관련 문의나 제안사항이 있으시면 언제든지 연락주세요. 전문
            상담원이 신속하게 답변드립니다.
          </Typography>
        </Box>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
                height: "100%",
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                fontWeight={600}
                gutterBottom
              >
                연락처 정보
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                아래 연락처로 문의하시거나 문의 양식을 작성해주세요.
              </Typography>

              <Box sx={{ mt: 4 }}>
                <ContactInfo
                  icon={<EmailIcon />}
                  title="이메일"
                  content="admin@mongming.co.kr"
                />
                <ContactInfo
                  icon={<PhoneIcon />}
                  title="전화"
                  content="02-1234-5678"
                />
                <ContactInfo
                  icon={<LocationOnIcon />}
                  title="주소"
                  content="서울특별시 마포구 마포대로 123, MongMing 빌딩 7층"
                />
              </Box>
            </Paper>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Paper
              elevation={3}
              sx={{
                p: 4,
                borderRadius: 3,
              }}
            >
              <Typography
                variant="h5"
                component="h3"
                fontWeight={600}
                gutterBottom
              >
                문의 양식
              </Typography>
              <Typography variant="body2" color="text.secondary" paragraph>
                아래 양식을 작성하시면 빠른 시일 내에 답변드리겠습니다.
              </Typography>

              <Box component="form" sx={{ mt: 3 }}>
                <Grid container spacing={2}>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="이름"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12, sm: 6 }}>
                    <TextField
                      fullWidth
                      label="연락처"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="이메일"
                      variant="outlined"
                      type="email"
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="제목"
                      variant="outlined"
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <TextField
                      fullWidth
                      label="문의내용"
                      variant="outlined"
                      multiline
                      rows={4}
                      required
                    />
                  </Grid>
                  <Grid size={{ xs: 12 }}>
                    <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      size="large"
                      fullWidth
                      sx={{ py: 1.5, borderRadius: 2 }}
                    >
                      문의하기
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;

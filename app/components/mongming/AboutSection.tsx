"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import BusinessIcon from "@mui/icons-material/Business";
import GroupsIcon from "@mui/icons-material/Groups";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface ValueCardProps {
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  description: string;
}

const ValueCard: React.FC<ValueCardProps> = ({ icon, title, description }) => {
  return (
    <Paper
      elevation={2}
      sx={{
        p: 4,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        borderRadius: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <Box
        sx={{
          mb: 2,
          p: 2,
          borderRadius: "50%",
          backgroundColor: "primary.light",
          color: "primary.main",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {React.cloneElement(icon, { sx: { fontSize: 40 } })}
      </Box>
      <Typography variant="h5" component="h3" gutterBottom fontWeight={600}>
        {title}
      </Typography>
      <Typography variant="body1" color="text.secondary">
        {description}
      </Typography>
    </Paper>
  );
};

const AboutSection = () => {
  return (
    <Box
      id="about"
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
            회사소개
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            MongMing는 분양 시장의 혁신을 이끌어갑니다
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
            철저한 교육을 바탕으로 양성된 전문가들에 움직이는 분양 시장을 만들기
            위해 MongMing는 분양 영업의 체계화에 나섰고, 독보적인 분양 성과로
            증명하였습니다.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 4 }}>
            <ValueCard
              icon={<BusinessIcon />}
              title="비전"
              description="완벽한 분양 시장을 만들어 고객과 기업 모두에게 최상의 가치를 제공합니다. 혁신적인 접근 방식으로 부동산 분양의 새로운 표준을 만들어갑니다."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <ValueCard
              icon={<GroupsIcon />}
              title="전문성"
              description="철저한 교육 시스템을 통해 양성된 전문가들이 고객의 니즈를 정확히 파악하고 최적의 솔루션을 제공합니다. 전문성을 바탕으로 신뢰를 구축합니다."
            />
          </Grid>
          <Grid size={{ xs: 12, md: 4 }}>
            <ValueCard
              icon={<TrendingUpIcon />}
              title="성과"
              description="체계적인 분양 영업 시스템을 통해 독보적인 성과를 창출합니다. 데이터 기반의 접근 방식으로 효율성을 극대화하고 지속적인 성장을 이루어냅니다."
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutSection;

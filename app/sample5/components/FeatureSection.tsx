"use client";

import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import AnalyticsIcon from "@mui/icons-material/Analytics";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <Card
      sx={{
        height: "100%",
        transition: "transform 0.3s",
        "&:hover": { transform: "translateY(-8px)" },
      }}
    >
      <CardContent sx={{ p: 4 }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <Box sx={{ color: "primary.main", mb: 2, fontSize: "3rem" }}>
            {icon}
          </Box>
          <Typography variant="h5" component="h3" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

const features = [
  {
    icon: <DesignServicesIcon fontSize="inherit" />,
    title: "창의적인 디자인",
    description:
      "사용자 경험을 최우선으로 고려한 직관적이고 아름다운 디자인을 제공합니다.",
  },
  {
    icon: <CodeIcon fontSize="inherit" />,
    title: "최신 기술",
    description:
      "최신 웹 기술과 프레임워크를 활용하여 안정적이고 확장 가능한 솔루션을 개발합니다.",
  },
  {
    icon: <SupportAgentIcon fontSize="inherit" />,
    title: "24/7 지원",
    description:
      "언제든지 도움이 필요할 때 신속하게 대응하는 전문 지원 팀이 있습니다.",
  },
  {
    icon: <AnalyticsIcon fontSize="inherit" />,
    title: "데이터 분석",
    description:
      "비즈니스 인사이트를 제공하는 강력한 데이터 분석 도구로 성과를 측정합니다.",
  },
];

const FeatureSection = () => {
  return (
    <Box component="section" id="services" sx={{ py: 6 }}>
      <Typography variant="h3" component="h2" align="center" gutterBottom>
        주요 서비스
      </Typography>
      <Typography
        variant="body1"
        color="text.secondary"
        align="center"
        sx={{ mb: 6, maxWidth: 700, mx: "auto" }}
      >
        고객의 비즈니스 성장을 위한 다양한 서비스를 제공합니다.
      </Typography>
      <Grid container spacing={4}>
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
            <FeatureCard
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureSection;

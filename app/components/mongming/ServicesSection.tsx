"use client";

import React from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import ApartmentIcon from "@mui/icons-material/Apartment";
import HomeWorkIcon from "@mui/icons-material/HomeWork";
import BusinessIcon from "@mui/icons-material/Business";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import { SvgIconProps } from "@mui/material/SvgIcon";

interface ServiceCardProps {
  icon: React.ReactElement<SvgIconProps>;
  title: string;
  description: string;
  imageUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
  imageUrl,
}) => {
  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
        borderRadius: 3,
        overflow: "hidden",
        boxShadow: 3,
        transition: "transform 0.3s, box-shadow 0.3s",
        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 6,
        },
      }}
    >
      <CardMedia component="img" height="200" image={imageUrl} alt={title} />
      <CardContent sx={{ flexGrow: 1, p: 3 }}>
        <Box sx={{ display: "flex", alignItems: "center", mb: 2 }}>
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
            }}
          >
            {React.cloneElement(icon, { sx: { fontSize: 28 } })}
          </Box>
          <Typography variant="h6" component="h3" fontWeight={600}>
            {title}
          </Typography>
        </Box>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
    </Card>
  );
};

const ServicesSection = () => {
  const services = [
    {
      icon: <ApartmentIcon />,
      title: "아파트 분양",
      description:
        "신규 아파트 분양 및 마케팅 서비스를 제공합니다. 체계적인 영업 시스템으로 분양률을 극대화합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1678495846941-f4a0276834a8?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bHV4dXJ5JTIwYXBhcnRtZW50JTIwa29yZWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: <HomeWorkIcon />,
      title: "주택 분양",
      description:
        "다양한 유형의 주택 분양 서비스를 제공합니다. 고객 니즈에 맞는 맞춤형 분양 전략을 수립합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1583842480471-c2c9b55ccfa3?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9kZXJuJTIwaG91c2UlMjBrb3JlYXxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      icon: <BusinessIcon />,
      title: "상업시설 분양",
      description:
        "오피스, 상가 등 상업시설 분양 서비스를 제공합니다. 입지 분석부터 마케팅까지 원스톱 솔루션을 제공합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1660602738577-7277a9354341?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tbWVyY2lhbCUyMGJ1aWxkaW5nJTIwa29yZWF8ZW58MHx8MHx8fDA%3D",
    },
    {
      icon: <DesignServicesIcon />,
      title: "분양 컨설팅",
      description:
        "분양 시장 분석 및 전략 수립, 마케팅 기획 등 전문적인 컨설팅 서비스를 제공합니다.",
      imageUrl:
        "https://images.unsplash.com/photo-1647256035935-bdc76c0477c9?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZSUyMGNvbnN1bHRpbmclMjBrb3JlYXxlbnwwfHwwfHx8MA%3D%3D",
    },
  ];

  return (
    <Box
      id="services"
      sx={{
        py: 10,
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
            사업분야
          </Typography>
          <Typography
            variant="h3"
            component="h2"
            fontWeight={700}
            sx={{ mb: 3 }}
          >
            MongMing의 전문 서비스
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
            MongMing는 다양한 부동산 분양 서비스를 제공하며, 전문성과 체계적인
            시스템을 바탕으로 고객에게 최상의 가치를 전달합니다.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={index}>
              <ServiceCard
                icon={service.icon}
                title={service.title}
                description={service.description}
                imageUrl={service.imageUrl}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesSection;

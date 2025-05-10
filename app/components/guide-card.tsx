import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

export interface Guide {
  id: number;
  title: string;
  description: string;
  image: string;
  badge: string;
  count: number;
}

interface GuideCardProps {
  guide: Guide;
}

const GuideCard: React.FC<GuideCardProps> = ({ guide }) => (
  <Card
    sx={{
      borderRadius: 3,
      boxShadow: 3,
      position: "relative",
      height: 260,
      backgroundImage: `url(${guide.image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      display: "flex",
      flexDirection: "column",
      justifyContent: "flex-end",
      overflow: "hidden",
    }}
  >
    {/* 오버레이 */}
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        bgcolor: "rgba(0,0,0,0.25)",
        zIndex: 1,
      }}
    />
    {/* 뱃지 */}
    <Box
      sx={{
        position: "absolute",
        top: 12,
        left: 12,
        bgcolor: "rgba(0,0,0,0.6)",
        color: "white",
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        fontSize: 12,
        zIndex: 2,
      }}
    >
      {guide.badge}
    </Box>
    {/* 카운트 */}
    <Box
      sx={{
        position: "absolute",
        top: 12,
        right: 12,
        bgcolor: "rgba(255,255,255,0.85)",
        color: "text.primary",
        px: 1.5,
        py: 0.5,
        borderRadius: 2,
        fontSize: 12,
        fontWeight: 700,
        zIndex: 2,
      }}
    >
      +{guide.count}
    </Box>
    {/* 내용 */}
    <CardContent sx={{ position: "relative", zIndex: 2 }}>
      <Typography
        gutterBottom
        variant="h6"
        component="div"
        sx={{ color: "white", textShadow: "0 1px 6px rgba(0,0,0,0.5)" }}
      >
        {guide.title}
      </Typography>
      <Typography
        variant="body2"
        sx={{ color: "#f0f0f0", textShadow: "0 1px 6px rgba(0,0,0,0.4)" }}
      >
        {guide.description}
      </Typography>
    </CardContent>
  </Card>
);

export default GuideCard;

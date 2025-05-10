import GuideGrid from "@/app/components/guide-grid";
import { Container, Typography } from "@mui/material";

export default function GuidePage() {
  return <Container maxWidth="lg" sx={{ py: 6 }}>
    <Typography variant="h4" fontWeight={700} mb={4}>
      요리초보가이드
    </Typography>
    <GuideGrid />
  </Container>;
}

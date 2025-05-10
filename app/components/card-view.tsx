'use client';

import Container from '@mui/material/Container';

export default function CardView({ children }: { children: React.ReactNode }) {
  return (
    <Container maxWidth="lg" sx={{ py: 6 }}>
      {children}
    </Container>
  );
}
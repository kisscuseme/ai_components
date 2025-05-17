import React from "react";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import MuiThemeProvider from "./components/MuiThemeProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BodyWithBg from "./components/BodyWithBg";

export const metadata = {
  title: "Damso 토론 커뮤니티",
  description: "토픽 기반 스레드 토론, 파스텔 블루 테마, 반응형 UI",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <AppRouterCacheProvider>
        <MuiThemeProvider>
          <BodyWithBg>
            <Header />
            {children}
            <Footer />
          </BodyWithBg>
        </MuiThemeProvider>
      </AppRouterCacheProvider>
    </html>
  );
}

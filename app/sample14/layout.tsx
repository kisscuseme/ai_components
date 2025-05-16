import type React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v14-appRouter";
import MuiThemeProvider from "@/app/sample14/components/MuiThemeProvider";
import Header from "@/app/sample14/components/header";

export const metadata: Metadata = {
  title: "Discussion Forum",
  description: "A discussion forum with a messenger-style interface",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AppRouterCacheProvider>
          <MuiThemeProvider>
            <Header />
            {children}
          </MuiThemeProvider>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}

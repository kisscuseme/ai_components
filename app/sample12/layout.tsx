import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Header from "./components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "토론 사이트",
  description: "서로 대화하듯 토론하는 사이트",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className={inter.className}>
      <Header />
      <main>{children}</main>
    </div>
  );
}

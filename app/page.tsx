import { BackgroundGradientAnimation } from "@/app/components/background-gradient-animation";
import { HomeView } from "@/app/components/home-view";
import { SplashCursor } from "@/app/components/splash-cursor";
import { Stack } from "@mui/material";

export default function Home() {
  return (
    <Stack height={"100vh"} overflow={"hidden"}>
      <HomeView />
      <BackgroundGradientAnimation />
      <SplashCursor />
    </Stack>
  );
}

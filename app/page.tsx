import { BackgroundGradientAnimation } from "@/app/components/background-gradient-animation";
import { HomeView } from "@/app/components/home-view";
import { SplashCursor } from "@/app/components/splash-cursor";

export default function Home() {
  return (
    <>
      <HomeView />
      <BackgroundGradientAnimation />
      <SplashCursor />
    </>
  );
}

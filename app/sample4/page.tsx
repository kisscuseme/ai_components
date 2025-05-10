import React from 'react';

// 컴포넌트 임포트
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProjectsSection from './components/ProjectsSection';
import StatsSection from './components/StatsSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

export default function Sample4Page() {
  return (
    <main>
      <Header />
      <HeroSection />
      <ProjectsSection />
      <StatsSection />
      <NewsSection />
      <Footer />
    </main>
  );
}
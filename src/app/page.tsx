'use client';

import Header from '@/components/header';
import HeroSection from '@/components/hero-section';
import EngineerProfileSection from '@/components/engineer-profile-section';
import SkillsSection from '@/components/tech-stack-section';
import ProjectsSection from '@/components/projects-section';
import PersonalSection from '@/components/personal-section';
import Footer from '@/components/footer';

export default function Home() {
  return (
    <main className="snap-container bg-background">
      <Header />
      <HeroSection />
      <EngineerProfileSection />
      <SkillsSection />
      <ProjectsSection />
      <PersonalSection />
      <Footer />
    </main>
  );
}

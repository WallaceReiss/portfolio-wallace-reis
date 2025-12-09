import HeroSection from '@/components/hero-section';
import AboutSection from '@/components/about-section';
import SkillsSection from '@/components/skills-section';
import AwardsSection from '@/components/awards-section';
import LanguagesSection from '@/components/languages-section';
import HobbiesSection from '@/components/hobbies-section';
import PresentationSection from '@/components/presentation-section';

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <LanguagesSection />
      <AwardsSection />
      <PresentationSection />
      <HobbiesSection />
    </>
  );
}

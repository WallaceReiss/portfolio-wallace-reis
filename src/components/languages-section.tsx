"use client";

import { useRef, useState, useEffect } from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { languages } from '@/lib/data';
import AnimatedProgress from '@/components/animated-progress';

const LanguagesSection = () => {
  const ref = useRef<HTMLDivElement>(null);
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
          if (ref.current) {
            observer.unobserve(ref.current);
          }
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  return (
    <SectionWrapper id="languages" className="bg-muted/40 dark:bg-card">
      <div className="max-w-3xl mx-auto">
        <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Language Proficiency</h2>
            <p className="mt-4 text-lg text-muted-foreground">My communication skills across different languages.</p>
        </div>
        <div ref={ref} className="mt-12 space-y-8">
            {languages.map((lang, index) => (
                <div key={index}>
                    <div className="flex justify-between mb-2">
                        <h3 className="text-lg font-medium">{lang.name}</h3>
                        <p className="text-muted-foreground">{lang.proficiency}</p>
                    </div>
                    <AnimatedProgress value={lang.level} isVisible={isIntersecting} />
                </div>
            ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default LanguagesSection;

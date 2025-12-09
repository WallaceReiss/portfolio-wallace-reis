"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const HeroSection = () => {
  const [offsetY, setOffsetY] = useState(0);
  const handleScroll = () => setOffsetY(window.pageYOffset);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const heroImage = PlaceHolderImages.find(p => p.id === 'hero-banner');

  return (
    <section className="relative h-[80vh] w-full flex items-center justify-center text-center overflow-hidden text-white">
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ transform: `translateY(${offsetY * 0.4}px)` }}
      >
        {heroImage && (
          <Image
            src={heroImage.imageUrl}
            alt={heroImage.description}
            fill
            className="object-cover"
            priority
            data-ai-hint={heroImage.imageHint}
          />
        )}
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div
        className="relative z-10"
        style={{ transform: `translateY(-${offsetY * 0.2}px)` }}
      >
        <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tight text-shadow-lg">
          Full-Stack Developer
        </h1>
        <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto text-shadow">
          Building innovative solutions with modern technology stacks.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

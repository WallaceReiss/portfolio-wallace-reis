'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useI18n } from '@/i18n';
import { Badge } from './ui/badge';
import { MapPin, Globe, GraduationCap, Languages } from 'lucide-react';

const HeroSection = () => {
  const { t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="home" className="snap-section relative flex items-center justify-center overflow-hidden bg-[#0a0514] pt-[5.5rem] md:pt-[6rem] sm:pt-[5rem]">
      {/* Background Decorativo - Roxo Profundo */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] opacity-40" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
      </div>

      <div className="container mx-auto px-6 z-10 grid lg:grid-cols-2 gap-16 items-center max-w-7xl md:gap-10 sm:grid-cols-1 sm:gap-8">
        {/* Lado Esquerdo: Conteúdo */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em]">
              <MapPin className="h-4 w-4" />
              {t.common.location}
            </div>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] sm:text-4xl">
              <span className="text-gradient drop-shadow-sm" style={{ fontSize: 'clamp(2rem,8vw,65px)' }}>{t.hero.name}</span>
            </h1>
            <div className="flex flex-wrap gap-x-4 gap-y-2 text-xl md:text-2xl text-muted-foreground font-light font-mono">
              {t.hero.roles.map((role, index) => (
                <span key={role} className="flex items-center gap-2">
                  {index > 0 && <span className="text-primary/40">•</span>}
                  {role}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Formação e Idiomas */}
          <motion.div variants={itemVariants} className="grid sm:grid-cols-2 gap-6 py-4 border-y border-white/5">
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <GraduationCap className="h-3.5 w-3.5" />
                Educação
              </div>
              <ul className="space-y-2">
                {t.hero.education.map((edu, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground font-mono leading-relaxed">
                    <span className="text-foreground block font-bold">{edu.title}</span>
                    {edu.institution} ({edu.year})
                  </li>
                ))}
              </ul>
            </div>
            <div className="space-y-3">
              <div className="flex items-center gap-2 text-primary font-mono text-[10px] uppercase tracking-widest">
                <Languages className="h-3.5 w-3.5" />
                Idiomas
              </div>
              <ul className="flex flex-wrap gap-x-6 gap-y-2">
                {t.hero.languages.map((lang, idx) => (
                  <li key={idx} className="text-xs text-muted-foreground font-mono leading-relaxed">
                    <span className="text-foreground font-bold">{lang.lang}:</span> {lang.level}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg text-muted-foreground/90 font-sans leading-relaxed max-w-xl border-l-2 border-primary/30 pl-6 italic"
          >
            {t.hero.tagline}
          </motion.p>

          <motion.div variants={itemVariants} className="space-y-4">
             <div className="flex items-center gap-3 text-accent font-mono text-sm">
                <Globe className="h-4 w-4 text-primary animate-pulse" />
                <span className="tracking-wide">{t.hero.availability}</span>
             </div>
             <div className="flex gap-4 pt-2">
               <Badge variant="outline" className="border-primary/20 bg-primary/5 text-primary-foreground font-mono text-[10px] uppercase tracking-widest px-4 py-2">
                 Senior Profile
               </Badge>
               <Badge variant="outline" className="border-white/10 bg-white/5 text-muted-foreground font-mono text-[10px] uppercase tracking-widest px-4 py-2">
                 Enterprise Ready
               </Badge>
             </div>
          </motion.div>
        </motion.div>

        {/* Lado Direito: Imagem com Sombra Dinâmica */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, x: 40 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="relative hidden lg:block md:block sm:block w-full max-w-xs mx-auto mt-8"
        >
          <div className="relative w-[320px] h-[420px] md:w-[400px] md:h-[520px] lg:w-[480px] lg:h-[640px] mx-auto group">
            {/* Sombra Glow Roxo */}
            <div className="absolute -inset-4 bg-primary/20 rounded-[2rem] blur-3xl group-hover:bg-primary/30 transition-all duration-1000" />
            
            <div className="relative h-full w-full rounded-[2rem] overflow-hidden border border-white/10 shadow-[0_0_50px_-12px_rgba(139,92,246,0.3)] group-hover:shadow-[0_0_60px_-12px_rgba(139,92,246,0.5)] transition-all duration-700">
              <Image
                src="/static/euTerno.jpeg"
                alt={t.hero.name}
                fill
                className="object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-1000 scale-105 group-hover:scale-100"
                priority
                data-ai-hint="professional engineer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent opacity-60" />
              
              {/* Overlay Decorativo */}
              <div className="absolute bottom-8 left-8 right-8 p-6 backdrop-blur-md bg-white/5 border border-white/10 rounded-xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <div className="flex items-center gap-3">
                  <div className="h-2 w-2 rounded-full bg-green-500 animate-ping" />
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-white/80">Available for Projects</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
      
      {/* Indicador de Scroll */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-30 hover:opacity-100 transition-opacity cursor-pointer"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <span className="text-[10px] font-mono uppercase tracking-[0.3em]">Scroll</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-primary to-transparent" />
      </motion.div>
    </section>
  );
};

export default HeroSection;

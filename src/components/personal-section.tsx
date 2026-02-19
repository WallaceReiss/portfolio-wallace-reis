'use client';

import { motion } from 'framer-motion';
import AboutMeSlider from './about-me-slider';
import { useI18n } from '@/i18n';

const PersonalSection = () => {
  const { t } = useI18n();

  return (
    <section id="personal" className="min-h-screen snap-section relative flex flex-col items-center justify-center bg-[#0a0514] py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
            <span className="h-px w-8 bg-primary/40" />
            05. Human Dimension
            <span className="h-px w-8 bg-primary/40" />
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
            <span className="text-gradient">{t.footer.aboutMeSlider.title}</span>
          </h2>
          <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
            {t.footer.aboutMeSlider.subtitle}
          </p>
        </motion.div>

        <AboutMeSlider />
      </div>

      {/* Background Decorativo */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default PersonalSection;

'use client';

import { useI18n } from '@/i18n';
import { Card, CardContent } from './ui/card';
import { motion } from 'framer-motion';

const EngineerProfileSection = () => {
  const { t } = useI18n();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="about" className="snap-section relative flex items-center justify-center bg-[#0a0514] py-24">
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Lado Esquerdo: Autônomo */}
          <motion.div variants={itemVariants} className="space-y-6 flex flex-col h-full">
            <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-primary/40" />
              01. Current Innovation
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <span className="text-gradient">{t.about.title}</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/40 transition-colors duration-500 flex-grow">
              <CardContent className="pt-8 pb-10 text-muted-foreground leading-relaxed text-justify space-y-6 font-sans text-base">
                <p className="text-foreground/90 font-medium">{t.about.paragraph1}</p>
                <p>{t.about.paragraph2}</p>
                <p>{t.about.paragraph3}</p>
              </CardContent>
            </Card>
          </motion.div>

          {/* Lado Direito: Safira */}
          <motion.div variants={itemVariants} className="space-y-6 flex flex-col h-full">
            <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em]">
              <span className="h-px w-8 bg-primary/40" />
              02. Corporate Legacy
            </div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">
              <span className="text-gradient">{t.professionalProfile.title}</span>
            </h2>
            <Card className="bg-white/5 border-white/10 backdrop-blur-sm hover:border-primary/40 transition-colors duration-500 flex-grow">
              <CardContent className="pt-8 pb-10 text-muted-foreground leading-relaxed text-justify space-y-6 font-sans text-base">
                <p className="text-foreground/90 font-medium">{t.professionalProfile.paragraph1}</p>
                <p>{t.professionalProfile.paragraph2}</p>
                <p>{t.professionalProfile.paragraph3}</p>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Background Decorativo Sutil */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
        <div className="absolute bottom-[20%] left-[-5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]" />
      </div>
    </section>
  );
};

export default EngineerProfileSection;

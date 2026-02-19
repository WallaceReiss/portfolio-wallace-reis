'use client';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { useI18n } from '@/i18n';
import type { TechCategory, TechItem } from '@/i18n/locales/pt';

const SkillsSection = () => {
  const { t } = useI18n();
  const { title, subtitle, categories, techStack } = t.skills;
  const categoryKeys = Object.keys(categories) as TechCategory[];

  const [activeTab, setActiveTab] = useState<string>(categoryKeys[0]);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = categoryKeys.indexOf(current as TechCategory);
        const nextIndex = (currentIndex + 1) % categoryKeys.length;
        return categoryKeys[nextIndex];
      });
    }, 5000);

    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, categoryKeys]);

  const handleTabChange = (value: string) => {
    setActiveTab(value);
    setIsPaused(true);
    // Retoma a automação após 10 segundos de inatividade manual
    setTimeout(() => setIsPaused(false), 10000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] }
    },
  };

  const renderStack = (categoryKey: TechCategory) => {
    const categoryName = categories[categoryKey];
    const stack = techStack.filter(t => t.category === categoryName);
    
    return (
        <motion.div
            key={categoryKey}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            {stack.map((tech: TechItem) => (
            <motion.div key={tech.name} variants={itemVariants}>
                <Card className="group h-full border-white/5 bg-white/5 backdrop-blur-md transition-all hover:bg-white/10 hover:border-primary/40">
                <CardHeader className="pb-2">
                    <CardTitle className="text-lg font-mono tracking-tight group-hover:text-primary transition-colors flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {tech.name}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <CardDescription className="text-sm leading-relaxed text-muted-foreground/90 font-sans italic">
                      {tech.description}
                    </CardDescription>
                </CardContent>
                </Card>
            </motion.div>
            ))}
        </motion.div>
    )
  };

  return (
    <section id="skills" className="snap-section relative flex items-center justify-center bg-[#0a0514] py-24 overflow-hidden">
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-primary/40" />
              03. Specialized Mastery
              <span className="h-px w-8 bg-primary/40" />
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6">
              <span className="text-gradient">{title}</span>
            </h2>
            <p className="text-lg text-muted-foreground font-sans max-w-2xl mx-auto">
              {subtitle}
            </p>
          </motion.div>
        </div>
        
        <div className="mt-12">
          <Tabs value={activeTab} onValueChange={handleTabChange} className="w-full">
            <div className="flex justify-center mb-10">
              <TabsList className="flex flex-wrap h-auto bg-white/5 border border-white/10 p-1 rounded-xl gap-1">
                {categoryKeys.map(categoryKey => (
                    <TabsTrigger 
                      key={categoryKey} 
                      value={categoryKey}
                      className="data-[state=active]:bg-primary data-[state=active]:text-white rounded-lg px-6 py-2.5 font-mono text-[10px] uppercase tracking-widest transition-all"
                    >
                      {categories[categoryKey]}
                    </TabsTrigger>
                ))}
              </TabsList>
            </div>
            
            <AnimatePresence mode="wait">
              {categoryKeys.map(categoryKey => (
                activeTab === categoryKey && (
                  <TabsContent 
                    key={categoryKey} 
                    value={categoryKey} 
                    className="focus-visible:ring-0 outline-none m-0"
                    forceMount
                  >
                      {renderStack(categoryKey)}
                  </TabsContent>
                )
              ))}
            </AnimatePresence>
          </Tabs>
        </div>
      </div>

      {/* Background Decorativo Sutil */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default SkillsSection;

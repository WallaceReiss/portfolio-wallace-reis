'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Card, CardHeader, CardTitle, CardDescription } from './ui/card';
import { Badge } from './ui/badge';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { useI18n } from '@/i18n';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const ProjectsSection = () => {
  const { t } = useI18n();
  const { title, subtitle, items: projects } = t.projects;

  return (
    <section id="projects" className="min-h-screen snap-section relative flex items-center justify-center bg-[#0a0514] py-20 overflow-hidden">
      <div className="container mx-auto px-6 z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 text-primary font-mono text-xs uppercase tracking-[0.2em] mb-4">
              <span className="h-px w-8 bg-primary/40" />
              04. Strategic Portfolio
            </div>
            <h2 className="text-4xl md:text-5xl font-bold tracking-tighter">
              <span className="text-gradient">{title}</span>
            </h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-xl">
              {subtitle}
            </p>
          </motion.div>
          <div className="h-[1px] flex-grow mx-8 bg-white/10 hidden md:block mb-4" />
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project, index) => {
            const placeholder = PlaceHolderImages.find(p => p.id === project.imageId);
            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
                viewport={{ once: true }}
              >
                <Link href={project.link} target="_blank" className="block group h-full">
                  <Card className="h-full flex flex-col bg-white/5 border-white/10 hover:border-primary/40 transition-all duration-500 overflow-hidden backdrop-blur-md group-hover:shadow-[0_0_30px_-10px_rgba(139,92,246,0.3)]">
                    <div className="relative h-48 md:h-56 w-full overflow-hidden">
                      {placeholder?.imageUrl && (
                        <Image
                          src={placeholder.imageUrl}
                          alt={project.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-1000 grayscale-[30%] group-hover:grayscale-0"
                          data-ai-hint={placeholder.imageHint}
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0514] via-transparent to-transparent opacity-80" />
                      
                      {/* Badge flutuante interativo */}
                      <div className="absolute bottom-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/20 backdrop-blur-xl border border-white/10 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                        <span className="text-[10px] font-mono uppercase tracking-widest text-white">{t.common.viewProject}</span>
                        <ArrowUpRight className="h-3 w-3 text-white" />
                      </div>
                    </div>
                    
                    <div className="p-6 flex flex-col flex-grow">
                      <CardHeader className="p-0 mb-4">
                        <div className="flex items-center gap-2 mb-2">
                           <span className="h-[1px] w-6 bg-primary" />
                           <span className="font-mono text-[9px] uppercase tracking-widest text-primary">Case // {project.id}</span>
                        </div>
                        <CardTitle className="text-xl font-bold tracking-tight mb-2 group-hover:text-primary transition-colors">
                          {project.title}
                        </CardTitle>
                        <CardDescription className="text-sm leading-relaxed text-muted-foreground/90 font-sans line-clamp-2">
                          {project.description}
                        </CardDescription>
                      </CardHeader>
                      <div className="mt-auto flex flex-wrap gap-2 pt-4 border-t border-white/5">
                        {project.stack.map(tech => (
                          <Badge key={tech} variant="secondary" className="bg-white/5 border-white/10 text-muted-foreground font-mono text-[8px] uppercase tracking-widest py-0.5 px-2">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </Card>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full z-0 pointer-events-none opacity-20">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px]" />
      </div>
    </section>
  );
};

export default ProjectsSection;

'use client';

import { motion } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Check, Globe, Rocket } from 'lucide-react';
import { useI18n } from '@/i18n';

const CareerSection = () => {
  const { t } = useI18n();
  const { learningPath, professionalSkills, languages, tabs, title, subtitle } = t.career;

  return (
    <div className="section-content">
      <div className="max-w-4xl mx-auto text-center mb-16">
        <h2 className="text-5xl font-bold tracking-tighter font-mono">{title}</h2>
        <p className="mt-6 text-xl text-muted-foreground">{subtitle}</p>
      </div>
      
      <Tabs defaultValue="evolution" className="w-full">
          <TabsList className="grid w-full grid-cols-3 mx-auto max-w-xl bg-white/5 p-1 rounded-xl mb-12 border border-white/10">
            <TabsTrigger value="evolution" className="rounded-lg font-mono text-xs uppercase py-3 data-[state=active]:bg-accent data-[state=active]:text-white transition-all">
              {tabs.evolution}
            </TabsTrigger>
            <TabsTrigger value="skills" className="rounded-lg font-mono text-xs uppercase py-3 data-[state=active]:bg-accent data-[state=active]:text-white transition-all">
              {tabs.skills}
            </TabsTrigger>
            <TabsTrigger value="languages" className="rounded-lg font-mono text-xs uppercase py-3 data-[state=active]:bg-accent data-[state=active]:text-white transition-all">
              {tabs.languages}
            </TabsTrigger>
          </TabsList>
          
          <TabsContent value="evolution" className="focus-visible:ring-0">
            <div className="grid gap-6 md:grid-cols-2">
              {learningPath.items.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="h-full bg-white/5 border-white/10 hover:bg-white/10 transition-all border-l-4 border-l-accent rounded-l-none">
                    <CardHeader>
                      <div className="flex items-center justify-between mb-2">
                        <Badge variant="outline" className="font-mono text-[9px] uppercase tracking-widest text-muted-foreground border-white/20">{item.category}</Badge>
                        <span className="flex items-center gap-1.5 text-[10px] font-mono text-amber-500/80">
                            <Rocket className="h-3 w-3" /> {learningPath.status}
                        </span>
                      </div>
                      <CardTitle className="text-xl font-mono">{item.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-muted-foreground leading-relaxed">{item.description}</CardDescription>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>

          <TabsContent value="skills" className="focus-visible:ring-0">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 w-full bg-accent" />
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tighter">{professionalSkills.processManagement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-4">
                    {professionalSkills.processManagement.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="mt-1 h-5 w-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-base text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
              <Card className="bg-white/5 border-white/10 backdrop-blur-sm overflow-hidden">
                <div className="h-1 w-full bg-accent/40" />
                <CardHeader>
                  <CardTitle className="text-xl font-mono uppercase tracking-tighter">{professionalSkills.softSkills.title}</CardTitle>
                </CardHeader>
                <CardContent>
                <ul className="space-y-4">
                    {professionalSkills.softSkills.skills.map((skill, index) => (
                      <li key={index} className="flex items-start gap-3 group">
                        <div className="mt-1 h-5 w-5 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0 group-hover:bg-accent group-hover:text-white transition-all duration-300">
                          <Check className="h-3 w-3" />
                        </div>
                        <span className="text-base text-muted-foreground">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="languages" className="focus-visible:ring-0">
            <div className="grid gap-6 md:grid-cols-3">
              {languages.items.map((lang, index) => (
                  <motion.div
                    key={lang.language}
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    <Card className="bg-white/5 border-white/10 text-center py-8 hover:border-accent/40 transition-all backdrop-blur-sm">
                        <CardHeader>
                            <Globe className="h-10 w-10 mx-auto text-accent/60 mb-2" />
                            <CardTitle className="text-2xl font-mono">{lang.language}</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="inline-block px-4 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent font-mono text-xs">
                              {lang.level}
                            </div>
                            {lang.description && <p className="text-sm text-muted-foreground mt-4">{lang.description}</p>}
                        </CardContent>
                    </Card>
                  </motion.div>
              ))}
            </div>
          </TabsContent>
      </Tabs>
    </div>
  );
};

export default CareerSection;
"use client";

import { useState, useEffect, useCallback } from 'react';
import { SectionWrapper } from '@/components/section-wrapper';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { skills, skillCategories } from '@/lib/data';
import type { SkillCategory } from '@/lib/data';
import Image from 'next/image';
import Link from 'next/link';

const SkillsSection = () => {
  const [activeTab, setActiveTab] = useState<SkillCategory>('backend');

  const getNextTab = useCallback(() => {
    const currentIndex = skillCategories.findIndex((c) => c.id === activeTab);
    const nextIndex = (currentIndex + 1) % skillCategories.length;
    return skillCategories[nextIndex].id;
  }, [activeTab]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab(getNextTab());
    }, 3000); 

    return () => clearInterval(timer);
  }, [activeTab, getNextTab]);

  return (
    <SectionWrapper id="skills" className="bg-muted/40 dark:bg-card">
      <div className="text-center">
        <h2 className="text-3xl font-bold tracking-tight font-headline sm:text-4xl">Technical Skills</h2>
        <p className="mt-4 text-lg text-muted-foreground">A showcase of my technical abilities and tools I use.</p>
      </div>
      <div className="mt-12">
        <Tabs value={activeTab} onValueChange={(value) => setActiveTab(value as SkillCategory)} className="w-full">
          <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 h-auto">
            {skillCategories.map((category) => (
              <TabsTrigger key={category.id} value={category.id} className="py-2">
                {category.title}
              </TabsTrigger>
            ))}
          </TabsList>
          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-6 mt-8">
                {skills
                  .filter((skill) => skill.category === category.id)
                  .map((skill) => (
                    <Link key={skill.name} href={skill.url} target="_blank" rel="noopener noreferrer" className="group">
                      <Card className="flex flex-col items-center justify-center p-4 md:p-6 text-center group hover:bg-accent/10 transition-all duration-300 transform hover:-translate-y-1 h-full">
                        <CardContent className="p-0 flex flex-col items-center justify-center gap-4">
                          <div className="relative h-12 w-12 flex items-center justify-center bg-white dark:bg-transparent rounded-lg p-1">
                            {typeof skill.icon === 'string' ? (
                               <Image src={skill.icon} alt={`${skill.name} logo`} width={48} height={48} className="object-contain" />
                            ) : (
                              <skill.icon className="h-10 w-10 text-primary group-hover:text-accent-foreground transition-colors" />
                            )}
                          </div>
                          <span className="text-sm font-medium text-center">{skill.name}</span>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </SectionWrapper>
  );
};

export default SkillsSection;

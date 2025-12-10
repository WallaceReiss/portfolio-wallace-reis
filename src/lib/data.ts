import type { LucideIcon } from "lucide-react";
import {
    Server, Briefcase, Workflow, MessageSquare, Users, BookText, Lock, Award
} from 'lucide-react';

export type SkillCategory = 'backend' | 'frontend' | 'tools' | 'methodologies';

export interface Skill {
  name: string;
  icon: string | LucideIcon;
  category: SkillCategory;
  url: string;
}

export const skills: Skill[] = [
  { name: 'NodeJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', category: 'backend', url: 'https://nodejs.org/' },
  { name: 'NestJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nestjs/nestjs-original.svg', category: 'backend', url: 'https://nestjs.com/' },
  { name: 'PrismaORM', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cypress/cypress-original.svg', category: 'backend', url: 'https://www.prisma.io/' },
  { name: 'MongoDB', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg', category: 'backend', url: 'https://www.mongodb.com/' },
  { name: 'Express', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg', category: 'backend', url: 'https://expressjs.com/' },
  { name: 'Fastify', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastify/fastify-original.svg', category: 'backend', url: 'https://www.fastify.io/' },
  { name: 'JWT', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/jsonwebtokens.svg', category: 'backend', url: 'https://jwt.io/' },
  { name: 'Swagger', icon: 'https://cdn.jsdelivr.net/npm/simple-icons@latest/icons/swagger.svg', category: 'backend', url: 'https://swagger.io/' },
  { name: 'Supabase', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/supabase/supabase-original.svg', category: 'backend', url: 'https://supabase.io/' },
  { name: 'Google Cloud', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', category: 'backend', url: 'https://cloud.google.com/' },
  { name: 'REST API', icon: Server, category: 'backend', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API' },
  { name: 'Authentication', icon: Lock, category: 'backend', url: 'https://firebase.google.com/docs/auth' },

  { name: 'Angular', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg', category: 'frontend', url: 'https://angular.io/' },
  { name: 'NextJS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', category: 'frontend', url: 'https://nextjs.org/' },
  { name: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', category: 'frontend', url: 'https://reactjs.org/' },
  { name: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', category: 'frontend', url: 'https://www.typescriptlang.org/' },
  
  { name: 'Jest', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg', category: 'tools', url: 'https://jestjs.io/' },
  { name: 'Cypress', icon: '/images/cypress.svg', category: 'tools', url: 'https://www.cypress.io/' },
  { name: 'Jira', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg', category: 'tools', url: 'https://www.atlassian.com/software/jira' },
  { name: 'Notion', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/notion/notion-original.svg', category: 'tools', url: 'https://www.notion.so/' },
  { name: 'Axios', icon: '/images/axios.svg', category: 'tools', url: 'https://axios-http.com/' },
  { name: 'Documentations', icon: BookText, category: 'tools', url: '#' },

  { name: 'Process Expertise', icon: Workflow, category: 'methodologies', url: '#' },
  { name: 'Operations Management', icon: Briefcase, category: 'methodologies', url: '#' },
  { name: 'Excellent Communicator', icon: MessageSquare, category: 'methodologies', url: '#' },
  { name: 'CRM', icon: Users, category: 'methodologies', url: '#' },
];

export const skillCategories: { id: SkillCategory; title: string }[] = [
    { id: 'backend', title: 'Backend' },
    { id: 'frontend', title: 'Frontend' },
    { id: 'tools', title: 'Tools' },
    { id: 'methodologies', title: 'Skills & Methodologies' },
];

export const awards = [
  {
    icon: Award,
    title: 'Campeão do StartUp Weekend',
    year: '2022',
    description: 'Winner of the best startup idea in 54 hours at an event held in São Paulo in July 2022, creating a complete e-commerce platform for electric vehicles and their entire ecosystem of products and services.',
  },
];

export const languages = [
  { name: "Português", level: 100, proficiency: "Nativo" },
  { name: "English", level: 75, proficiency: "B1/B2 - Professional" },
  { name: "Español", level: 60, proficiency: "B1 - Intermediate" },
];


export const hobbyDetails = [
  {
    title: 'Soccer',
    imageId: 'hobby-soccer',
    gallery: ['hobby-soccer-1', 'hobby-soccer-2', 'hobby-soccer-3'],
  },
  {
    title: 'Billiard',
    imageId: 'hobby-billiards',
    gallery: ['hobby-billiards-1', 'hobby-billiards-2', 'hobby-billiards-3'],
  },
  {
    title: 'My Dog (Liza)',
    imageId: 'hobby-pets',
    gallery: ['hobby-pets-1', 'hobby-pets-2', 'hobby-pets-3'],
  },
  {
    title: 'Travell',
    imageId: 'hobby-travel',
    gallery: ['hobby-travel-1', 'hobby-travel-2', 'hobby-travel-3'],
  },
];

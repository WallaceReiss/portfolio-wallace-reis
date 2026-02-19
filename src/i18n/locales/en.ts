import { PortfolioData } from './pt';

export const portfolioData: PortfolioData = {
  common: {
    loading: 'Loading...',
    location: 'São Paulo, Brazil',
    viewProject: 'View Project'
  },
  nav: {
    home: 'Home',
    about: 'About',
    skills: 'Skills',
    projects: 'Projects',
    career: 'Career',
    personal: 'Personal',
    contact: 'Contact',
  },
  hero: {
    name: 'Wallace Reis Oliveira',
    roles: [
      'Full Stack Software Developer',
      'Product Owner',
      'Tech Lead',
      'Operational Processes'
    ],
    education: [
      { title: 'Electrical Electronic Engineering', year: '2017', institution: 'Universidade Paulista' },
      { title: 'Systems Analysis and Development', year: '2021', institution: 'Universidade Paulista' }
    ],
    languages: [
      { lang: 'Portuguese', level: 'Native' },
      { lang: 'English', level: 'B2 Level' },
      { lang: 'Spanish', level: 'B1 Level' }
    ],
    tagline: 'Building scalable architectures and high-performance digital products with a focus on technical excellence and business vision.',
    availability: 'Global availability (Any country or city)',
  },
  about: {
    title: 'Autonomous Software Engineering',
    paragraph1: 'As an Autonomous Architect and Senior Developer, I lead the full lifecycle of high-complexity digital products. My core stack involves Next.js, React, and Node.js with TypeScript, utilizing modular and scalable architectures in NestJS to ensure long-term maintainability and high performance under load.',
    paragraph2: 'I conceptualized and developed "Tech Recruit," a disruptive matchmaking platform connecting companies with elite talent, optimizing seniority filters and complex hiring workflows. I specialize in integrating AI Agents with Python for the energy market, alongside a solid foundation in enterprise languages like Java and .NET (C#) for robust legacy systems.',
    paragraph3: 'Total focus on efficiency and security: I use advanced AI prompts for code auditing and automation, implement rigorous encryption protocols, and granular access control. My deliveries are based on Core Web Vitals, automated testing (E2E/Unit), and user-centered design, ensuring products that don\'t just work—they perform and deliver ROI.',
  },
  professionalProfile: {
    title: 'Executive Leadership (Safira Group)',
    paragraph1: 'At Safira Group (2021-2025), I served as Tech Lead and Full Stack Developer, primarily responsible for the architecture and evolution of the corporate CRM focused on Distributed Generation (Solar). I led the modernization of the ecosystem using TypeScript, Angular, and Node.js, supporting the critical management of thousands of consumer units.',
    paragraph2: 'I acted as a strategic bridge between Engineering and Operations, Call Center, and Sales. My technical process analysis identified critical bottlenecks, resulting in the implementation of billing and management automations that generated a direct 7% increase in monthly revenue in the very first month of deployment.',
    paragraph3: 'As a large-scale data ecosystem specialist, I optimized complex PostgreSQL queries and managed Google Cloud Platform (GCP) infrastructure. My resource optimization and deployment automation actions reduced cloud operational costs by 15%, ensuring the stability required for accelerated business growth.',
  },
  skills: {
    title: 'Hard Skills',
    subtitle: 'Technical mastery focused on scalability, clean architecture, and continuous value delivery.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Database',
      cloud: 'Cloud & DevOps',
      tools: 'Tools & Management',
      ai: 'Artificial Intelligence'
    },
    techStack: [
      { name: 'Next.js', category: 'Frontend', description: 'SSR, SSG, and App Router for high-performance applications.' },
      { name: 'React', category: 'Frontend', description: 'Dynamic and component-based interface development.' },
      { name: 'Angular', category: 'Frontend', description: 'Enterprise applications with robust architecture and RxJS.' },
      { name: 'TypeScript', category: 'Frontend', description: 'Static typing for secure and maintainable code.' },
      { name: 'Tailwind CSS', category: 'Frontend', description: 'Modern and responsive styling with a focus on productivity.' },
      { name: 'SOLID & Clean Code', category: 'Frontend', description: 'Design patterns for decoupled architectures.' },
      { name: 'Node.js', category: 'Backend', description: 'Scalable runtime for high-concurrency APIs and microservices.' },
      { name: 'NestJS', category: 'Backend', description: 'Modular architecture inspired by Angular for Node.js.' },
      { name: 'RabbitMQ', category: 'Backend', description: 'Messaging for distributed and asynchronous systems.' },
      { name: 'Redis', category: 'Backend', description: 'In-memory cache for latency reduction and high performance.' },
      { name: 'Jest', category: 'Backend', description: 'Unit and integration tests to ensure quality.' },
      { name: 'Python', category: 'Backend', description: 'Focus on data automation and AI model integration.' },
      { name: 'PostgreSQL', category: 'Database', description: 'Advanced modeling, query optimization, and integrity.' },
      { name: 'Firebase Database', category: 'Database', description: 'High-scale NoSQL (Firestore/Realtime) and real-time sync.' },
      { name: 'Firebase Storage', category: 'Database', description: 'Scalable cloud file and media asset management.' },
      { name: 'MongoDB', category: 'Database', description: 'NoSQL databases for high schema flexibility.' },
      { name: 'GCP', category: 'Cloud & DevOps', description: 'Complete management of infrastructure and Google services.' },
      { name: 'AWS', category: 'Cloud & DevOps', description: 'S3, EC2, Lambda and cloud computing ecosystem.' },
      { name: 'Docker', category: 'Cloud & DevOps', description: 'Containerization for consistent and portable environments.' },
      { name: 'GCP (Compute, Cloud Run, IAM, Storage)', category: 'Cloud & DevOps', description: 'Comprehensive management of Google Cloud infrastructure and services.' },
      { name: 'Vercel', category: 'Cloud & DevOps', description: 'Deployment and hosting platform for frontend applications.' },
      { name: 'Supabase', category: 'Cloud & DevOps', description: 'Backend as a Service (BaaS) platform for building scalable applications.' },
      { name: 'Firebase', category: 'Cloud & DevOps', description: 'Backend as a Service (BaaS) platform for building scalable applications.' },
      { name: 'JWT', category: 'Cloud & DevOps', description: 'JSON Web Token for secure authentication and authorization.' },
      { name: 'Multitenancy', category: 'Cloud & DevOps', description: 'Support for multiple tenants in a single application instance.' },
      { name: 'Webhooks', category: 'Cloud & DevOps', description: 'Real-time notifications and integrations with external services.' },
      { name: 'Claude Sonnet', category: 'Artificial Intelligence', description: 'Advanced reasoning and complex code generation with AI.' },
      { name: 'ChatGPT / GPT-4', category: 'Artificial Intelligence', description: 'Workflow optimization and logic debugging assistance.' },
      { name: 'Gemini', category: 'Artificial Intelligence', description: 'Multimodal model integration for intelligent automation.' },
      { name: 'V0.dev', category: 'Artificial Intelligence', description: 'Ultra-fast UI component generation and prototyping.' },
      { name: 'Lovable', category: 'Artificial Intelligence', description: 'AI-driven fullstack application creation.' },
      { name: 'Jira', category: 'Tools & Management', description: 'Agile project management.' },
      { name: 'Trello', category: 'Tools & Management', description: 'Task and workflow organization.' },
      { name: 'Notion', category: 'Tools & Management', description: 'Task and documentation organization.' },
      { name: 'Swagger', category: 'Tools & Management', description: 'API documentation and testing.' },
      { name: 'Postman', category: 'Tools & Management', description: 'API testing and development.' },
      { name: 'Git', category: 'Tools & Management', description: 'Version control and collaboration.' },
      { name: 'GitHub', category: 'Tools & Management', description: 'Code hosting and CI/CD.' },
    ]
  },
  projects: {
    title: 'Strategic Projects',
    subtitle: 'Engineering solutions that turn complexity into performance.',
    items: [
      {
        id: 'tech-recruit',
        title: 'Tech Recruit',
        description: 'Disruptive matchmaking platform connecting companies with elite talent, with seniority filters and automated workflows.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
        imageId: 'project-tech-recruit',
        link: 'https://tech-recruiters-front.vercel.app/'
      },
      {
        id: 'easy-money',
        title: 'Easy Money',
        description: 'Financial loan management system with compound interest calculations, amortization, and risk analysis.',
        stack: ['.NET Core', 'SQL Server', 'React', 'TypeScript'],
        imageId: 'project-easy-money',
        link: 'https://easymoney.wro.dev'
      },
      {
        id: 'gl-sports',
        title: 'GL Sports',
        description: 'Complete gym management ecosystem, controlling memberships, training sheets, and financial health.',
        stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        imageId: 'project-gl-sports',
        link: 'https://glsports.wro.dev'
      },
      {
        id: 'psy-health',
        title: 'Psy Health',
        description: 'Secure platform for patient management in psychology, featuring encrypted records and session control.',
        stack: ['Angular', 'NestJS', 'Firebase', 'TypeScript'],
        imageId: 'project-psy-health',
        link: 'https://psyhealth.wro.dev'
      }
    ]
  },
  footer: {
    copyrightOwner: 'Wallace Reis Oliveira',
    copyright: 'All rights reserved',
    aboutMeSlider: {
      title: 'Beyond the Code',
      subtitle: 'A bit about my journey, hobbies, and moments off-screen.'
    }
  }
};

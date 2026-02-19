export const portfolioData = {
  common: {
    loading: 'Carregando...',
    location: 'São Paulo, Brasil',
    viewProject: 'Ver Projeto'
  },
  nav: {
    home: 'Início',
    about: 'Sobre',
    skills: 'Skills',
    projects: 'Projetos',
    career: 'Carreira',
    personal: 'Pessoal',
    contact: 'Contato',
  },
  hero: {
    name: 'Wallace Reis Oliveira',
    roles: [
      'Desenvolvedor de Software Full Stack',
      'Product Owner',
      'Tech Lead',
      'Processos Operacionais'
    ],
    education: [
      { title: 'Engenharia Elétrica Eletrônica', year: '2017', institution: 'Universidade Paulista' },
      { title: 'Análise e desenvolvimento de sistemas', year: '2021', institution: 'Universidade Paulista' }
    ],
    languages: [
      { lang: 'Português', level: 'Nativo' },
      { lang: 'Inglês', level: 'B2 Level' },
      { lang: 'Espanhol', level: 'B1 Level' }
    ],
    tagline: 'Construindo arquiteturas escaláveis e produtos digitais de alta performance com foco em excelência técnica e visão de negócio.',
    availability: 'Disponibilidade para atuação global (Qualquer país ou cidade)',
  },
  about: {
    title: 'Engenharia de Software Autônoma',
    paragraph1: 'Como Arquiteto e Desenvolvedor Sênior Autônomo, lidero o ciclo de vida completo de produtos digitais de alta complexidade. Minha stack principal envolve Next.js, React e Node.js com TypeScript, utilizando arquiteturas modulares e escaláveis em NestJS para garantir manutenibilidade a longo prazo e alta performance sob carga.',
    paragraph2: 'Idealizei e desenvolvi o "Tech Recruit", uma plataforma disruptiva de matchmaking que conecta empresas a talentos de elite, otimizando filtros de senioridade e regimes de contratação complexos. Domino a integração de Agentes de IA com Python para o mercado de energia, além de possuir sólida base em linguagens enterprise como Java e .NET (C#) para sistemas legados e robustos.',
    paragraph3: 'Foco total em eficiência e segurança: utilizo prompts de IA avançados para auditoria de código e automação, implemento protocolos rigorosos de criptografia e controle de acesso granular. Minhas entregas são pautadas em Core Web Vitals, testes automatizados (E2E/Unit) e um design centrado no usuário, garantindo produtos que não apenas funcionam, mas performam e geram ROI.',
  },
  professionalProfile: {
    title: 'Liderança Executiva (Grupo Safira)',
    paragraph1: 'No Grupo Safira (2021-2025), atuei como Tech Lead e Desenvolvedor Full Stack, sendo o principal responsável pela arquitetura e evolução do CRM corporativo focado em Geração Distribuída (Solar). Lideri a modernização do ecossistema utilizando TypeScript, Angular e Node.js, suportando a gestão crítica de milhares de unidades consumidoras.',
    paragraph2: 'Atuei como ponte estratégica entre a Engenharia e as áreas de Operações, Call Center e Vendas. Minha análise técnica de processos permitiu identificar gargalos críticos, resultando na implementação de automações de faturamento e gestão que geraram um aumento direto de 7% no faturamento mensal logo no primeiro mês de implantação.',
    paragraph3: 'Especialista em ecossistemas de dados de alta escala, otimizei consultas complexas em PostgreSQL e gerenciei infraestrutura em Google Cloud Platform (GCP). Minhas ações de otimização de recursos e automação de deploys reduziram custos operacionais de cloud em 15%, garantindo a estabilidade necessária para o crescimento acelerado do negócio.',
  },
  skills: {
    title: 'Hard Skills',
    subtitle: 'Domínio técnico focado em escalabilidade, arquitetura limpa e entrega de valor contínuo.',
    categories: {
      frontend: 'Frontend',
      backend: 'Backend',
      database: 'Banco de Dados',
      cloud: 'Cloud & DevOps',
      tools: 'Ferramentas & Gestão',
      ai: 'Inteligência Artificial'
    },
    techStack: [
      { name: 'Next.js', category: 'Frontend', description: 'SSR, SSG e App Router para aplicações de alta performance.' },
      { name: 'React', category: 'Frontend', description: 'Desenvolvimento de interfaces dinâmicas e baseadas em componentes.' },
      { name: 'Angular', category: 'Frontend', description: 'Aplicações enterprise com arquitetura robusta e RxJS.' },
      { name: 'TypeScript', category: 'Frontend', description: 'Tipagem estática para código seguro e manutenível.' },
      { name: 'Tailwind CSS', category: 'Frontend', description: 'Estilização moderna e responsiva com foco em produtividade.' },
      { name: 'SOLID & Clean Code', category: 'Frontend', description: 'Padrões de design para arquiteturas desacopladas.' },
      { name: 'Node.js', category: 'Backend', description: 'Runtime escalável para APIs e microsserviços de alta concorrência.' },
      { name: 'NestJS', category: 'Backend', description: 'Arquitetura modular inspirada em Angular para Node.js.' },
      { name: 'RabbitMQ', category: 'Backend', description: 'Mensageria para sistemas distribuídos e assíncronos.' },
      { name: 'Redis', category: 'Backend', description: 'Cache em memória para redução de latência e alta performance.' },
      { name: 'Jest', category: 'Backend', description: 'Testes unitários e de integração para garantir qualidade.' },
      { name: 'Python', category: 'Backend', description: 'Foco em automação de dados e integração de modelos de IA.' },
      { name: 'PostgreSQL', category: 'Banco de Dados', description: 'Modelagem avançada, otimização de queries e integridade.' },
      { name: 'Firebase Database', category: 'Banco de Dados', description: 'Bancos NoSQL (Firestore/Realtime) para alta escala e sincronismo.' },
      { name: 'Firebase Storage', category: 'Banco de Dados', description: 'Gerenciamento de arquivos e ativos de mídia escaláveis.' },
      { name: 'MongoDB', category: 'Banco de Dados', description: 'Bancos NoSQL para alta flexibilidade de schemas.' },
      { name: 'GCP', category: 'Cloud & DevOps', description: 'Gerenciamento completo de infraestrutura e serviços Google.' },
      { name: 'AWS', category: 'Cloud & DevOps', description: 'S3, EC2, Lambda e ecossistema de cloud computing.' },
      { name: 'Docker', category: 'Cloud & DevOps', description: 'Conteinerização para ambientes consistentes e portáveis.' },
      { name: 'GCP (Compute, Cloud Run, IAM, Storage)', category: 'Cloud & DevOps', description: 'Gerenciamento abrangente da infraestrutura e serviços do Google Cloud.' },
      { name: 'Vercel', category: 'Cloud & DevOps', description: 'Plataforma de deployment e hospedagem para aplicações frontend.' },
      { name: 'Supabase', category: 'Cloud & DevOps', description: 'Plataforma Backend as a Service (BaaS) para construção de aplicações escaláveis.' },
      { name: 'Firebase', category: 'Cloud & DevOps', description: 'Plataforma Backend as a Service (BaaS) para construção de aplicações escaláveis.' },
      { name: 'JWT', category: 'Cloud & DevOps', description: 'JSON Web Token para autenticação e autorização seguras.' },
      { name: 'Multitenancy', category: 'Cloud & DevOps', description: 'Suporte para múltiplos inquilinos em uma única instância de aplicação.' },
      { name: 'Webhooks', category: 'Cloud & DevOps', description: 'Notificações em tempo real e integrações com serviços externos.' },
      { name: 'Claude Sonnet', category: 'Inteligência Artificial', description: 'Raciocínio avançado e geração de código complexo com IA.' },
      { name: 'ChatGPT / GPT-4', category: 'Inteligência Artificial', description: 'Otimização de fluxos de trabalho e depuração de lógica.' },
      { name: 'Gemini', category: 'Inteligência Artificial', description: 'Integração de modelos multimodais para automação inteligente.' },
      { name: 'V0.dev', category: 'Inteligência Artificial', description: 'Geração e prototipagem ultra-rápida de componentes UI.' },
      { name: 'Lovable', category: 'Inteligência Artificial', description: 'Criação de aplicações fullstack guiadas por IA.' },
      { name: 'Jira', category: 'Ferramentas & Gestão', description: 'Gestão de projetos ágeis.' },
      { name: 'Trello', category: 'Ferramentas & Gestão', description: 'Organização de tarefas e fluxos.' },
      { name: 'Notion', category: 'Ferramentas & Gestão', description: 'Organização de tarefas e documentações.' },
      { name: 'Swagger', category: 'Ferramentas & Gestão', description: 'Documentação e testes de APIs.' },
      { name: 'Postman', category: 'Ferramentas & Gestão', description: 'Testes e desenvolvimento de APIs.' },
      { name: 'Git', category: 'Ferramentas & Gestão', description: 'Controle de versão e colaboração.' },
      { name: 'GitHub', category: 'Ferramentas & Gestão', description: 'Hospedagem de código e CI/CD.' },

    ]
  },
  projects: {
    title: 'Projetos Estratégicos',
    subtitle: 'Soluções de engenharia que transformam complexidade em performance.',
    items: [
      {
        id: 'tech-recruit',
        title: 'Tech Recruit',
        description: 'Plataforma disruptiva de matchmaking que conecta empresas a talentos de elite, com filtros de senioridade e fluxos automatizados.',
        stack: ['Next.js', 'NestJS', 'PostgreSQL', 'TypeScript'],
        imageId: 'project-tech-recruit',
        link: 'https://tech-recruiters-front.vercel.app/'
      },
      {
        id: 'easy-money',
        title: 'Easy Money',
        description: 'Sistema financeiro de gerenciamento de empréstimos com cálculo de juros compostos, amortização e análise de risco.',
        stack: ['.NET Core', 'SQL Server', 'React', 'TypeScript'],
        imageId: 'project-easy-money',
        link: 'https://easymoney.wro.dev'
      },
      {
        id: 'gl-sports',
        title: 'GL Sports',
        description: 'Ecossistema completo para gestão de academias, controlando desde matrículas e treinos até a saúde financeira do negócio.',
        stack: ['React', 'Node.js', 'MongoDB', 'Tailwind'],
        imageId: 'project-gl-sports',
        link: 'https://glsports.wro.dev'
      },
      {
        id: 'psy-health',
        title: 'Psy Health',
        description: 'Plataforma segura para gestão de pacientes em psicologia, com prontuários criptografados e controle de sessões.',
        stack: ['Angular', 'NestJS', 'Firebase', 'TypeScript'],
        imageId: 'project-psy-health',
        link: 'https://psyhealth.wro.dev'
      }
    ]
  },
  footer: {
    copyrightOwner: 'Wallace Reis Oliveira',
    copyright: 'Todos os direitos reservados',
    aboutMeSlider: {
      title: 'Além do Código',
      subtitle: 'Um pouco sobre minha jornada, hobbies e momentos fora da tela.'
    }
  }
};

export type TechItem = {
  name: string;
  category: string;
  description: string;
};

export type TechCategory = keyof typeof portfolioData.skills.categories;

export type PortfolioData = typeof portfolioData;

// src/data/projects.ts

export type Project = {
  slug: string;
  mission: string;
  title: string;
  stack: string[];
  description: string;
  status: 'concluida' | 'em-orbita' | 'em-desenvolvimento';
  href?: string;
  github?: string;
  moduleId: string;
};

export const projects: Project[] = [
  {
    slug: 'deteccao-exoplanetas',
    mission: 'MISSAO #001',
    title: 'Deteccao de exoplanetas',
    stack: ['Python', 'Astropy', 'Pandas', 'ML'],
    description: 'Modelo de machine learnign para análise de curvas de luz para identificar transitos planetarios.',
    status: 'concluida',
    moduleId: 'science',
  },
  // Adicione mais projetos aqui
];

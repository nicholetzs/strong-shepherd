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
  previewImage?: string;
};

export const projects: Project[] = [
  {
    slug: 'deteccao-exoplanetas',
    mission: 'MISSAO #001',
    title: 'Detecção de exoplanetas',
    stack: ['Python', 'Astropy', 'Pandas', 'ML'],
    description: 'Modelo de machine learnign para análise de curvas de luz para identificar transitos planetarios.',
    status: 'em-orbita',
    moduleId: 'science',
    previewImage: '',
  },
   {
    slug: 'analise-dados-covid',
    mission: 'MISSAO #002',
    title: 'Análise de dados de covid-19',
    stack: ['Python', 'Streamlit', 'Pandas'],
    description: 'Análise de dados de covid-19 para identificar padrões de propagação e impacto em diferentes regiões.',
    status: 'concluida',
    moduleId: 'science',
    href: 'https://xawpfum7gezaxhvqwlphtb.streamlit.app/', // Se não tem href, abre /projects/${project.slug}/
    github: 'https://github.com/nicholetzs/KDD',
    previewImage: '/projects/analise-dados-covid.png',
  },
  {
  slug: 'geotec-notebooks',
  mission: 'MISSAO #003',
  title: 'Programação para dados geoespaciais',
  stack: ['Jupyter Notebook', 'Python', 'Geoprocessamento'],
  description: 'Coleção de notebooks e estudos de programação aplicada a dados geoespaciais.',
  status: 'concluida',
  moduleId: 'geotec',
  href: 'https://github.com/nicholetzs/geotec/tree/main/prog-geo',
  github: 'https://github.com/nicholetzs/geotec/tree/main/prog-geo',
  previewImage: '/projects/catalogo-imagens-inpe.png',
}
  // Adicione mais projetos aqui
];

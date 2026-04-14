// src/data/modules.ts

export type PortfolioModule = {
  id: string;
  codeName: string;
  title: string;
  subtitle: string;
  href: string;
  status?: string;
  kind: 'about' | 'science' | 'software' | 'data' | 'writing' | 'geotec';
};

export const modules: PortfolioModule[] = [
  {
    id: 'about',
    codeName: 'MODULO NICHOLE',
    title: 'sobre mim',
    subtitle: 'origens · missão',
    href: '/modules/sobre-mim/',
    kind: 'about',
  },
  {
    id: 'software',
    codeName: 'MODULO COMP.',
    title: 'software',
    subtitle: 'projetos · código',
    href: '/modules/software/',
    status: 'EM ORBITA',
    kind: 'software',
  },
  {
    id: 'data',
    codeName: 'MODULO DADOS',
    title: 'dados',
    subtitle: 'analise · visualizacao',
    href: '#dados',
    kind: 'data',
  },
  {
    id: 'writing',
    codeName: 'MODULO ESCRITA',
    title: 'escrita',
    subtitle: 'artigos · publicações',
    href: '#escrita',
    kind: 'writing',
  },
  {
    id: 'science',
    codeName: 'MODULO CIENCIA',
    title: 'ciência',
    subtitle: 'pesquisa · descobertas',
    href: '#ciencia',
    kind: 'science',
  },
  {
    id: 'geotec',
    codeName: 'MODULO GEOTEC',
    title: 'geotec',
    subtitle: 'notebooks / geociencias',
    href: 'https://github.com/nicholetzs/geotec/tree/main/prog-geo',
    status: 'LAB ATIVO',
    kind: 'geotec',
  }
];

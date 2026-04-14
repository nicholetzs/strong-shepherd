// src/data/modules.ts

export type PortfolioModule = {
  id: string;
  codeName: string;
  title: string;
  subtitle: string;
  href: string;
  status?: string;
  kind: 'about' | 'science' | 'software' | 'data' | 'writing';
};

export const modules: PortfolioModule[] = [
  {
    id: 'about',
    codeName: 'MODULO NICHOLE',
    title: 'sobre mim',
    subtitle: 'origens · missão',
    href: '#sobre',
    kind: 'about',
  },
  {
    id: 'software',
    codeName: 'MODULO COMP.',
    title: 'software',
    subtitle: 'projetos · código',
    href: '#projetos',
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
  }
];

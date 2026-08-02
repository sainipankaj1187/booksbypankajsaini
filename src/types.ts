export type PageKey =
  | 'home'
  | 'books'
  | 'badoga'
  | 'marbella'
  | 'ambakvid'
  | 'aragbat'
  | 'universe'
  | 'writing'
  | 'about';

export type Book = {
  slug: string;
  title: string;
  seriesLabel: string;
  year: string;
  format: string;
  status: 'Published' | 'Upcoming';
  cover: string;
  shortDescription: string;
  description: string[];
  amazonIndia?: string;
  details: Array<[string, string]>;
  themes: string[];
};

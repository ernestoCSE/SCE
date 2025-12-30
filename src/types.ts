export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link?: string;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  iconType: 'fingerprint' | 'zap' | 'box';
  features: string[];
}

export interface Package {
  id: number;
  name: string;
  label: string;
  labelColor: 'gray' | 'gold';
  description: string;
  features: string[];
  isFeatured?: boolean;
}
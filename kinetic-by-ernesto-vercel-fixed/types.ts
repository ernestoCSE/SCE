export interface Project {
  id: string;
  title: string;
  category: 'Branding' | 'Posters' | 'Social Media' | 'Eventos' | 'Motion';
  image: string;
  description: string;
  tools: string[];
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface Testimonial {
  id: string;
  name: string;
  company: string;
  text: string;
  stars: number;
}

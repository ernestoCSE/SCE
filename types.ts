
export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  category: string;
}

export interface MenuSection {
  title: string;
  items: MenuItem[];
}

export type SectionId = 'home' | 'menu' | 'location' | 'contact';

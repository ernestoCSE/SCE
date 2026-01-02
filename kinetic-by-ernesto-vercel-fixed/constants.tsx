import React from 'react';
import { Palette, Share2, Layers, MonitorPlay, Trophy } from 'lucide-react';
import { Project, Service, Testimonial } from './types';

export const NAVIGATION_LINKS = [
  { name: 'Inicio', href: '#inicio' },
  { name: 'Portafolio', href: '#portafolio' },
  { name: 'Servicios', href: '#servicios' },
  { name: 'Proceso', href: '#proceso' },
  { name: 'Testimonios', href: '#testimonios' },
];

export const SERVICES: Service[] = [
  {
    id: 'branding',
    title: 'Branding & Identidad',
    description: 'Logotipos, manuales de marca y sistemas visuales que definen el ADN de tu negocio.',
    icon: <Palette className="w-8 h-8 text-neon-blue" />,
  },
  {
    id: 'social',
    title: 'Diseño para Redes',
    description: 'Packs de contenido, plantillas editables e historias que detienen el scroll.',
    icon: <Share2 className="w-8 h-8 text-neon-lime" />,
  },
  {
    id: 'posters',
    title: 'Posters & Flyers',
    description: 'Arte visual de alto impacto para eventos, conciertos y promociones.',
    icon: <Layers className="w-8 h-8 text-neon-blue" />,
  },
  {
    id: 'motion',
    title: 'Motion & Reels',
    description: 'Animaciones dinámicas y edición de video para captar atención en segundos.',
    icon: <MonitorPlay className="w-8 h-8 text-neon-lime" />,
  },
  {
    id: 'events',
    title: 'Eventos Deportivos',
    description: 'Gráficos para torneos, overlays de transmisión y branding de equipos.',
    icon: <Trophy className="w-8 h-8 text-neon-blue" />,
  },
];

export const PROJECTS: Project[] = [
  {
    id: '1',
    title: 'Cyberpunk Energy',
    category: 'Branding',
    image: 'https://picsum.photos/600/600?random=1',
    description: 'Rebranding completo para una bebida energética enfocada en gamers. Identidad visual agresiva y moderna.',
    tools: ['Illustrator', 'Photoshop'],
  },
  {
    id: '2',
    title: 'Neon Nights Festival',
    category: 'Posters',
    image: 'https://picsum.photos/600/800?random=2',
    description: 'Serie de posters promocionales para festival de música electrónica.',
    tools: ['Photoshop', 'Midjourney'],
  },
  {
    id: '3',
    title: 'TechStart Instagram',
    category: 'Social Media',
    image: 'https://picsum.photos/600/600?random=3',
    description: 'Pack de 30 plantillas editables para startup tecnológica.',
    tools: ['Figma', 'Photoshop'],
  },
  {
    id: '4',
    title: 'Urban League Intro',
    category: 'Motion',
    image: 'https://picsum.photos/600/400?random=4',
    description: 'Intro animado de 15 segundos para liga de basket callejero.',
    tools: ['After Effects', 'Premiere'],
  },
  {
    id: '5',
    title: 'Marathon 2024',
    category: 'Eventos',
    image: 'https://picsum.photos/600/600?random=5',
    description: 'Identidad visual completa: dorsales, arcos de meta y redes sociales.',
    tools: ['Illustrator', 'InDesign'],
  },
  {
    id: '6',
    title: 'Future Corp',
    category: 'Branding',
    image: 'https://picsum.photos/600/600?random=6',
    description: 'Identidad corporativa minimalista para consultora de IA.',
    tools: ['Illustrator', 'Figma'],
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Carlos Ruiz',
    company: 'CEO, Nexus Tech',
    text: 'Ernesto captó la visión futurista de nuestra marca al instante. El rebranding aumentó nuestras conversiones un 40%.',
    stars: 5,
  },
  {
    id: '2',
    name: 'Sofía Méndez',
    company: 'Marketing, SportLife',
    text: 'La entrega fue rapidísima y los diseños para redes sociales tienen una calidad increíble. Super recomendado.',
    stars: 5,
  },
  {
    id: '3',
    name: 'Javier Torres',
    company: 'Eventos Nocturnos',
    text: 'Los posters que diseñó se robaron toda la atención en la ciudad. Definitivamente volveremos a trabajar juntos.',
    stars: 5,
  },
];
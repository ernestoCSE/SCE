
import { MenuSection } from './types';

export const MENU_DATA: MenuSection[] = [
  {
    title: "Le Nostre Pizza",
    items: [
      { name: "Pepperoni", description: "Salsa de Tomate, Mozzarella & Pepperoni", price: "$130 ó 2x$199", category: "Pizza" },
      { name: "Hawaiiana", description: "Salsa de Tomate, Mozzarella, Jamón & Piña", price: "$165", category: "Pizza" },
      { name: "4 Quesos", description: "Salsa de Tomate, Mozzarella & Variedad de 4 Quesos", price: "$170", category: "Pizza" },
      { name: "Margherita", description: "Salsa de Tomate, Mozzarella Fresca & Albahaca", price: "$165", category: "Pizza" },
      { name: "Vegetariana", description: "Salsa, Mozzarella, Cebolla Morada, Aceituna Negra, Champiñón, Pimiento, Tomate Cherry & Albahaca", price: "$175", category: "Pizza" },
      { name: "Mexicana", description: "Frijol, Mozzarella, Cebolla Morada, Pimiento, Chorizo & Jalapeño", price: "$190", category: "Pizza" },
      { name: "3 Carnes", description: "Salsa, Mozzarella, Pepperoni, Jamón & Salchicha Italiana", price: "$200", category: "Pizza" },
    ]
  },
  {
    title: "Specialità",
    items: [
      { name: "Il Padrino", description: "Salsa, Mozzarella, Pepperoni, Jamón, Chorizo, Salchicha Italiana & Aceituna Negra", price: "$230", category: "Specialità" },
      { name: "La Suprema", description: "Salsa, Mozzarella, Cebolla, Aceituna, Champiñón, Pimiento, Tomate Cherry, Albahaca, Salchicha & Pepperoni", price: "$240", category: "Specialità" },
      { name: "La Toscana", description: "Salsa, Mozzarella, Arúgula, Prosciutto, Laminas de Parmesano & Glaze Balsamic", price: "$250", category: "Specialità" },
    ]
  },
  {
    title: "Le Nostre Burger",
    items: [
      { name: "Classic Burger", description: "Carne de Res, Queso, Ketchup, Tomate, Cebolla & Lechuga", price: "Combo $180", category: "Burger" },
      { name: "Pizza Burguer", description: "Carne de Res, Salsa Marinara, Mozzarella & Pepperoni", price: "Combo $180", category: "Burger" },
      { name: "Caprese Burger", description: "Carne de Res, Pesto, Arúgula, Mozzarella Fresca & Tomate", price: "Combo $200", category: "Burger" },
    ]
  },
  {
    title: "La Pasta",
    items: [
      { name: "Pomodoro Basilico", price: "$100", category: "Pasta" },
      { name: "Alfredo", price: "$120", category: "Pasta" },
      { name: "Pesto", price: "$130", category: "Pasta" },
      { name: "Carbonara", price: "$160", category: "Pasta" },
    ]
  }
];

export const CONTACT_INFO = {
  address: "Diego de portola #664, Tijuana, Mexico",
  phone: "663 113 5740",
  email: "ernesto1984.esc@gmail.com",
  instagram: "@ilporcellinopizzeria",
  hours: "Cerrado ahora - Abre pronto",
};

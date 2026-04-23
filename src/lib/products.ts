export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  currency: string;
  image: string;
  colors: string[];
  sizes: string[];
}

export const products: Product[] = [
  {
    id: 'premium-kit-01',
    name: 'Elite Navy Pro Jersey',
    description: 'Experience the same performance as the pros with our moisture-wicking, ultra-breathable fabric. Features thin silver patterns and a sleek athletic fit.',
    price: 89.99,
    currency: 'EUR',
    image: '/premier_league_jersey_mockup_1776983491241.png',
    colors: ['#000080', '#C0C0C0'],
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: 'national-kit-01',
    name: 'Champion Edition Jersey',
    description: 'Vibrant red and green colors with gold accents. Made for the ultimate fan and athlete.',
    price: 95.00,
    currency: 'EUR',
    image: '/national_team_jersey_mockup.png', // Placeholder until I generate/find a real one or handle missing
    colors: ['#FF0000', '#008000', '#FFD700'],
    sizes: ['S', 'M', 'L', 'XL']
  }
];

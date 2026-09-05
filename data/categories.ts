import { Category } from '@/types';

export const categories: Category[] = [
  {
    id: 'ice-candy',
    name: 'Ice Candies',
    slug: 'ice-candy',
    description: '100% Real fruit pulps frozen on a stick for that refreshing cooling nostalgia.',
    image: '/images/products/ice-candy-orange.png',
    itemCount: 2,
    accentColor: '#FF8A00',
    lightBg: '#FFF3E0',
    badge: 'Real Fruit'
  },
  {
    id: 'kulfi',
    name: 'Traditional Kulfis',
    slug: 'kulfi',
    description: 'Slow-simmered desi rabdi kulfis, saffron sticks, and royal prism boxes.',
    image: '/images/products/mava-kulfi.png',
    itemCount: 4,
    accentColor: '#059669',
    lightBg: '#E6F8F2',
    badge: 'Desi Heritage'
  },
  {
    id: 'chocobars',
    name: 'Chocobars',
    slug: 'chocobars',
    description: 'Crispy Belgian couverture chocolate shells wrapped around velvety dairy ice cream.',
    image: '/images/products/mini-chocobar.png',
    itemCount: 2,
    accentColor: '#5D4037',
    lightBg: '#F5EBE6',
    badge: 'Classic'
  },
  {
    id: 'cups',
    name: 'Classic Cups',
    slug: 'cups',
    description: 'Pure artisanal churned ice cream in convenient spoon-in-lid single-serve tubs.',
    image: '/images/products/strawberry-cup.png',
    itemCount: 5,
    accentColor: '#FF4B72',
    lightBg: '#FFF8E1',
    badge: 'Everyday Joy'
  },
  {
    id: 'cones',
    name: 'Waffle Cones',
    slug: 'cones',
    description: 'Freshly baked waffle cones loaded with creamy swirls and crunchy nut crowns.',
    image: '/images/products/family-pack-tub.png',
    itemCount: 3,
    accentColor: '#D97706',
    lightBg: '#FEF3C7',
    badge: 'Bestseller'
  },
  {
    id: 'sundaes',
    name: 'Sundaes & Slices',
    slug: 'sundaes',
    description: 'Decadent multi-layered Italian Cassata slices with sponge cake and cashew nuts.',
    image: '/images/products/cassata-slice.png',
    itemCount: 1,
    accentColor: '#059669',
    lightBg: '#ECFDF5',
    badge: 'Party Special'
  }
];

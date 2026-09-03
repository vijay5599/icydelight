export interface NavItem {
  title: string;
  href: string;
}

export const navigationLinks: NavItem[] = [
  { title: 'Home', href: '/' },
  { title: 'Products', href: '/products' },
  { title: 'About', href: '/about' },
  { title: 'Distributor', href: '/distributor' },
  { title: 'Store Locator', href: '/store-locator' },
  { title: 'Contact', href: '/contact' }
];

export const footerNavigation = {
  company: [
    { title: 'Our Brand Story', href: '/about' },
    { title: 'Farm-to-Cone Process', href: '/about#process' },
    { title: 'Sustainability Pledge', href: '/about#sustainability' },
    { title: 'Growth Milestones', href: '/about#awards' },
    { title: 'Contact & Support', href: '/contact' }
  ],
  products: [
    { title: 'Waffle Cones', href: '/products?category=cones' },
    { title: 'Belgian Chocobars', href: '/products?category=chocobars' },
    { title: 'Artisanal Sundaes', href: '/products?category=sundaes' },
    { title: 'Classic Churned Cups', href: '/products?category=cups' },
    { title: 'Real Fruit Pops', href: '/products?category=ice-pops' },
    { title: 'Family Packs', href: '/products?category=family-packs' }
  ],
  partnerships: [
    { title: 'Become a Distributor', href: '/distributor' },
    { title: 'Retailer Network', href: '/distributor#retail' },
    { title: 'Cold-Chain Logistics', href: '/distributor#cold-chain' },
    { title: 'Download Brochure', href: '/distributor#brochure' }
  ],
  support: [
    { title: 'Store Locator', href: '/store-locator' },
    { title: 'Customer Care & FAQs', href: '/contact#faq' },
    { title: 'Nutrition & Allergens', href: '/about#allergens' },
    { title: 'Feedback & Inquiries', href: '/contact' }
  ]
};

export const instagramFeed = [
  {
    id: 'post-1',
    image: 'https://images.unsplash.com/photo-1549395156-e0c1fe6fc7a5?auto=format&fit=crop&w=600&q=80',
    likes: 1240,
    comments: 89,
    caption: 'Double scoop bliss with wild berries and crunchy waffle! 🍓🍦 #IcyDelight',
    tag: '@icydelight_official'
  },
  {
    id: 'post-2',
    image: 'https://images.unsplash.com/photo-1582293041079-7814c2f12063?auto=format&fit=crop&w=600&q=80',
    likes: 2150,
    comments: 142,
    caption: 'That snap when dark Belgian chocolate breaks into velvet cream ✨🍫',
    tag: '#BelgianTruffle'
  },
  {
    id: 'post-3',
    image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=600&q=80',
    likes: 980,
    comments: 64,
    caption: 'Sundae Sunday with warm salted caramel and biscuit cookie crumble 🍨✨',
    tag: '#SundaeFunday'
  },
  {
    id: 'post-4',
    image: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?auto=format&fit=crop&w=600&q=80',
    likes: 1530,
    comments: 97,
    caption: 'Pure real fruit pops, zero artificial colors. Squeeze the sun! 🍊🌞',
    tag: '#RealFruitCandy'
  },
  {
    id: 'post-5',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&w=600&q=80',
    likes: 1890,
    comments: 118,
    caption: 'Family tubs crafted for endless laughter and midnight fridge raids 💚',
    tag: '#FamilyCelebration'
  },
  {
    id: 'post-6',
    image: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=600&q=80',
    likes: 1670,
    comments: 75,
    caption: 'Real strawberry and kiwi slices frozen in natural berry juice! 🥝🍓',
    tag: '#ArtisanIcePops'
  }
];

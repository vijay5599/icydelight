export interface Product {
  id: string;
  name: string;
  slug: string;
  category: 'ice-candy' | 'cups' | 'chocobars' | 'cones' | 'sundaes' | 'family-packs' | 'ice-pops';
  categoryLabel: string;
  flavor: string;
  tagline: string;
  price: number;
  priceDisplay?: string;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  isBestSeller?: boolean;
  isNew?: boolean;
  isFeatured?: boolean;
  image: string;
  accentColor: string;
  lightAccent: string;
  badge?: string;
  description: string;
  story: string;
  ingredients: string[];
  nutrition: {
    calories: number;
    totalFat: string;
    protein: string;
    carbohydrates: string;
    sugars: string;
  };
  packSizes: string[];
  allergens: string[];
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  itemCount: number;
  accentColor: string;
  lightBg: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string;
  avatar: string;
  rating: number;
  review: string;
  favoriteFlavor: string;
}

export interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  phone: string;
  hours: string;
  isFlagship?: boolean;
  type: 'Exclusive Parlour' | 'Retail Partner' | 'Express Kiosk';
}

export interface TimelineMilestone {
  year: string;
  title: string;
  subtitle: string;
  description: string;
  badge: string;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: number;
  comments: number;
  caption: string;
  tag: string;
}

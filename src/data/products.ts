import type { Product, Review } from '@/types';

export const bestsellers: Product[] = [
  {
    id: '1',
    name: 'Essential Hoodie',
    price: 99,
    image: '/images/products/black-hoodie.jpg',
  },
  {
    id: '2',
    name: 'Ocean Hoodie',
    price: 99,
    image: '/images/products/blue-hoodie.jpg',
  },
  {
    id: '3',
    name: 'Forest Oversize T-Shirt',
    price: 49,
    image: '/images/products/green-tshirt.jpg',
  },
];

export const newArrivals: Product[] = [
  {
    id: '4',
    name: 'Sand Oversize T-Shirt',
    price: 49,
    image: '/images/products/sand-tshirt.jpg',
    isNew: true,
  },
  {
    id: '5',
    name: 'Faded Black Jeans',
    price: 79,
    image: '/images/asset_2.jpg',
    isNew: true,
  },
  {
    id: '6',
    name: 'Distressed Light Jeans',
    price: 79,
    image: '/images/asset_3.jpg',
    isNew: true,
  },
];

export const saleProducts: Product[] = [
  {
    id: '7',
    name: 'Sand Hoodie',
    price: 99,
    originalPrice: 195,
    image: '/images/sale/asset_1.jpg',
    isSale: true,
  },
  {
    id: '8',
    name: 'Black Oversize T-Shirt',
    price: 34,
    originalPrice: 79,
    image: '/images/sale/asset_2.jpg',
    isSale: true,
  },
  {
    id: '9',
    name: 'Core Utility Pants',
    price: 79,
    originalPrice: 195,
    image: '/images/sale/asset_3.jpg',
    isSale: true,
  },
];

export const reviews: Review[] = [
  {
    id: '1',
    quote: 'The pieces are versatile — from casual days to evenings out. A timeless design that will never go out of style.',
    author: 'Daniel Wright',
    isVerified: true,
  },
  {
    id: '2',
    quote: "I'm impressed by the craftsmanship. Premium fabrics, great fit, and a quiet elegance that feels timeless.",
    author: 'Sophie Turner',
    isVerified: true,
  },
];

export const socialImages = [
  '/images/socials/asset_1.jpg',
  '/images/socials/asset_2.jpg',
  '/images/socials/asset_3.jpg',
  '/images/socials/social-4.jpg',
  '/images/socials/asset_5.jpg',
];

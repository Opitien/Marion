export interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
}

export interface Review {
  id: string;
  quote: string;
  author: string;
  isVerified: boolean;
}

export interface NavLink {
  label: string;
  href: string;
}

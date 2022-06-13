export interface Product {
  id?: number;
  title: string;
  description: string;
  price: number;
  isFavorite?: boolean;
  rating: { rate: number; count: number };
  category?: string;
  image?: string;
}
export type Products = Product[];

export interface Favorites {
  favorites: Products;
  setFavorites: (favorites: Products) => void;
}

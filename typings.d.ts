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
export interface TextAreaProps {
  id?: string;
  name?: string;
  value: any;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface InputProps extends TextAreaProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  type:
    | "button"
    | "checkbox"
    | "color"
    | "date"
    | "datetime-local"
    | "email"
    | "file"
    | "hidden"
    | "image"
    | "month"
    | "number"
    | "password"
    | "radio"
    | "range"
    | "reset"
    | "search"
    | "submit"
    | "tel"
    | "text"
    | "time"
    | "url"
    | "week";
}

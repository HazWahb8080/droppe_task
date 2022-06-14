import { Component, FormEvent, ReactNode, ChangeEvent } from "react";

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

export interface Message {
  isShowing: boolean;
  content: string;
}

export interface Favorites {
  favorites: Products;
  setFavorites: (favorites: Products) => void;
}

export interface FormProps {
  children: ReactNode | Component[] | any;
  style: string;
  onSubmit: (e: FormEvent) => void;
}
export interface HeaderProps {
  children: ReactNode | string;
  style: string;
}
export interface BodyProps {
  children: ReactNode;
  style?: string;
}
export interface FooterProps {
  children: ReactNode | string;
  style?: string;
}

export interface TextAreaProps {
  id?: string;
  name?: string;
  value: any;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}
export interface InputProps extends TextAreaProps {
  min?: number;
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

export interface ProductContext {
  products?: Products;
  setProducts: (products: Products) => void;
}

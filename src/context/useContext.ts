import { createContext } from "react";
import { ProductContext } from "../../typings";
export const ProductsContext = createContext<ProductContext | []>([]);
export const FavoritesContext = createContext<any>([]);
export const ModalContext = createContext<any>(false);
export const MessageContext = createContext<any>(false);

import { createContext } from "react";
export const ProductsContext = createContext<any>({});
export const FavoritesContext = createContext<any>([]);
export const ModalContext = createContext<any>(false);
export const MessageContext = createContext<any>(false);

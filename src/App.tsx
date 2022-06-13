import React, { useState } from "react";
import {
  FavoritesContext,
  MessageContext,
  ProductsContext,
} from "./context/useContext";
import ShopApp from "./ShopApp";

function App() {
  const [products, setProducts] = useState({
    price: 0,
    description: "",
    title: "",
  });
  const [favorites, setFavorites] = useState([]);
  const [message, setMessage] = useState({ isShowing: false, content: "" });

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <MessageContext.Provider value={{ message, setMessage }}>
          <ShopApp />
        </MessageContext.Provider>
      </FavoritesContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { FavoritesContext, ProductsContext } from "./context/useContext";
import ShopApp from "./ShopApp";

function App() {
  const [products, setProducts] = useState({
    price: 0,
    description: "",
    title: "",
  });
  const [favorites, setFavorites] = useState([]);

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <ShopApp />
      </FavoritesContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;

import React, { useState } from "react";
import { ProductsContext } from "./context/useContext";
import ShopApp from "./ShopApp";

function App() {
  const [products, setProducts] = useState({
    price: 0,
    description: "",
    title: "",
  });

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <ShopApp />
    </ProductsContext.Provider>
  );
}

export default App;

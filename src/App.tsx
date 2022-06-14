import React, { useState } from "react";
import {
  FavoritesContext,
  MessageContext,
  ModalContext,
  ProductsContext,
} from "./context/useContext";
import ShopApp from "./ShopApp";

function App() {
  const [favorites, setFavorites] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [message, setMessage] = useState({ isShowing: false, content: "" });
  const [products, setProducts] = useState({
    price: 0,
    description: "",
    title: "",
  });

  return (
    <ProductsContext.Provider value={{ products, setProducts }}>
      <FavoritesContext.Provider value={{ favorites, setFavorites }}>
        <ModalContext.Provider value={{ modalIsOpen, setModalIsOpen }}>
          <MessageContext.Provider value={{ message, setMessage }}>
            <ShopApp />
          </MessageContext.Provider>
        </ModalContext.Provider>
      </FavoritesContext.Provider>
    </ProductsContext.Provider>
  );
}

export default App;

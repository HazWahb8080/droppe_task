import React, { useContext, useEffect, useState } from "react";
import ProductList from "./components/ProductList";
import styles from "./shopApp.module.css";
import { Favorites } from "../typings";
import {
  FavoritesContext,
  MessageContext,
  ModalContext,
  ProductsContext,
} from "./context/useContext";
import ModalItem from "./components/modal/ModalItem";
import { images } from "./utils/images/images";
import "./index.module.css";
import { Button } from "./components/button/Button";
import { Form } from "./components/form/Form";
export default function ShopApp() {
  // states
  const { products, setProducts } = useContext<any>(ProductsContext);
  const { favorites } = useContext<Favorites>(FavoritesContext);
  const { modalIsOpen, setModalIsOpen } = useContext<any>(ModalContext);
  const { message } = useContext<any>(MessageContext);
  const [loadingForProducts, setLoadingForProducts] = useState(false);
  const { shopapp, logo } = images;

  // fetching Products
  useEffect(() => {
    document.title = "Droppe refactor app";
    setLoadingForProducts(true);
    const fetchData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
          setLoadingForProducts(false);
        })
        .catch((err) => alert(err));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <header className={styles.header}>
        <div className={`${styles.headerImageWrapper}`}>
          <img src={logo.link} alt={logo.alt} className={styles.logo} />
        </div>
      </header>
      <div className={`${styles.main} ${styles.imagesWrapper}`}>
        <img
          src={shopapp.header.left.link}
          alt={shopapp.header.left.alt}
          className={styles.heroImage}
        />
        <img
          src={shopapp.header.right.link}
          alt={shopapp.header.right.alt}
          className={styles.heroImage}
        />
      </div>

      <div className={`${styles.main}`} style={{ paddingTop: 0 }}>
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button onClick={() => setModalIsOpen(true)}>
              Send product proposal
            </Button>
          </span>
          {message.isShowing && (
            <div className={styles.messageContainer}>
              <i>{message.content}</i>
            </div>
          )}
        </div>

        {!loadingForProducts && (
          <div className={styles.statsContainer}>
            <span>Total products: {products.length}</span>
            {" - "}
            <span>Number of favorites: {favorites?.length}</span>
          </div>
        )}

        {
          loadingForProducts ? (
            <div>Loading...</div> // it is better to use loading custom component or skeletons.
          ) : products?.length >= 1 ? (
            <ProductList products={products} />
          ) : (
            <div>No products avialable</div>
          ) // always tell the user the current state
        }
      </div>
      <ModalItem isOpen={modalIsOpen} handleClick={() => setModalIsOpen(false)}>
        <Form />
      </ModalItem>
    </>
  );
}

import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/button/button";
import { Form } from "./components/form/form";
import logo from "./images/droppe-logo.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import styles from "./shopApp.module.css";
import {
  FavoritesContext,
  MessageContext,
  ProductsContext,
} from "./context/useContext";
import { Favorites } from "./../typings.d";
import ProductList from "./components/ProductList";
import ModalItem from "./components/modal/ModalItem";

export default function ShopApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { favorites } = useContext<Favorites>(FavoritesContext);
  const { products, setProducts } = useContext<any>(ProductsContext);
  const { message } = useContext<any>(MessageContext);
  const [loadingForProducts, setLoadingForProducts] = useState(false);

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
      <div className={styles.header}>
        <div className={["container", styles.headerImageWrapper].join(" ")}>
          <img src={logo} className={styles.headerImage} />
        </div>
      </div>

      <>
        <span
          className={["container", styles.main].join(" ")}
          style={{
            margin: "50px inherit",
            display: "flex",
            justifyContent: "space-evenly",
          }}
        >
          <img src={img1} style={{ maxHeight: "15em", display: "block" }} />
          <img src={img2} style={{ maxHeight: "15rem", display: "block" }} />
        </span>
      </>

      <div
        className={["container", styles.main].join(" ")}
        style={{ paddingTop: 0 }}
      >
        <div className={styles.buttonWrapper}>
          <span role="button">
            <Button>Send product proposal</Button>
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

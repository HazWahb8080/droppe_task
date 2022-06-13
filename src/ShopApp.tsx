import React, { useContext, useEffect, useState } from "react";
import lodash from "lodash";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";
import { Button } from "./components/button";
import ProductList from "./components/product-list-components";
import { Form } from "./components/form";
import logo from "./images/droppe-logo.png";
import img1 from "./images/img1.png";
import img2 from "./images/img2.png";
import styles from "./shopApp.module.css";
import { FavoritesContext, ProductsContext } from "./context/useContext";

export default function ShopApp() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const { favorites } = useContext<Favorites>(FavoritesContext);
  const { products, setProducts } = useContext<any>(ProductsContext);

  // fetching Products
  useEffect(() => {
    document.title = "Droppe refactor app";
    const fetchData = async () => {
      await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((data) => {
          setProducts(data);
        })
        .catch((err) => alert(err));
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <React.Fragment>
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
          {/* {this.state.isShowingMessage && (
            <div className={styles.messageContainer}>
              <i>{this.state.message}</i>
            </div>
          )} */}
        </div>

        <div className={styles.statsContainer}>
          <span>Total products: {products.length}</span>
          {" - "}
          <span>Number of favorites: {favorites.length}</span>
        </div>

        {products && !!products.length ? (
          <ProductList products={products} />
        ) : (
          <div></div>
        )}
      </div>

      <>
        <Modal
          isOpen={modalIsOpen}
          className={styles.reactModalContent}
          overlayClassName={styles.reactModalOverlay}
        >
          <div className={styles.modalContentHelper}>
            <div
              className={styles.modalClose}
              onClick={() => setModalIsOpen(false)}
            >
              <FaTimes />
            </div>

            <Form />
          </div>
        </Modal>
      </>
    </React.Fragment>
  );
}

import React, { useContext, useEffect, useState } from "react";
import { Button } from "../button/button";
import styles from "./form.module.css";
import {
  MessageContext,
  ModalContext,
  ProductsContext,
} from "./../../context/useContext";
import { Product } from "./../../../typings.d";

export const Form = () => {
  const { setModalIsOpen } = useContext<any>(ModalContext);
  const { setMessage } = useContext<any>(MessageContext);
  const [newProduct, setNewProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    rating: { rate: 0, count: 0 }, // added based on the scope of the project overall. as customers who will rate the product
  });
  const { products, setProducts } = useContext<any>(ProductsContext);

  useEffect(() => {
    if (!newProduct.title) return; //because it runs after the first render
    const postingNewProduct = async () => {
      await fetch("https://fakestoreapi.com/products", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newProduct),
      })
        .then((res) => res.json())
        .then((json) => {
          setProducts([newProduct, ...products]); //adding the new product
          setMessage({
            isShowing: true,
            content: "Product Added Successfully!",
          }); // important for the user to know that the product was added or not ?
          setTimeout(() => {
            setMessage({ isShowing: false, content: "" });
          }, 2000);
        })
        .catch((err) => {
          setMessage({
            isShowing: true,
            content: "Error Adding your Product , please try again!",
          }); // if there is an error adding the product, the message will not disappear.
        });
    };
    postingNewProduct();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [newProduct]);
  return (
    <form
      className={styles.form}
      // onSubmit={(event) => handleSubmit(event)}
    >
      <span className={styles.label}>Product title: *</span>

      <input placeholder="Title..." defaultValue="" className={styles.input} />

      <span className={styles.label}>Product details: *</span>

      <input placeholder="Price..." defaultValue="" className={styles.input} />

      <textarea
        placeholder="Start typing product description here..."
        defaultValue=""
        className={styles.textarea}
      />

      <Button>Add a product</Button>
    </form>
  );
};

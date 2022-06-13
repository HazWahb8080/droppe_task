import React, { useContext } from "react";
import { Button } from "../button/button";
import styles from "./form.module.css";
import { ModalContext } from "./../../context/useContext";

export const Form = () => {
  const { setModalIsOpen } = useContext<any>(ModalContext);
  const [newProduct, setNewProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    rating: { rate: 0, count: 0 }, // added based on the scope of the project overall. as customers who will rate the product
  });

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

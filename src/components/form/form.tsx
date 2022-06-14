import React, { FormEvent, useContext, useEffect, useState } from "react";
import styles from "./form.module.css";
import {
  MessageContext,
  ModalContext,
  ProductsContext,
} from "../../context/useContext";
import { Product } from "../../../typings";
import Input from "../input/Input";
import useInput from "../../hooks/useInput";
import TextArea from "../textarea/TextArea";
import FormItem from "./formItem/FormItem";
import Button from "../button/Button";

export default function Form() {
  const { setModalIsOpen } = useContext<any>(ModalContext);
  const { setMessage } = useContext<any>(MessageContext);
  const [newProduct, setNewProduct] = useState<Product>({
    title: "",
    description: "",
    price: 0,
    rating: { rate: 0, count: 0 }, // added based on the scope of the project overall. as customers who will rate the product
  });
  const { products, setProducts } = useContext<any>(ProductsContext);

  // handling the form submit
  const [title, bindTitle, resetTitle] = useInput("");
  const [description, bindDescription, resetDescription] = useInput("");
  const [price, bindPrice, resetPrice] = useInput("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Form validation here
    const formInputs = document.querySelectorAll("#form-input-required");
    const formInputsArray = Array.from(formInputs);
    let Errors = [];
    formInputsArray.forEach((field: HTMLInputElement | any) => {
      if (field.value.trim() === "" || field.value === "0") {
        Errors.push(`${field.name} is required`);
        alert(`${field.name} is required`);
      }
    });
    if (Errors.length === 0) {
      setNewProduct({
        ...newProduct,
        title: title,
        description: description,
        price: price,
      });
      setMessage({ isShowing: true, content: "Adding Product" });
      setModalIsOpen(false);
      // in order to solve the problem of the inputs not being reseted when the modal is closed
      resetDescription();
      resetTitle();
      resetPrice();
    }
  };

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
    <FormItem style={styles.form} onSubmit={(e) => handleSubmit(e)}>
      <FormItem.Body>
        <p className={styles.label}>Product Title: *</p>
        <Input
          id="form-input-required"
          name="title"
          {...bindTitle}
          placeholder="Women's Short Sleeve Boat Neck V"
        />
        <p className={styles.label}>Product details: *</p>
        <Input
          id="form-input-required"
          name="price"
          placeholder="120"
          type="number"
          min="0"
          {...bindPrice}
        />
        <TextArea
          id="form-input-required"
          name="description"
          placeholder="Start typing product description here..."
          {...bindDescription}
        />
      </FormItem.Body>
      <FormItem.Footer>
        <Button>Add a product</Button>
      </FormItem.Footer>
    </FormItem>
  );
}

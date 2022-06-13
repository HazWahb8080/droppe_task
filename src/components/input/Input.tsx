import React from "react";
import { InputProps } from "../../../typings";
import styles from "./input.module.css";

function Input({ id, name, value, onChange, placeholder, type }: InputProps) {
  return (
    <input
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.input}
      type={type}
    />
  );
}

export default Input;

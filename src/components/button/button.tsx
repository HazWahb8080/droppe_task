import React, { ReactNode } from "react";
import styles from "./button.module.css";

interface Props {
  children: string | ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export const Button = ({ children, onClick, type }: Props) => (
  <button className={styles.button} type={type} onClick={onClick}>
    {children}
  </button>
);

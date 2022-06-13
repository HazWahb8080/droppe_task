import React from "react";
import { TextAreaProps } from "../../../typings";
import styles from "./textarea.module.css";

function TextArea({ id, name, value, onChange, placeholder }: TextAreaProps) {
  return (
    <textarea
      id={id}
      name={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className={styles.textarea}
    />
  );
}

export default TextArea;

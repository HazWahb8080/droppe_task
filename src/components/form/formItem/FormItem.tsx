import React from "react";
import {
  BodyProps,
  FormProps,
  HeaderProps,
  FooterProps,
} from "../../../../typings";
const FormItem = ({ children, style, onSubmit }: FormProps) => {
  let subComponentList = Object.keys(FormItem);

  let subComponents = subComponentList.map((key) => {
    return React.Children.map(children, (child) =>
      child.type.name === key ? child : null
    );
  });

  return (
    <>
      <form className={style} onSubmit={onSubmit}>
        {subComponents.map((component) => component)}
      </form>
    </>
  );
};

// whenever needed, we can use this component to create a header for the form.
const Header = ({ children, style }: HeaderProps) => (
  <div className={style}>{children}</div>
);
FormItem.Header = Header;

const Body = ({ children, style }: BodyProps) => (
  <div className={style}>{children}</div>
);
FormItem.Body = Body;

// whenever needed, we can use this component to create a footer for the form.
const Footer = ({ children, style }: FooterProps) => (
  <div className={style}>{children}</div>
);
FormItem.Footer = Footer;

export default FormItem;

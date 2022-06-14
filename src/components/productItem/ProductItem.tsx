import React, { useContext, useState } from "react";
import { Favorites, Product } from "../../../typings";
import styles from "./ProductItem.module.css";
import { FaStar } from "react-icons/fa";
import { FavoritesContext } from "../../context/useContext";

interface ProductItemProps {
  product: Product;
}

export default function ProductItem({ product }: ProductItemProps) {
  const [isFavorite, setIsFavorite] = useState<boolean>(false);
  const { favorites, setFavorites } = useContext<Favorites>(FavoritesContext);
  const { title, description, price, rating } = product; // destructuring
  // Problem: Now product title can be too long, I just put overflowX as fix now
  // fix: remove all overflowX properies and replace whitespace:nowrap property with normal [default] so can be removed as well.
  // fix_2: other cases we can use break-word property to break the text into multiple lines.

  function handleFavProduct() {
    setIsFavorite((currState) => !currState);
    if (isFavorite) {
      setFavorites(favorites.filter((item) => item.id !== product.id));
    } else {
      setFavorites([...favorites, product]);
    }
  }

  return (
    <div  className={styles.product}>
      <span className={styles.productTitle}>{title}</span>

      <p>
        <strong>Rating: {rating ? `${rating.rate}/5` : ""}</strong>
      </p>

      <p>
        <b>Price: ${+price}</b>
      </p>

      <p className={styles.productBody}>
        <span>
          <b>Description:</b>
        </span>
        <br />
        {description}
      </p>

      <div
        className={styles.actionBar} //having a camelCase classname
        style={{ display: "table", width: "100%" }}
      >
        <div
          className={`${styles.actionBarItem} ${isFavorite ? "active" : ""}`}
          role="button"
          onClick={handleFavProduct}
        >
          <FaStar />
          <span className={styles.actionBarItemLabel}>
            {isFavorite ? "Remove from favorites" : "Add to favorites"}
          </span>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ProductItem from "../productItem/ProductItem";
import { Products } from "../../../typings";

interface ProductListProps {
  products: Products;
}

function ProductList({ products }: ProductListProps) {
  return (
    <div data-testid="product-item">
      {products.length >= 1 ? (
        products.map((p) => (
          <ProductItem key={p.id} product={p} /> // id as key not index is important for React to know which item is changed
        ))
      ) : (
        <p>No products found</p>
      )}
    </div>
  );
}

export default ProductList;

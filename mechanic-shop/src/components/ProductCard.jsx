import React from "react";
import "./ProductCard.css";

const ProductCard = ({ image, title, price }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} className="product-image" />
      <div className="product-info">
        <h3>{title}</h3>
        <p>${price} USD</p>
      </div>
    </div>
  );
};

export default ProductCard;

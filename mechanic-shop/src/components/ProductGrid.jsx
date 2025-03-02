import React from "react";
import ProductCard from "./ProductCard";
import "./ProductGrid.css";

const products = [
  { id: 1, image: "/src/assets/AI_BMW_GARAGE.jpeg", title: "AWESOMENESS", price: "50.00" },
  { id: 2, image: "/src/assets/cars_lift.jpg", title: "DIRECTNESS", price: "60.00" },
  { id: 3, image: "/src/assets/AI_CALLIPERS.jpeg", title: "SIMPLICITY", price: "40.00" },
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard key={product.id} {...product} />
      ))}
    </div>
  );
};

export default ProductGrid;

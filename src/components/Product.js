import React from "react";
import "./Product.css";
function Product({ title, image, price, rating }) {
  return (
    <div className="product">
      <div className="product__info">
        <p>The Lean Startup</p>
        <p className="product__price">
          <small>$</small>
          <strong>19.99</strong>
        </p>
        <div className="product__rating">
          <p>🌟</p>
        </div>
      </div>
      <img
        src="https://is5-ssl.mzstatic.com/image/thumb/Publication2/v4/09/25/78/092578c0-202d-85a4-15f8-671efbb82f8e/9780307887917.jpg/1200x630wz.png"
        alt=""
      />
      <button>Add to Basket</button>
    </div>
  );
}

export default Product;

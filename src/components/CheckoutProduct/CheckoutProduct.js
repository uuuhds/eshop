import React from "react";
import "./CheckoutProduct.css";
import { useStore } from "../../store";

function CheckoutProduct({ id, image, title, price, rating, number }) {
  const [, dispatch] = useStore();
  const removeFromBasket = () => {
    dispatch({
      type: "DEL_TO_BASKET",
      payload: number,
    });
  };
  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p key={i}>⭐</p>
            ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
}

export default CheckoutProduct;

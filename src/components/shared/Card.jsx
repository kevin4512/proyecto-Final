import React from "react";
import { RiAddLine } from "react-icons/ri";
import './Card.css';

const Card = (props) => {
  const { img, description, price, inventory, addToCart } = props;

  return (
    <div className="card-container">
      <img
        src={img}
        className="card-image"
        alt={description}
      />
      <p className="card-description">{description}</p>
      <span className="card-price">${price}</span>
      <p className="card-inventory">{inventory} disponibles</p>
      <button
        onClick={() => addToCart(description)}
        className="card-button"
      >
        <RiAddLine className="card-button-icon" /> Añadir al carrito
      </button>
    </div>
  );
};

export default Card;

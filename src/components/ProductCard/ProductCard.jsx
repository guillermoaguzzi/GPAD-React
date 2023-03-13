import { Link } from "react-router-dom";

import React from "react";
import "./ProductCard.css"

const ProductCard = ({ element }) => {
  return (
    <Link to={`/itemDetail/${element.id}`}>
    <div className="containerCard">
    <h2>{element.title}</h2>
    <h2>{element.price}</h2>
    <img
        src={element.img}
        alt=""
        style={{ width: "100%", height: "200px" }}
    />
    </div>
    </Link>
  );
};

export default ProductCard;

import React from "react";

import "./ServiceCard.css"

import { Link } from "react-router-dom";

const ServiceCard = ({ element }) => {
return (
    <div className="containerCard">
    <h2>{element.title.toUpperCase()}</h2>
    <h2>{"$ "}{element.price}</h2>
    <img
        src={element.img}
        alt={element.title}
        style={{ width: "100%", height: "200px" }}
    />
    <Link to={`/ItemDetail/${element.id}`}>
    <button>Ver más</button>
    </Link>
    </div>
);
};

export default ServiceCard;
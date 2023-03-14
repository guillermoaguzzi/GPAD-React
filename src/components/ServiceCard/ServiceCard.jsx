import React from "react";

import "./ServiceCard.css"

import { Link } from "react-router-dom";

const ServiceCard = ({ element }) => {
return (
    <div className="containerCard">
        <h2>{element.title.toUpperCase()}</h2>
        <h2 id="cardPrice" >{"$ "}{element.price}</h2>
        <img id="cardImg"
            src={element.img}
            alt={element.title}
        />
        <div id="Btn">
        <Link to={`/ItemDetail/${element.id}`}>
        <button id="cardBtn">Ver más</button>
        </Link>
        </div>
    </div>
);
};

export default ServiceCard;
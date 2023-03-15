import "./FinishBuy.css";
import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
    
    return (
        <div id="container">
        <h1 id="text">your purchase ID is: {orderId} </h1>
        <div /* id="BtnBuy" */>
        <Link to="/">
        <button id="BtnBuy">Keep looking!</button>
        </Link>
        </div>
        </div>
    );
};

export default FinishBuy;
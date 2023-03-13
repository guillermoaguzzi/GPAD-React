import React from "react";
import { Link } from "react-router-dom";

const FinishBuy = ({ orderId }) => {
    
    return (
        <div>
        <h1>your purchase ID is {orderId} </h1>
        <Link to="/">
        <button className="checkoutButton">Keep looking!</button>
        </Link>
        </div>
    );
};

export default FinishBuy;
import React from "react";
import ServiceCard from "../ServiceCard/ServiceCard";

const ItemList = ({ items }) => {
  return (
    <div
    style={{
        backgroundColor: "#E08700",
        width: "100%",
        height: "100%",
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-evenly",
        alignItems: "center",
    }}
    >
    {items.map((element) => {
        return <ServiceCard element={element} key={element.id}/>;
    })}
    </div>
);
};

export default ItemList;
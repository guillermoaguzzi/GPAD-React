import "./ItemDetail.css";
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'
import { Link } from "react-router-dom";

import Swal from 'sweetalert2'


    const ItemDetail = ({service}) => {  

    const { addToCart, getQuantityById } = useContext( CartContext )

    const onAdd = (ItemQuantity)=>{

        const showCartButton = ()=>{
            const Button = document.getElementById('button');
            Button.className = 'visible';
        }

            const obj = {
                ...service,
                quantity: ItemQuantity
            }

            addToCart(obj)

            Swal.fire({
                icon: 'success',
                iconColor: '#fe9900',
                confirmButtonColor: '#fe9900',
                confirmButtonText: 'Cool!',
                title: 'Service added Succesfully!',
                text: 'Go to Cart for check out or keep shopping more services!',
            })

            showCartButton()
        };

        const quantity = getQuantityById(service.id)


    return (
        <div>
            <div>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
                <img className="serviceImg" src={service.img} alt="" />
            </div>
            <ItemCount stock={service.stock} initial={quantity} onAdd={onAdd}/>
            <Link to="/Cart">
            <button type="button" id="button" className="toMainButton, hidden">Go to Cart!</button>
            </Link>
        </div>
    )
}

export default ItemDetail
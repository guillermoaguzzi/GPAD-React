import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import ItemCount from '../ItemCount/ItemCount'

    const ItemDetail = ({service}) => {  

    const { addToCart, getQuantityById } = useContext( CartContext )

    const onAdd = (ItemQuantity)=>{

            const obj = {
                ...service,
                quantity: ItemQuantity
            }

            addToCart(obj)
        };

        const quantity = getQuantityById(service.id)
        console.log(quantity)



    return (
        <div>
            <div>
                <h1>{service.title}</h1>
            </div>
            <ItemCount stock={service.stock} initial={quantity} onAdd={onAdd}/>
        </div>
    )
}

export default ItemDetail
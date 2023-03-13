import React from 'react'
import ItemCount from '../ItemCount/ItemCount'

    const ItemDetail = ({service}) => {  

        const onAdd = (ItemQuantity)=>{

            const obj = {
                title: service.title,
                price: service.price,
                img: service.img,
                quantity: ItemQuantity
            }

            console.log(obj)

        }



        return (
            <div>
                <div>
                    <h1>{service.title}</h1>
                </div>
                <ItemCount stock={service.stock} initial={1} onAdd={onAdd}/>
            </div>
        )
}

export default ItemDetail
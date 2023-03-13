import React, { useState, createContext } from 'react'

export const CartContext = createContext ()

    const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addToCart = ( service )=>{
        let exist = isInCart(service.id)

        if(exist){

        let newCart = cart.map( (item)=>{
            if(item.id === service.id){
            let newService = {
                ...item,
                quantity: service.quantity
            }
            return newService
            }else{
            return item
            }
        })

        setCart(newCart)

        }else{
        setCart( [ ...cart, service ] )
        }
        
    }

    const clearCart = ()=>{
        setCart([])
    }

    const deleteServiceById = (id)=>{
        let newCart = cart.filter (service => service.id !== id)
        setCart(newCart)
    }

    const isInCart = (id)=>{
        let exist = cart.some(element => element.id === id)
        return exist
    }



const getQuantityById = (id)=>{
    let service = cart.find (element => element.id === id)
    return service?.quantity
}

const getTotalItems = ()=>{

    const total = cart.reduce((acc, element)=>{
    return acc + element.quantity
    }, 0 )
    return total
}

const getTotalPrice = ()=>{
    
    const total = cart.reduce( (acc, element)=>{
        return acc + (element.price * element.quantity)
    }, 0)

    return total

}


let data = {
    cart: cart,
    addToCart,
    clearCart,
    deleteServiceById,
    getQuantityById,
    getTotalItems,
    getTotalPrice
}

return (
    <CartContext.Provider value={ data }>
        {children}
    </CartContext.Provider>
)
}

export default CartContextProvider
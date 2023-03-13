import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const Cart = ()=>{

    const { cart, clearCart, deleteServiceById, getTotalItems, getTotalPrice  } = useContext(CartContext)

    console.log(cart);

    return(
        <div>
            <h1>Cart</h1>

            {
            cart.map( item => {
                return <div key={item.id}>
                    <h3>{item.title}</h3>
                    <h3>{item.price}</h3>
                    <h3>{item.quantity}</h3>
                    <button onClick={()=> deleteServiceById(item.id)}>Remove from Cart</button>
                </div>
            })
            }
            <button onClick={clearCart}>Clear cart</button>
            <h1>Total Products: {getTotalItems()}</h1>
            <h1>Total Budget: ${getTotalPrice()}</h1>
        </div>
    )
}

export default Cart;

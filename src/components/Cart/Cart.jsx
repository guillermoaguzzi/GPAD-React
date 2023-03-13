import "./Cart.css";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import Swal from "sweetalert2";
import NoData from "../../assets/image/noData.svg";
import { Link } from "react-router-dom";
import FormCheckOut from "../FormCheckOut/FormCheckOut";
import FinishBuy from "../FinishBuy/FinishBuy";

const Cart = () => {
const { cart, clearCart, deleteServiceById, getTotalItems, getTotalPrice } =
useContext(CartContext);

const [buy, setBuy] = useState(false)
const [orderId, setOrderId] = useState(null);


const clearCartAlert = () => {
Swal.fire({
    title: "Sure you want to delete the entire Cart?",
    showDenyButton: true,
    confirmButtonText: "YES, delete it!",
    confirmButtonColor: "#fe9900",
    denyButtonText: `NO, I'm having second thoughts`,
    denyButtonColor: "black",
    iconColor: "#fe9900",
}).then((result) => {
    if (result.isConfirmed) {
    Swal.fire("Cart Deleted!", "", "success");
    clearCart();
    } else if (result.isDenied) {
    Swal.fire("Good Call, mate!", "", "success");
    }
});
};

const total = getTotalPrice();

if (orderId) {
    return (
    <FinishBuy orderId={orderId} />
    );
}

return (
<div className="container">
    {!buy ? (
    <div className="subContainer">
    {
        cart.length < 1 && <div className="noData">
        <h1 className="cartTitle">CART</h1>
        <img className="noDataImg" src={NoData} alt="" />
        <h3 className="noDataText" >Sorry, no services added to your cart yet!</h3>
        <Link to="/">
        <button type="button" className="toMainButton">Go to Services!</button>
        </Link>
        </div>
    }
    {
        cart.length > 0 && <div className="subContainers">
        <div className="subContainersWhite">
        <h1 className="cartTitle">CART</h1>
        {cart.map((item) => {
            return (
            <div className="Data" key={item.id}>
                <h3 className="serviceTitle">{item.title.toUpperCase()}</h3>
                <div className="subData">
                <img className="serviceImg" src={item.img} alt="" />
                <div className="infoData">
                <h3 className="properties">Price: </h3>
                <h3 className="properties">Quantity: </h3>
                <h3 className="properties">SubTotal: </h3>
                </div>
                <div className="infoValues">
                <h3 className="values">${item.price}</h3>
                <h3 className="values">{item.quantity}</h3>
                <h3 className="values">${item.price*item.quantity}</h3>
                </div>
                </div>
                <button className="removeById" onClick={() => deleteServiceById(item.id)}>
                Remove from Cart
                </button>
            </div>
            );
            })}
        </div>
    <div className="subContainersOrange">
    <h3 className="totals">Total Products: {getTotalItems()}</h3>
    <h3 className="totals">Total Budget: ${getTotalPrice()}</h3>
    <button className="checkoutButton" onClick={() => setBuy(true)}>Go to checkout!</button>
    <button onClick={() => clearCartAlert()}>Clear cart</button>
    </div>
        </div>
    }
    </div>
    ) : (
    <FormCheckOut cart={cart} total={total} clearCart={clearCart} setOrderId={setOrderId}/>
        )}
    
</div>
);
};

export default Cart;

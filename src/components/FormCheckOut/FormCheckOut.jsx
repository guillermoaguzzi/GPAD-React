import "./FormCheckOut.css";
import { useState } from "react";

import { serverTimestamp,  addDoc, collection, updateDoc, doc,  } from "firebase/firestore";
import { db } from "../../firebaseconfig"

const FormCheckOut = ({ cart, total, clearCart, setOrderId }) => {

const [userInfo, setUserInfo] = useState({ email: "", phone: "" });

const handleSubmit = (e) => {
    e.preventDefault();
    


    const order = {
    buyer: userInfo,
    items: cart,
    total: total,
    date: serverTimestamp(),
    };


    const orderCollection = collection(db, "orders");

    
    addDoc(orderCollection, order)
    .then((res) => setOrderId(res.id))
    .catch((err) => console.log(err));


    cart.map((service) => {
    updateDoc(doc(db, "services", service.id), {
        stock: service.stock - service.quantity,
    });
    });

    clearCart();
    
};

return (
    <div>
        
    <form id="Form" onSubmit={handleSubmit}>
        <h2 id="formElement">Enter your information!</h2>
        <input id="formElement" type="text" placeholder="Write your email" name="email" onChange={(e) => setUserInfo({ ...userInfo, email: e.target.value })}
        />
        <input id="formElement" type="text" placeholder="Write your phone number" name="phone" onChange={(e) => setUserInfo({ ...userInfo, phone: e.target.value })}
        />
        <button id="formElement">BUY</button>
    </form>
    </div>
);
};

export default FormCheckOut;
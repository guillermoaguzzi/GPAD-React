import { Link } from "react-router-dom";

import "./CartWidget.css"
import { IconContext } from "react-icons";
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartWidget = () => {

  const {getTotalItems} = useContext (CartContext)


  return (
    <div>
      <Link to="/Cart">
      <IconContext.Provider
        value={{ color: 'white', size: '30px' }}
      >
        <div className="rounded-circle d-flex justify-content-center align-items-center"
        style = {{
          backgroundColor:"#fe9900", 
          color:"black", 
          width:"1.5rem", 
          hight:"1.5rem", 
          position:"absolute",
          transform: "translate(-90%, -30%)"}}>{getTotalItems()}</div>
        <div className="CartWidget">
          <AiOutlineShoppingCart />
        </div>
      </IconContext.Provider>
      </Link>
    </div>
  );
}

export default CartWidget
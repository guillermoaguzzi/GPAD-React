import "./ItemCount.css";
import { useEffect, useState } from "react";

const ItemCount = ({ stock, initial=1, onAdd }) => {
    const [counter, setCounter] = useState(initial);

    useEffect( ()=>{
        setCounter(initial)
    }, [initial])

    const add = () => {
    if (counter < stock) {
        setCounter(counter + 1);
    }
    };

    const substract = () => {
        if(counter > 1){
            setCounter(counter - 1);
        }
    };

    return (
    <div id="ItCntContainer">
        <div id="ItCntNumberContainer">
        <h1 id="ItCntCounter">{counter}</h1>
        </div>
        <div class="grid-container">
        <button class="grid-item" onClick={add}>Add</button>
        <button class="grid-item" onClick={() => onAdd(counter)}>Add to Cart</button>
        <button class="grid-item" onClick={substract}>Remove</button>
        </div>
    </div>
    );
};

export default ItemCount;
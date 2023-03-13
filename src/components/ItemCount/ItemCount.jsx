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
    <div>
        <h1>{counter}</h1>

        <button onClick={add}>Add</button>
        <button onClick={substract}>Substract</button>
        <button onClick={() => onAdd(counter)}>Add to Cart</button>
    </div>
    );
};

export default ItemCount;
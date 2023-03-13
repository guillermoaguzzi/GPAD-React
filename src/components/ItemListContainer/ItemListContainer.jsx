import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { services } from "../../ServicesMock";
import ItemList from "../ItemList/ItemList";
/* import "./ItemListContainer.css" */

const ItemListContainer = () => {

  const {categoryName} = useParams()

  const [items, setItems] = useState([])

  
  useEffect( ()=>{

    const servicesFiltered = services.filter( (service)=> service.category === categoryName)

    const task = new Promise((resolve, reject) => {
        resolve( categoryName ? servicesFiltered : services )
    });
  
    task
      .then((res) => {
        setItems( res );
      })
  }, [categoryName])

  return (
    <>
      <ItemList items={ items } />
    </>
  );
};

export default ItemListContainer;
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../ItemList/ItemList";
import FadeLoader from "react-spinners/FadeLoader";
import { db } from "../../firebaseconfig";
import { getDocs, collection, query, where } from "firebase/firestore"

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {

  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {

    const itemCollection = collection ( db , "services" )

    if(categoryName){

      const q = query ( itemCollection, where("category", "==", categoryName ) )

      getDocs(q)
      .then((res)=> {
        const services = res.docs.map( service => {
          return {
            ...service.data(),
            id: service.id
          }
        } )
  
        setItems (services)
      })
      .catch((err)=> console.log("error: " + err))
    
    }else{

      getDocs(itemCollection)
      .then((res)=> {
        const services = res.docs.map( service => {
          return {
            ...service.data(),
            id: service.id
          }
        } )
  
        setItems (services)
      })
      .catch((err)=> console.log("error: " + err))

    }

  }, [categoryName]);


  return (
    <div>
      {items.length < 1 ? (
        <FadeLoader
          color={"#fe9900"}
          cssOverride={styles}
          size={150}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      ) : (
        <ItemList items={items} />
      )}
    </div>
  );
};

export default ItemListContainer;

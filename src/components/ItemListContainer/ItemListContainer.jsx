import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { services } from "../../ServicesMock";
import ItemList from "../ItemList/ItemList";
import FadeLoader from "react-spinners/FadeLoader";

const styles = {
  display: "block",
  margin: "0 auto",
  borderColor: "red",
};

const ItemListContainer = () => {
  const { categoryName } = useParams();

  const [items, setItems] = useState([]);

  useEffect(() => {
    const servicesFiltered = services.filter(
      (service) => service.category === categoryName
    );

    const task = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? servicesFiltered : services);
      }, 500);
    });

    task.then((res) => {
      setItems(res);
    });
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

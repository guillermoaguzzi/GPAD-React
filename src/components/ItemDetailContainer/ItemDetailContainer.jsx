import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from "../../ServicesMock";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [service, setService] = useState({})

    useEffect( ()=>{

    let serviceSelected = services.find( serv => serv.id === +id )

        setService( serviceSelected )

    },[])


return (
    <ItemDetail service={service}/>
)
}

export default ItemDetailContainer;
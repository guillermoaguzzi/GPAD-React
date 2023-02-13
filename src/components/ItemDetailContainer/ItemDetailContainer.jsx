import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import { services } from "../../ServicesMock";

const ItemDetailContainer = () => {

    const {id} = useParams()

    const [service, setService] = useState({})

    useEffect( ()=>{

    let serviceSelected = services.find( serv => serv.id === +id )

        setService( serviceSelected )

    },[])


return (
    <div>
        <h1>{service.title}</h1>
    </div>
)
}

export default ItemDetailContainer;
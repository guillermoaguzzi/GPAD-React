import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { db } from '../../firebaseconfig';
import { getDoc, collection, doc } from "firebase/firestore"


const ItemDetailContainer = () => {

    const {id} = useParams()

    const [service, setService] = useState({})

    useEffect( ()=>{

        const itemCollection = collection ( db , "services" )
        const ref = doc(itemCollection, id)

        getDoc(ref)
        .then((res)=> {
            setService({
                ...res.data(),
                id: res.id
            })
        })
        .catch( err => console.log(err))

    },[ id ])


return (
    <ItemDetail service={service}/>
)
}

export default ItemDetailContainer;
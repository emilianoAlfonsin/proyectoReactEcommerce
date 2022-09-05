import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import { ItemDetail } from '../ItemDetail/ItemDetail'


export const ItemDetailContainer = () => {

    const [item, setItem] = useState(null)
    const [loading, setLoading] = useState(true)
    const {itemId} = useParams()


    useEffect (() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setItem (res.find((prod)=> prod.id === Number(itemId)))
            })
            .catch (err => console.log(err))
            .finally ( () => {
                setLoading(false)
            })
            
    }

    )

    return (
        <div>
            {
                loading
                ? <h2>Cargando</h2>
                : <ItemDetail item={item}/>
            }
        </div>
    )
}


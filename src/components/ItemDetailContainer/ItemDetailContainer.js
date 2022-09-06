import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const {prodId} = useParams()


    useEffect (() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                setProducto (res.find((prod)=> prod.id === Number(prodId)))
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
                : <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
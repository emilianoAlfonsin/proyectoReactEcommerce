import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { pedirDatos } from '../../helpers/pedirDatos'
import ItemDetail from '../ItemDetail/ItemDetail'
import Spinner from 'react-bootstrap/Spinner';



const ItemDetailContainer = () => {

    const [producto, setProducto] = useState(null)
    const [loading, setLoading] = useState(true)
    const {prodId} = useParams()
    console.log(prodId)

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
            
    }, [prodId]) 

    return (
        <div >
            {
                loading
                ?   <h4>Cargando <Spinner animation="border" variant='secondary'/></h4>
                : <ItemDetail producto={producto}/>
            }
        </div>
    )
}

export default ItemDetailContainer
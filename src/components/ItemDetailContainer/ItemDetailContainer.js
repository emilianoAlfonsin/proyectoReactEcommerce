import { doc, getDoc } from 'firebase/firestore';
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { db } from '../../firebase/config';
import ItemDetail from '../ItemDetail/ItemDetail'
import Loader from '../Loader/Loader';



const ItemDetailContainer = () => {

    const [product, setProduct] = useState(null)
    const [loading, setLoading] = useState(true)
    const {prodId} = useParams()
    console.log(prodId)

    useEffect ( () => {
        setLoading(true)

        const docRef = doc( db, 'Products', prodId)

        getDoc(docRef)
            .then((doc) => {
                setProduct({id: doc.id, ...doc.data()})
            })
            .finally(() => {
                setLoading(false)
            })

    }, [prodId]) 

    return (
        <div >
            {
                loading
                ? <Loader/>
                : <ItemDetail product={product}/>
            }
        </div>
    )
}

export default ItemDetailContainer
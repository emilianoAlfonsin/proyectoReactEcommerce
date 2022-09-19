import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from 'firebase/firestore'
import { db } from '../../firebase/config'
import Loader from '../Loader/Loader'
import ItemList from '../ItemList/ItemList'
import './ItemListContainer.scss'


const ItemListContainer = () => {
   
   const [products, setproducts] = useState([])
   const [loading, setLoading] = useState(true)
   const {categoryId} = useParams()


   useEffect(() => {
      setLoading(true)

      const productsRef = collection(db, 'Products')
      const q = categoryId 
                  ? query(productsRef, where( 'category', '==', categoryId))
                  : productsRef
                  
      getDocs(q)
         .then( (resp) =>{
            const productsDB = resp.docs.map((doc) => ({ id: doc.id, ...doc.data()}))
            setproducts( productsDB )
         })
         .finally( setLoading(false) )

   }, [categoryId])



   return (
      <div className='container'>
         {
            loading 
            ? <Loader/>
            : <ItemList products={products}/>
         }
      </div>
   )
}

export default ItemListContainer